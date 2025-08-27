import { api } from '@/shared/lib/api'

export interface IPostDetailTag {
    id: string
    name: string
    code: string
    updatedAt: string
    createdAt: string
}

export interface IPostDetailAuthor {
    id: string
    fullName: string
    avatar: {
        id: number
        name: string
        url: string
    }
}

export interface IPostDetailPreviewPicture {
    id: string
    name: string
    url: string
}

export interface IPostDetail {
    id: string
    title: string
    code: string
    text: string
    previewPicture: IPostDetailPreviewPicture
    author: IPostDetailAuthor
    tags: IPostDetailTag[]
}

export const getPostDetail = async (id: number): Promise<IPostDetail> => {
  const response = await api.get(
    '/manage/posts/detail',
    { params: { id } },
  )

  return response.data
}
