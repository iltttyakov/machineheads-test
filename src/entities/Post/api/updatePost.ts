import { api } from '@/shared/lib/api'

export interface IUpdatePostPayload {
    id: string
    title: string
    authorId: number
    tagIds: number[]
    text: string
    previewPicture?: File
}

export const updatePost = async (payload: IUpdatePostPayload): Promise<boolean> => {
  const formData = new FormData()

  formData.append('title', payload.title)
  formData.append('authorId', String(payload.authorId))
  formData.append('text', payload.text)

  if (payload.tagIds?.length > 0) {
    payload.tagIds.forEach((tagId) => {
      formData.append('tagIds[]', String(tagId))
    })
  } else {
    formData.append('tagIds', '')
  }

  if (payload.previewPicture) {
    formData.append('previewPicture', payload.previewPicture)
  }

  const response = await api.post('/manage/posts/edit', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
    params: { id: payload.id },
  })

  return response.data
}
