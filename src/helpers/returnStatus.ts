import { StatusEnum } from '../constants/status'

const returnStatus = (status: StatusEnum) => {
  switch (status) {
    case StatusEnum.TO_DO:
      return [StatusEnum.IN_PROGRESS]
    case StatusEnum.IN_PROGRESS:
      return [StatusEnum.BLOCKED, StatusEnum.IN_QA]
    case StatusEnum.BLOCKED:
      return [StatusEnum.TO_DO]
    case StatusEnum.IN_QA:
      return [StatusEnum.TO_DO, StatusEnum.DONE]
    case StatusEnum.DONE:
      return [StatusEnum.DEPLOYED]
  }
}

export default returnStatus
