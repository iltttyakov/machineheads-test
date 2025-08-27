import { Form, Input } from 'antd'
import React from 'react'

export const TagFormFields: React.FC = () => {
  return (
    <Form.Item
      label="Название тега"
      name="name"
      rules={[{ required: true, message: 'Введите название тега' }]}
    >
      <Input placeholder="Название тега" />
    </Form.Item>
  )
}
