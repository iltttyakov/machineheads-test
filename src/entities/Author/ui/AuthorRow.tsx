import { EditOutlined } from '@ant-design/icons'
import { IAuthorListItem } from '@entities/Author'
import { Routes } from '@shared/lib'
import { Avatar, Button, Space, Tooltip, Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const { Text } = Typography

interface AuthorRowProps {
    author: IAuthorListItem
}

export const AuthorRow: React.FC<AuthorRowProps> = ({ author }) => {
  return (
    <div className="flex justify-between items-center p-4 border-b border-gray-200">

      <Space>
        <div className="bg-gray-100 rounded-full">
          <Avatar
            src={author.avatar?.url}
            size={40}
          >
            {
              (!author.avatar?.url && author.name)
                ? author.name[0]
                : null
            }
          </Avatar>
        </div>
        <div className="flex flex-col">
          <Text strong>
            {author.name}
            {' '}
            {author.lastName}
          </Text>
          <Text type="secondary">
            id:
            {' '}
            {author.id}
          </Text>
        </div>
      </Space>

      <Tooltip title="Редактировать автора">
        <Link to={`${Routes.AuthorEdit}${author.id}`}>
          <Button
            type="text"
            icon={<EditOutlined />}
          />
        </Link>
      </Tooltip>
    </div>
  )
}
