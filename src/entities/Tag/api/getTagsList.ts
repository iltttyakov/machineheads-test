import { api } from '@shared/lib/api.ts'

export interface ITagListItem {
    id?: number,
    name: string,
    code?: string,
    sort?: number,
    updatedAt?: string,
    createdAt?: string
}

export const getTagsList = async () => {
  const response = await api.get<ITagListItem[]>('/manage/tags')

  return response.data
}
