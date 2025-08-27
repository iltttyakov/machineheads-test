import { PlusCircleOutlined } from '@ant-design/icons'
import { setCreateTagModalOpen } from '@entities/Tag'
import { Button } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'

export const TagCreateButton: React.FC = () => {
  const dispatch = useDispatch()

  const handleAddTag = () => {
    dispatch(setCreateTagModalOpen(true))
  }

  return (
    <Button
      type="primary"
      className="flex items-center"
      icon={<PlusCircleOutlined />}
      style={{ display: 'flex' }}
      onClick={handleAddTag}
    >
      Добавить тег
    </Button>
  )
}
