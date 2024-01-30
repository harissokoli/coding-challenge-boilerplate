import { format } from 'date-fns'
import { MouseEvent, useState } from 'react'

import {
  Box,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'

import DeleteTaskModal from '../../modals/DeleteTask'
import TaskHistoryModal from '../../modals/TaskHistory'
import StatusChip from '../../components/StatusChip'

import dateFormat from '../../constants/dateFormat'

import { TaskType } from '../../types/TaskType'

import EditIcon from '@mui/icons-material/Edit'
import EventIcon from '@mui/icons-material/Event'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import NoTask from '../../assets/NoTask.svg'

interface Props {
  tasks?: TaskType[]
}

const TasksList = ({ tasks = [] }: Props) => {
  const theme = useTheme()

  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false)
  const [showHistoryModal, setShowHistoryModal] = useState<boolean>(false)
  const [selectedTask, setSelectedTask] = useState<undefined | TaskType>(
    undefined,
  )

  const [anchorEl, setAnchorEl] = useState<{
    anchor: HTMLElement | null
    id: number
  } | null>(null)
  const handleClick = (
    event: MouseEvent<HTMLButtonElement>,
    taskId: number,
  ) => {
    setAnchorEl({ anchor: event.currentTarget, id: taskId })
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Typography variant="h5" mb={2}>
        Tasks
      </Typography>
      {tasks && tasks.length > 0 ? (
        tasks.map(task => (
          <Box
            key={task.id}
            mb={2}
            sx={{
              p: theme.spacing(3),
              borderRadius: theme.shape.borderRadius,
              background: theme.palette.background.paper,
            }}
          >
            <Stack>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                gap={1}
              >
                <Typography variant="h6">{task.title}</Typography>
                <Stack direction="row" alignItems="center">
                  <StatusChip status={task.status} />
                  <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={
                      anchorEl?.id === task.id ? 'long-menu' : undefined
                    }
                    aria-expanded={
                      anchorEl?.id === task.id ? 'true' : undefined
                    }
                    aria-haspopup="true"
                    onClick={e => handleClick(e, task.id)}
                  >
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl?.anchor}
                    open={anchorEl?.id === task.id}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    <MenuItem
                      onClick={() => {
                        setShowHistoryModal(true)
                        setSelectedTask(task)
                        handleClose()
                      }}
                    >
                      <ListItemIcon>
                        <EventIcon fontSize="small" />
                      </ListItemIcon>
                      Task History
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        handleClose()
                      }}
                    >
                      <ListItemIcon>
                        <EditIcon fontSize="small" />
                      </ListItemIcon>
                      Edit Task
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        setShowDeleteModal(true)
                        setSelectedTask(task)
                        handleClose()
                      }}
                    >
                      <ListItemIcon>
                        <DeleteForeverIcon fontSize="small" />
                      </ListItemIcon>
                      <Typography color={theme.palette.error.dark}>
                        Delete Task
                      </Typography>
                    </MenuItem>
                  </Menu>
                </Stack>
              </Stack>
              <Stack
                direction="row"
                gap={0.5}
                alignItems="center"
                color={theme.palette.grey['500']}
              >
                <AccessTimeIcon sx={{ height: 16, width: 16 }} />
                <Typography variant="body2">
                  Created: {format(task.dateCreated, dateFormat)}
                </Typography>
              </Stack>
              <Stack mt={1}>
                <Typography
                  color={theme.palette.grey['700']}
                  sx={{
                    display: '-webkit-box',
                    overflow: 'hidden',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 3,
                  }}
                >
                  {task.description}
                </Typography>
              </Stack>
            </Stack>
          </Box>
        ))
      ) : (
        <Box
          sx={{
            p: theme.spacing(4),
            borderRadius: theme.shape.borderRadius,
            background: theme.palette.background.paper,
          }}
        >
          <Stack justifyContent="center" alignItems="center">
            <img src={NoTask} alt="No Task Image" />
            <Typography textAlign="center">
              You have nothing to do. <br /> Go get some sleep!
            </Typography>
          </Stack>
        </Box>
      )}
      <DeleteTaskModal
        selectedTask={selectedTask}
        setSelectedTask={setSelectedTask}
        showDeleteModal={showDeleteModal}
        setShowDeleteModal={setShowDeleteModal}
      />
      <TaskHistoryModal
        selectedTask={selectedTask}
        setSelectedTask={setSelectedTask}
        showHistoryModal={showHistoryModal}
        setShowHistoryModal={setShowHistoryModal}
      />
    </>
  )
}

export default TasksList
