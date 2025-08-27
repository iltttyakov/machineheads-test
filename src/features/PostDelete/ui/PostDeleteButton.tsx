import { DeleteOutlined } from '@ant-design/icons'
import { setDeletePostModalOpen } from '@features/PostDelete'
import { Button } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'

export const PostDeleteButton: React.FC = () => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(setDeletePostModalOpen(true))
  }

  return (
    <Button
      danger
      icon={<DeleteOutlined />}
      style={{ display: 'flex', alignItems: 'center' }}
      onClick={handleClick}
    >
      Удалить пост
    </Button>
  )
}
