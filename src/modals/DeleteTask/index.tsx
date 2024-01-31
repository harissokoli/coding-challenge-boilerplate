import { Box, Button, Modal, Stack, Typography } from '@mui/material'

import { modalStyle } from '../../styles/modal'
import { TaskType } from '../../types/TaskType'

import Trash from '../../assets/Trash.svg'

interface Props {
  selectedTask?: TaskType
  showDeleteModal: boolean

  removeTask(id: number): void

  setSelectedTask(task?: TaskType): void

  setShowDeleteModal(showDeleteModal: boolean): void
}

const DeleteTaskModal = ({
  removeTask,
  selectedTask,
  setSelectedTask,
  showDeleteModal,
  setShowDeleteModal,
}: Props) => {
  return (
    <Modal
      open={showDeleteModal}
      onClose={() => {
        setShowDeleteModal(false)
        setSelectedTask(undefined)
      }}
    >
      <Box sx={modalStyle}>
        <Stack gap={4} justifyContent="center" alignItems="center" mb={2}>
          <img src={Trash} alt="Trash" style={{ maxHeight: 56 }} />
          <Typography variant="h5" component="h5" fontWeight="bold">
            Delete Task?
          </Typography>
          <Typography>
            You have made changes, are you sure about deleting “
            {selectedTask?.title}”?
          </Typography>
        </Stack>
        <Stack direction="row" gap={2} mt={4}>
          <Button
            fullWidth
            size="large"
            color="primary"
            variant="outlined"
            onClick={() => {
              setShowDeleteModal(false)
              setSelectedTask(undefined)
            }}
          >
            Cancel
          </Button>
          <Button
            fullWidth
            size="large"
            color="error"
            variant="contained"
            onClick={() => {
              if (selectedTask) {
                removeTask(selectedTask.id)
                setShowDeleteModal(false)
                setSelectedTask(undefined)
              }
            }}
          >
            Delete
          </Button>
        </Stack>
      </Box>
    </Modal>
  )
}

export default DeleteTaskModal
