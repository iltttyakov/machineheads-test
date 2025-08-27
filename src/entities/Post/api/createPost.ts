import { api } from '@/shared/lib/api'

export interface ICreatePostPayload {
    title: string
    authorId: number
    tagIds: number[]
    text: string
    previewPicture: File
}

export const createPost = async (payload: ICreatePostPayload) => {
  const formData = new FormData()

  formData.append('title', payload.title)
  formData.append('authorId', String(payload.authorId))
  formData.append('text', payload.text)
  payload.tagIds.forEach((id) => formData.append('tagIds[]', String(id)))
  formData.append('previewPicture', payload.previewPicture)

  const response = await api.post(
    '/manage/posts/add',
    formData,
    { headers: { 'Content-Type': 'multipart/form-data' } },
  )

  return response.data
}
