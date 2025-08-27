import { RootState } from '@app/store.ts'
import { setEditingTag, TagFormFields, updateTagRequest } from '@entities/Tag'
import { Form, Modal } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const TagEditModal: React.FC = () => {
  const dispatch = useDispatch()
  const { editingTag, updateLoading, updateFieldErrors } = useSelector((state: RootState) => state.tags)
  const [form] = Form.useForm()

  useEffect(() => {
    if (editingTag) {
      form.setFieldsValue({ name: editingTag.name })
    } else {
      form.resetFields()
    }
  }, [editingTag, form])

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

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        if (editingTag) {
          dispatch(updateTagRequest({
            id: editingTag.id,
            name: values.name,
          }))
        }
      })
      .catch(() => {})
  }

  const handleCancel = () => {
    dispatch(setEditingTag(null))
  }

  return (
    <Modal
      title="Редактировать тег"
      open={!!editingTag}
      okText="Сохранить"
      cancelText="Отмена"
      confirmLoading={updateLoading}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form form={form} layout="vertical">
        <TagFormFields />
      </Form>
    </Modal>
  )
}
