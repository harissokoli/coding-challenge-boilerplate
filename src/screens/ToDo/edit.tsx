import {
  ChangeEvent,
  FormEvent,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import Context from '../../store/context'

import {
  Box,
  Button,
  Container,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import { useTheme } from '@mui/material/styles'

import returnStatus from '../../helpers/returnStatus'
import mapEditedTask from '../../helpers/mapEditedTask'

import { StatusEnum, Statuses } from '../../constants/status'
import { TaskType } from '../../types/TaskType'

interface FormState {
  title: string
  status: StatusEnum
  description: string
}

interface FormErrors {
  title?: string
  description?: string
}

const initialFormData = {
  title: '',
  description: '',
  status: StatusEnum.TO_DO,
}

const ToDoEdit = () => {
  const theme = useTheme()
  const { id } = useParams()
  const navigate = useNavigate()

  const { editTask, tasks } = useContext(Context)

  const [task, setTask] = useState<TaskType | undefined>(undefined)
  const [formData, setFormData] = useState<FormState>(initialFormData)
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

  const handleSelectChange = (event: SelectChangeEvent<StatusEnum>) => {
    const {
      target: { value },
    } = event
    setFormData({ ...formData, status: Number(value) })
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    const errors = validate()
    if (Object.keys(errors).length === 0) {
      setFormErrors({})

      if (task) {
        const data = mapEditedTask(formData, task)
        editTask(data)
        navigate('/')
      }
    } else {
      setFormErrors(errors)
    }
  }

  const availableTaskStatuses = useMemo(() => {
    if (task) {
      return returnStatus(task?.status)
    }
  }, [task])

  useEffect(() => {
    if (tasks && id) {
      const t = tasks.find(task => task.id === Number(id))
      if (t) {
        setTask(t)
        setFormData({
          title: t.title,
          description: t.description,
          status: t.status,
        })
      }
    }
  }, [tasks, id])

  return (
    <Container maxWidth="md">
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
            <EditIcon /> <Typography variant="h6">Edit Task</Typography>
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
          <Stack>
            <InputLabel id="status">Status</InputLabel>
            <Select
              id="status"
              label="Status"
              labelId="status"
              value={formData.status}
              onChange={handleSelectChange}
            >
              {Object.values(Statuses).map((status, index) => (
                <MenuItem
                  disabled={
                    !availableTaskStatuses?.includes(index) &&
                    task?.status !== index
                  }
                  value={index}
                >
                  {status}
                </MenuItem>
              ))}
            </Select>
          </Stack>
          <Stack direction="row" gap={2}>
            <Button
              fullWidth
              size="large"
              variant="contained"
              onClick={handleSubmit}
            >
              Save Changes
            </Button>
            <Button
              fullWidth
              size="large"
              variant="outlined"
              onClick={() => navigate('/')}
            >
              Cancel
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Container>
  )
}

export default ToDoEdit
