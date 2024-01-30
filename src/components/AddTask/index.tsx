import { ChangeEvent, FormEvent, useState } from 'react'

import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined'

interface FormState {
  title: string
  description: string
}

interface FormErrors {
  title?: string
  description?: string
}

const AddTask = () => {
  const theme = useTheme()

  const [formData, setFormData] = useState<FormState>({
    title: '',
    description: '',
  })
  const [formErrors, setFormErrors] = useState<FormErrors>({})

  const validate = (): FormErrors => {
    const errors: FormErrors = {}

    if (!formData.title) {
      errors.title = 'Title is required'
    }

    if (formData.description.length < 10) {
      errors.description = 'Please provide a longer description'
    }
    if (!formData.description) {
      errors.description = 'Description is required'
    }

    return errors
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    const errors = validate()
    if (Object.keys(errors).length === 0) {
      setFormErrors({})
      console.log('Form submitted:', formData)
    } else {
      setFormErrors(errors)
    }
  }

  return (
    <Box
      mb={4}
      sx={{
        p: theme.spacing(4),
        borderRadius: theme.shape.borderRadius,
        background: theme.palette.background.paper,
      }}
    >
      <Stack gap={2}>
        <Stack direction="row" alignItems="center" gap={1}>
          <InsertDriveFileOutlinedIcon />{' '}
          <Typography variant="h6">Add a new Task</Typography>
        </Stack>
        <Stack>
          <TextField
            fullWidth
            name="title"
            label="Title"
            margin="normal"
            variant="outlined"
            value={formData.title}
            onChange={handleChange}
            error={!!formErrors.title}
            helperText={formErrors.title}
          />
        </Stack>
        <Stack>
          <TextField
            rows={4}
            fullWidth
            multiline
            margin="normal"
            name="description"
            variant="outlined"
            label="Description"
            onChange={handleChange}
            value={formData.description}
            error={!!formErrors.description}
            helperText={formErrors.description}
          />
        </Stack>
        <Stack justifyContent="end" alignItems="flex-end">
          <Button size="large" variant="contained" onClick={handleSubmit}>
            + Add
          </Button>
        </Stack>
      </Stack>
    </Box>
  )
}

export default AddTask
