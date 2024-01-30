import { format } from 'date-fns'

import { Box, Modal, Stack, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import dateFormat from '../../constants/dateFormat'

import { modalStyle } from '../../styles/modal'
import { TaskType } from '../../types/TaskType'

import AccessTimeIcon from '@mui/icons-material/AccessTime'

interface Props {
  selectedTask?: TaskType
  showHistoryModal: boolean

  setSelectedTask(task?: TaskType): void

  setShowHistoryModal(showHistoryModal: boolean): void
}

const TaskHistoryModal = ({
  selectedTask,
  showHistoryModal,
  setShowHistoryModal,
}: Props) => {
  const theme = useTheme()

  return (
    <Modal open={showHistoryModal} onClose={() => setShowHistoryModal(false)}>
      <Box sx={modalStyle}>
        <Typography variant="h5" component="h5" fontWeight="bold" mb={4}>
          Task History
        </Typography>
        {selectedTask &&
        selectedTask.history &&
        selectedTask.history.length > 0 ? (
          selectedTask.history.map(h => (
            <Stack
              mb={2}
              pb={2}
              key={h.id}
              justifyContent="center"
              sx={{ borderBottom: `1px solid ${theme.palette.grey['400']}` }}
            >
              <Typography variant="body1" fontWeight="bold">
                The task was marked as “{h.status}”
              </Typography>

              <Stack
                gap={0.5}
                direction="row"
                alignItems="center"
                justifyContent="start"
              >
                <AccessTimeIcon sx={{ height: 16, width: 16 }} />
                <Typography variant="body2">
                  {format(h.date, dateFormat)}
                </Typography>
              </Stack>
            </Stack>
          ))
        ) : (
          <span>No History</span>
        )}
      </Box>
    </Modal>
  )
}

export default TaskHistoryModal
