import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined'

const AddTask = () => {
  const theme = useTheme()

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
          <TextField label="Title" variant="outlined" />
        </Stack>
        <Stack>
          <TextField label="Description" multiline maxRows={4} minRows={4} />
        </Stack>
        <Stack justifyContent="end" alignItems="flex-end">
          <Button size="large" variant="contained">
            + Add
          </Button>
        </Stack>
      </Stack>
    </Box>
  )
}

export default AddTask
