import { Space, Typography } from 'antd'
import React, { PropsWithChildren, ReactNode } from 'react'

const { Title } = Typography

type IPageLayoutProps = PropsWithChildren<ReactNode> & {
    title: string,
    action?: ReactNode,
}

export const PageLayout: React.FC<IPageLayoutProps> = (
  {
    children,
    title,
    action,
  },
) => {

  return (
    <Space
      direction="vertical"
      size="middle"
      className="w-full max-w-4xl mx-auto"
    >
      <div className="flex items-center">
        <Title level={3} className="m-0">{title}</Title>
        <div className="ml-auto">
          {action}
        </div>
      </div>
      {children}
    </Space>
  )
}
