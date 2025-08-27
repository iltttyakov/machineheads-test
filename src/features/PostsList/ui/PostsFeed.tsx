import { RootState } from '@app/store.ts'
import { getPostsListRequest, PostCard } from '@entities/Post'
import { PageSpin } from '@shared/ui'
import { List, Pagination } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const PostsFeed: React.FC = () => {
  const dispatch = useDispatch()
  const { posts, listLoading, currentPage, totalPages } = useSelector(
    (state: RootState) => state.posts,
  )

  useEffect(() => {
    dispatch(getPostsListRequest({ page: 1 }))
  }, [dispatch])

  const handlePageChange = (page: number) => {
    dispatch(getPostsListRequest({ page }))
  }

  if (listLoading) return <PageSpin />

  return (
    <div>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={posts}
        renderItem={(post) => (
          <PostCard key={post.id} post={post} />
        )}
      />
      <div className="flex justify-center mt-4">
        <Pagination
          current={currentPage}
          total={totalPages * 5}
          pageSize={5}
          onChange={handlePageChange}
        />
      </div>
    </div>
  )
}
