import { RootState } from '@app/store.ts'
import { createTagRequest, setCreateTagModalOpen, TagFormFields } from '@entities/Tag'
import { Form, Modal } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const TagCreateModal: React.FC = () => {
  const dispatch = useDispatch()
  const [form] = Form.useForm()

  const { createLoading, createModalOpen, createFieldErrors } = useSelector((state: RootState) => state.tags)

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        dispatch(createTagRequest({ name: values.name }))
      })
      .catch(() => {})
  }

  const handleCancel = () => {
    dispatch(setCreateTagModalOpen(false))
    form.resetFields()
  }

  useEffect(() => {
    if (!createModalOpen) form.resetFields()
  }, [createModalOpen])

  useEffect(() => {
    if (createFieldErrors.length > 0) {
      form.setFields(
        createFieldErrors.map(err => ({
          name: err.field,
          errors: [err.message],
        })),
      )
    }
  }, [createFieldErrors])

  return (
    <Modal
      title="Добавить тег"
      open={createModalOpen}
      okText="Создать"
      cancelText="Отмена"
      confirmLoading={createLoading}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form form={form} layout="vertical" name="create_tag_form">
        <TagFormFields />
      </Form>
    </Modal>
  )
}
