import { AuthorDeleteButton, AuthorDeleteModal, getAuthorDeleteModule } from '@features/AuthorDelete'
import { AuthorEditForm, getAuthorEditModule } from '@features/AuthorEdit'
import { PageLayout } from '@shared/ui'
import React from 'react'
import { useParams } from 'react-router-dom'
import { DynamicModuleLoader } from 'redux-dynamic-modules-react'

export const AuthorEditPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  return (
    <DynamicModuleLoader modules={[getAuthorDeleteModule(), getAuthorEditModule()]}>
      <PageLayout
        title="Редактирование автора"
        action={<AuthorDeleteButton />}
      >
        <AuthorEditForm id={Number(id)} />
        <AuthorDeleteModal authorId={Number(id)} />
      </PageLayout>
    </DynamicModuleLoader>
  )
}

export default AuthorEditPage
