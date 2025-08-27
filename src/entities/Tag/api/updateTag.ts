import { api } from '@/shared/lib/api'

export interface IUpdateTagPayload {
    id: number
    name: string
}

export const updateTag = async (payload: IUpdateTagPayload) => {
  const formData = new FormData()
  formData.append('name', payload.name)

  const response = await api.post(
    '/manage/tags/edit',
    formData,
    {
      headers: { 'Content-Type': 'multipart/form-data' },
      params: { id: payload.id },
    },
  )

  return response.data
}
