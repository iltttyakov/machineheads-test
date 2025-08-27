import { api } from '@/shared/lib/api'

export interface IUpdateAuthorPayload {
    id: number
    name: string
    lastName: string
    secondName: string
    shortDescription: string
    description: string
    avatar?: File
    removeAvatar?: boolean
}

export const updateAuthor = async (payload: IUpdateAuthorPayload): Promise<boolean> => {
  const formData = new FormData()
  formData.append('name', payload.name)
  formData.append('lastName', payload.lastName)
  formData.append('secondName', payload.secondName)
  formData.append('shortDescription', payload.shortDescription)
  formData.append('description', payload.description)

  if (payload.avatar) {
    formData.append('avatar', payload.avatar)
  }

  if (payload.removeAvatar !== undefined) {
    formData.append('removeAvatar', String(payload.removeAvatar))
  }

  const response = await api.post(
    '/manage/authors/edit',
    formData,
    {
      headers: { 'Content-Type': 'multipart/form-data' },
      params: { id: payload.id },
    },
  )

  return response.data
}
