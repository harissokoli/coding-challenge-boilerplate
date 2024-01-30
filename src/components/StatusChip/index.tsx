import { Chip } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import { StatusEnum, Statuses } from '../../constants/status'

interface Props {
  status: StatusEnum
}

const StatusChip = ({ status }: Props) => {
  const theme = useTheme()

  const returnStatusColor = (status: number) => {
    switch (status) {
      case StatusEnum.TO_DO:
        return theme.palette.success.light
      case StatusEnum.IN_PROGRESS:
        return theme.palette.info.main
      case StatusEnum.BLOCKED:
        return theme.palette.error.dark
      case StatusEnum.IN_QA:
        return theme.palette.warning.light
      case StatusEnum.DONE:
        return theme.palette.success.dark
      case StatusEnum.DEPLOYED:
        return theme.palette.secondary.light
    }
  }

  return (
    <Chip
      label={Statuses[status]}
      sx={{
        color: theme.palette.background.paper,
        backgroundColor: returnStatusColor(status),
      }}
    />
  )
}

export default StatusChip
