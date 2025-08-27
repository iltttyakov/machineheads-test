import { api } from '@/shared/lib/api'

export interface ICreateTagPayload {
    name: string
}

export const createTag = async (payload: ICreateTagPayload) => {
  const formData = new FormData()
  formData.append('name', payload.name)

  const response = await api.post(
    '/manage/tags/add',
    formData,
    { headers: { 'Content-Type': 'multipart/form-data' } },
  )

  return response.data
}
