import { PlusCircleOutlined } from '@ant-design/icons'
import { AuthorsTable } from '@features/AuthorsList'
import { Routes } from '@shared/lib'
import { PageLayout } from '@shared/ui'
import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

export const AuthorsPage: React.FC = () => {
  return (
    <PageLayout
      title="Авторы"
      action={(
        <Link to={Routes.AuthorCreate}>
          <Button
            type="primary"
            icon={<PlusCircleOutlined />}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            Добавить автора
          </Button>
        </Link>
      )}
    >
      <AuthorsTable />
    </PageLayout>
  )
}

export default AuthorsPage
