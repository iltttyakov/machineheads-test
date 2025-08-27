import { getPostDeleteModule, PostDeleteButton, PostDeleteModal } from '@features/PostDelete'
import { getPostEditModule, PostEditForm } from '@features/PostEdit'
import { PageLayout } from '@shared/ui'
import React from 'react'
import { useParams } from 'react-router-dom'
import { DynamicModuleLoader } from 'redux-dynamic-modules-react'

export const PostEditPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  return (
    <DynamicModuleLoader modules={[getPostDeleteModule(), getPostEditModule()]}>
      <PageLayout
        title="Редактирование поста"
        action={<PostDeleteButton />}
      >
        <PostDeleteModal postId={id} />
        <PostEditForm postId={id} />
      </PageLayout>
    </DynamicModuleLoader>
  )
}

export default PostEditPage
