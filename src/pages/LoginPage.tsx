import { AuthForm } from '@features/Auth'
import { Card, Typography } from 'antd'
import React from 'react'

const { Title } = Typography

export const LoginPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md p-6 shadow-lg rounded-xl">
        <Title level={2} className="text-center">Вход в систему</Title>
        <AuthForm />
      </Card>
    </div>
  )
}

export default LoginPage
