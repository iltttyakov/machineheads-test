import { AuthorFormFields } from '@entities/Author'
import { PageSpin } from '@shared/ui'
import { Button, Form } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '@app/store.ts'

import { getAuthorDetailRequest, updateAuthorRequest } from '../model/actions'

interface AuthorEditFormProps {
    id: number
}

export const AuthorEditForm: React.FC<AuthorEditFormProps> = ({ id }) => {
  const dispatch = useDispatch()
  const [form] = Form.useForm()

  const {
    author,
    detailLoading,
    updateLoading,
    updateFieldErrors,
  } = useSelector((state: RootState) => state.authorEdit)

  useEffect(() => {
    dispatch(getAuthorDetailRequest(id))
  }, [id, dispatch])

  useEffect(() => {
    if (updateFieldErrors.length > 0) {
      form.setFields(
        updateFieldErrors.map(err => ({
          name: err.field,
          errors: [err.message],
        })),
      )
    }
  }, [updateFieldErrors])

  useEffect(() => {
    if (author) {
      form.setFieldsValue({
        name: author.name,
        lastName: author.lastName,
        secondName: author.secondName ?? '',
        shortDescription: author.shortDescription ?? '',
        description: author.description ?? '',
        removeAvatar: false,
      })
    }
  }, [author, form])

  const onFinish = (values: any) => {
    dispatch(
      updateAuthorRequest({
        id,
        ...values,
        avatar: values.avatar?.file,
        removeAvatar: values.removeAvatar ? '1' : '0',
      }),
    )
  }

  if (detailLoading || !author) return <PageSpin />

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{ removeAvatar: false }}
      onFinish={onFinish}
    >

      <AuthorFormFields mode="update" avatarUrl={author.avatar?.url} />

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          loading={updateLoading}
        >
          Сохранить
        </Button>
      </Form.Item>
    </Form>
  )
}
