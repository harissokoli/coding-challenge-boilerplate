import {
  Box,
  Chip,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import NoTask from '../../assets/NoTask.svg'

import { TaskType } from 'types/TaskType'
import { MouseEvent, useState } from 'react'
import { format } from 'date-fns'

interface Props {
  tasks?: TaskType[]
}

const TasksList = ({ tasks = [] }: Props) => {
  const theme = useTheme()

  console.log('tasks:', tasks)

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
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
                  <Chip
                    label="In Progress"
                    sx={{
                      color: theme.palette.background.paper,
                      backgroundColor: theme.palette.secondary.light,
                    }}
                  />
                  <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? 'long-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
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
                  Created: {format(task.dateCreated, 'MMM dd, yyyy - h:mm aaa')}
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
            <img src={NoTask} alt={'No Task Image'} />
            <Typography textAlign="center">
              You have nothing to do. <br /> Go get some sleep!
            </Typography>
          </Stack>
        </Box>
      )}
    </>
  )
}

export default TasksList
