import { api } from '@shared/lib'

export interface IAuthorListItem {
    id: number
    name: string
    lastName: string
    secondName: string
    avatar: {
        id: number
        name: string
        url: string
    }
    updatedAt: string
    createdAt: string
}

export const getAuthorsList = async (): Promise<IAuthorListItem[]> => {
  const response = await api.get<IAuthorListItem[]>('/manage/authors')

  return response.data
}
