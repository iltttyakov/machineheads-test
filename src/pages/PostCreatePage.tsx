import { getPostCreateModule, PostCreateForm } from '@features/PostCreate'
import { PageLayout } from '@shared/ui'
import React from 'react'
import { DynamicModuleLoader } from 'redux-dynamic-modules-react'

export const PostCreatePage: React.FC = () => {
  return (
    <DynamicModuleLoader modules={[getPostCreateModule()]}>
      <PageLayout
        title="Новый пост"
      >
        <PostCreateForm />
      </PageLayout>
    </DynamicModuleLoader>
  )
}

export default PostCreatePage
