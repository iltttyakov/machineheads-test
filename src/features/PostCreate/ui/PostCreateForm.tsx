import { RootState } from '@app/store.ts'
import { getAuthorsListRequest } from '@entities/Author'
import { PostFormFields } from '@entities/Post'
import { getTagsListRequest } from '@entities/Tag'
import { createPostRequest } from '@features/PostCreate'
import { Button, Form } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const PostCreateForm: React.FC = () => {
  const [form] = Form.useForm()
  const dispatch = useDispatch()

  const { authors, listIsLoading: authorsLoading } = useSelector((state: RootState) => state.authors)
  const { tags, listLoading: tagsLoading } = useSelector((state: RootState) => state.tags)
  const { createLoading, fieldErrors } = useSelector((state: RootState) => state.postCreate)

  useEffect(() => {
    dispatch(getTagsListRequest())
    dispatch(getAuthorsListRequest())
  }, [])

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
      title: values.title,
      authorId: values.authorId,
      tagIds: values.tagIds,
      text: values.text,
      previewPicture: values.previewPicture?.file,
    }

    dispatch(createPostRequest(payload))
  }

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{ tagIds: [] }}
      onFinish={handleFinish}
    >
      <PostFormFields
        authors={authors}
        authorsLoading={authorsLoading}
        tags={tags}
        tagsLoading={tagsLoading}
      />
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={createLoading}>
          Создать пост
        </Button>
      </Form.Item>
    </Form>
  )
}
