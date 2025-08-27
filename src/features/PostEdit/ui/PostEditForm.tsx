import { RootState } from '@app/store.ts'
import { getAuthorsListRequest } from '@entities/Author'
import { IPostDetailTag, IUpdatePostPayload, PostFormFields } from '@entities/Post'
import { getTagsListRequest } from '@entities/Tag'
import { getPostDetailRequest, updatePostRequest } from '@features/PostEdit'
import { PageSpin } from '@shared/ui'
import { Button, Form } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

interface IPostEditFormProps {
    postId: string
}

interface IPostEditFormValues {
    title: string
    authorId: string
    tagIds: string[]
    text: string
}

export const PostEditForm: React.FC<IPostEditFormProps> = ({ postId }) => {
  const dispatch = useDispatch()
  const { post, detailLoading, updateLoading, updateFieldErrors } = useSelector((state: RootState) => state.postEdit)
  const [form] = Form.useForm<IPostEditFormValues>()

  const { authors, listIsLoading: authorsLoading } = useSelector((state: RootState) => state.authors)
  const { tags, listLoading: tagsLoading } = useSelector((state: RootState) => state.tags)

  useEffect(() => {
    dispatch(getTagsListRequest())
    dispatch(getAuthorsListRequest())
  }, [])

  useEffect(() => {
    dispatch(getPostDetailRequest(postId))
  }, [dispatch, postId])

  const handleFinish = (values: any) => {
    const payload: IUpdatePostPayload = {
      id: postId,
      title: values.title,
      authorId: values.authorId,
      tagIds: values.tagIds,
      text: values.text,
    }

    if (values.previewPicture?.file) {
      payload.previewPicture = values.previewPicture?.file
    }

    dispatch(updatePostRequest(payload))
  }

  useEffect(() => {
    if (updateFieldErrors?.length > 0) {
      form.setFields(
        updateFieldErrors.map(err => ({
          name: err.field,
          errors: [err.message],
        })),
      )
    }
  }, [updateFieldErrors])

  useEffect(() => {
    if (!post) return

    form.setFieldsValue({
      title: post.title,
      authorId: post.author?.id,
      tagIds: post.tags.map((tag: IPostDetailTag) => tag?.id),
      text: post.text,
    })
  }, [post, form])

  if (detailLoading || !post) return <PageSpin />

  return (
    <Form form={form} layout="vertical" onFinish={handleFinish}>

      <PostFormFields
        authors={authors}
        tags={tags}
        authorsLoading={authorsLoading}
        tagsLoading={tagsLoading}
        mode="update"
        previewPictureUrl={post.previewPicture.url}
        previewPictureAlt={post.previewPicture.name}
      />

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
