import { User } from "./User"

export interface UserPaged {
    items: User[]
    totalCount: number
    pageNumber: number
    pageSize: number
    totalPages: number
  }