import { RootState } from '@app/store.ts'
import { loginRequest } from '@features/Auth'
import { Button, Form, Input } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

interface IAuthFormValues {
    email: string,
    password: string
}

export const AuthForm: React.FC = () => {
  const dispatch = useDispatch()
  const { loggingLoading } = useSelector((state: RootState) => state.auth)

  const onFinish = async (values: IAuthFormValues) => {
    dispatch(loginRequest(values.email, values.password))
  }

  return (
    <Form
      name="login_form"
      layout="vertical"
      onFinish={onFinish}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: 'Введите email' },
          { type: 'email', message: 'Введите корректный email' },
        ]}
      >
        <Input
          className="rounded-md"
          placeholder="Email"
        />
      </Form.Item>

      <Form.Item
        label="Пароль"
        name="password"
        rules={[{ required: true, message: 'Введите пароль' }]}
      >
        <Input.Password
          className="rounded-md"
          placeholder="Пароль"
        />
      </Form.Item>

      <Form.Item>
        <Button
          block
          type="primary"
          htmlType="submit"
          loading={loggingLoading}
        >
          Войти
        </Button>
      </Form.Item>

    </Form>
  )
}
