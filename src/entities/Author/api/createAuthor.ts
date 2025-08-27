import { api } from '@/shared/lib/api'

export interface ICreateAuthorPayload {
    name: string
    lastName: string
    secondName: string
    shortDescription: string
    description: string
    avatar?: File
}

export const createAuthor = async (payload: ICreateAuthorPayload) => {
  const formData = new FormData()

  formData.append('name', payload.name)
  formData.append('lastName', payload.lastName)
  formData.append('secondName', payload.secondName)
  formData.append('shortDescription', payload.shortDescription)
  formData.append('description', payload.description)
  formData.append('removeAvatar', '0')

  if (payload.avatar) {
    formData.append('avatar', payload.avatar)
  }

  const response = await api.post(
    '/manage/authors/add',
    formData,
    { headers: { 'Content-Type': 'multipart/form-data' }, },
  )

  return response.data
}
