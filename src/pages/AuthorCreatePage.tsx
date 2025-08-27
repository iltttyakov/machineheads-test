import { AuthorCreateForm, getAuthorCreateModule } from '@features/AuthorsCreate'
import { PageLayout } from '@shared/ui'
import React from 'react'
import { DynamicModuleLoader } from 'redux-dynamic-modules-react'

export const AuthorCreatePage: React.FC = () => {
  return (
    <DynamicModuleLoader modules={[getAuthorCreateModule()]}>
      <PageLayout
        title="Новый автор"
      >
        <AuthorCreateForm />
      </PageLayout>
    </DynamicModuleLoader>
  )
}

export default AuthorCreatePage
