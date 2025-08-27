import { api } from '@/shared/lib'

export interface IGetPostsResponse {
    data: IPostListItem[];
    currentPage: number;
    pageCount: number;
    perPage: number;
    totalCount: number;
}

export interface IPostListItem {
    id: number;
    title: string;
    code: string;
    authorName: string;
    previewPicture: {
        id: number,
        name: string,
        url: string
    };
    tagNames: string[];
    updatedAt: string;
    createdAt: string;
}

export const getPostsList = async (page = 1) => {
  const response = await api.get<IPostListItem[]>(
    '/manage/posts',
    { params: { page } },
  )

  return {
    data: response.data,
    currentPage: Number(response.headers['x-pagination-current-page']),
    pageCount: Number(response.headers['x-pagination-page-count']),
    perPage: Number(response.headers['x-pagination-per-page']),
    totalCount: Number(response.headers['x-pagination-total-count']),
  }
}
