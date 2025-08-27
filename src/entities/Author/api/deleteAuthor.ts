import { api } from '@/shared/lib/api'

export const deleteAuthor = async (id: number): Promise<boolean> => {
  const response = await api.delete(
    '/manage/authors/remove',
    { params: { id } },
  )

  return response.data
}
