import { api } from '@/shared/lib/api'

export const deletePost = async (id: number): Promise<boolean> => {
  const response = await api.delete(
    '/manage/posts/remove',
    { params: { id } },
  )

  return response.data
}
