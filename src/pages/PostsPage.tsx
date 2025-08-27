import { PlusCircleOutlined } from '@ant-design/icons'
import { getPostsModule } from '@entities/Post'
import { PostsFeed } from '@features/PostsList'
import { Routes } from '@shared/lib'
import { PageLayout } from '@shared/ui'
import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { DynamicModuleLoader } from 'redux-dynamic-modules-react'

export const PostsPage: React.FC = () => {
  return (
    <DynamicModuleLoader modules={[getPostsModule()]}>

      <PageLayout
        title="Посты"
        action={(
          <Link to={Routes.PostCreate}>
            <Button
              type="primary"
              className="flex items-center"
              icon={<PlusCircleOutlined />}
              style={{ display: 'flex' }}
            >
              Добавить пост
            </Button>
          </Link>
        )}
      >
        <PostsFeed />
      </PageLayout>
    </DynamicModuleLoader>
  )
}

export default PostsPage
