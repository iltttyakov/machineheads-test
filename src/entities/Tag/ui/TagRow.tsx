import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { ITagListItem } from '@entities/Tag'
import { Button, Space, Tooltip, Typography } from 'antd'
import React from 'react'

const { Text } = Typography

interface ITagRowProps {
    tag: ITagListItem
    handleEdit: () => void
    handleDelete: () => void
}

export const TagRow: React.FC<ITagRowProps> = ({ tag, handleEdit, handleDelete }) => (
  <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200">
    <Text strong>{tag.name}</Text>
    <Space>
      <Tooltip title="Редактировать тег">
        <Button
          type="text"
          icon={<EditOutlined />}
          onClick={handleEdit}
        />
      </Tooltip>
      <Tooltip title="Удалить тег">
        <Button
          danger
          type="text"
          icon={<DeleteOutlined />}
          onClick={handleDelete}
        />
      </Tooltip>
    </Space>
  </div>
)
