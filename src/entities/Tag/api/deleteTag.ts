import { api } from '@/shared/lib/api'

export const deleteTag = async (tagId: number) => {
  await api.delete(
    '/manage/tags/remove',
    { params: { id: tagId } },
  )
}
