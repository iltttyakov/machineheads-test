import { IPostListItem } from '@entities/Post'
import { Routes } from '@shared/lib'
import { Button, List, Space, Tag, Typography } from 'antd'
import dayjs from 'dayjs'
import React from 'react'
import { Link } from 'react-router-dom'

const { Title, Text } = Typography

interface IPostCardProps {
    post: IPostListItem
}

export const PostCard: React.FC<IPostCardProps> = ({ post }) => {
  return (
    <List.Item
      key={post.id}
    >
      <div className="w-full flex flex-col md:flex-row gap-4 md:gap-0">

        <div className="flex-1 flex flex-col justify-between mb-4 md:mb-0 md:mr-6">
          <div>
            <Title level={3} className="mb-2">{post.title}</Title>

            <div>
              <Space wrap className="mb-3" size={1}>
                {
                  post.tagNames.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))
                }
              </Space>
            </div>

            <div>
              <Space direction="vertical" size={1}>
                <Text type="secondary">
                  Создано:
                  {' '}
                  {dayjs(post.createdAt).format('DD.MM.YYYY HH:mm')}
                </Text>
                <Text type="secondary">
                  Обновлено:
                  {' '}
                  {dayjs(post.updatedAt).format('DD.MM.YYYY HH:mm')}
                </Text>
                {
                  post.authorName && (
                    <Text type="secondary" className="mb-2">
                      Автор:
                      {' '}
                      {post.authorName}
                    </Text>
                  )
                }
              </Space>
            </div>
          </div>

          <div className="mt-4">
            <Link to={`${Routes.PostEdit}${post.id}`}>
              <Button>
                Редактировать
              </Button>
            </Link>
          </div>
        </div>

        {
          post.previewPicture?.url && (
            <div className="flex-shrink-0 w-full md:w-64 h-48 md:h-40 overflow-hidden rounded-lg bg-gray-100">
              <img
                src={post.previewPicture.url}
                alt={post.previewPicture.name}
                className="w-full h-full object-cover"
              />
            </div>
          )
        }

      </div>
    </List.Item>
  )
}
