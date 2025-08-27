import { RootState } from '@app/store.ts'
import { AuthorFormFields } from '@entities/Author'
import { createAuthorRequest } from '@features/AuthorsCreate'
import { Button, Form } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const AuthorCreateForm: React.FC = () => {
  const dispatch = useDispatch()
  const { createLoading, fieldErrors } = useSelector((state: RootState) => state.authorCreate)
  const [form] = Form.useForm()

  useEffect(() => {
    if (fieldErrors.length > 0) {
      form.setFields(
        fieldErrors.map(err => ({
          name: err.field,
          errors: [err.message],
        })),
      )
    }
  }, [fieldErrors])

  const handleFinish = (values: any) => {
    const payload = {
      name: values.name,
      lastName: values.lastName,
      secondName: values.secondName ?? '',
      shortDescription: values.shortDescription ?? '',
      description: values.description ?? '',
      avatar: values.avatar?.file,
      removeAvatar: false,
    }

    dispatch(createAuthorRequest(payload))
  }

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleFinish}
    >

      <AuthorFormFields />

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={createLoading}>
          Создать автора
        </Button>
      </Form.Item>

    </Form>
  )
}
