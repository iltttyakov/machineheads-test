import { DeleteOutlined } from '@ant-design/icons'
import { setDeleteAuthorModalOpen } from '@features/AuthorDelete'
import { Button } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'

export const AuthorDeleteButton: React.FC = () => {
  const dispatch = useDispatch()
  const handleClick = () => dispatch(setDeleteAuthorModalOpen(true))

  return (
    <Button
      danger
      icon={<DeleteOutlined />}
      style={{ display: 'flex', alignItems: 'center' }}
      onClick={handleClick}
    >
      Удалить автора
    </Button>
  )
}
