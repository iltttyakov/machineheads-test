import { Spin } from 'antd'
import React from 'react'

export const PageSpin: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-64">
      <Spin size="large" />
    </div>
  )
}
