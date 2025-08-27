import { api } from '@/shared/lib/api'

export interface IAuthorDetail {
    id: number
    name: string
    lastName: string
    secondName: string
    shortDescription: string
    description: string
    avatar?: {
        id: number
        name: string
        url: string
    }
    updatedAt: string
    createdAt: string
}

export const getAuthorDetail = async (id: number): Promise<IAuthorDetail> => {
  const response = await api.get<IAuthorDetail>(
    '/manage/authors/detail',
    { params: { id } },
  )

  return response.data
}
