import { deleteTagRequest, setDeletingTag } from '@entities/Tag'
import { Modal } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '@app/store.ts'

export const TagDeleteModal: React.FC = () => {
  const dispatch = useDispatch()
  const { deletingTag, deleteLoading } = useSelector((state: RootState) => state.tags)

  const handleConfirm = () => {
    if (!deletingTag) return
    dispatch(deleteTagRequest(deletingTag.id))
  }

  const handleCancel = () => {
    dispatch(setDeletingTag(null))
  }

  return (
    <Modal
      title="Подтвердите удаление"
      open={!!deletingTag}
      okText="Удалить"
      cancelText="Отмена"
      okButtonProps={{ danger: true }}
      confirmLoading={deleteLoading}
      onOk={handleConfirm}
      onCancel={handleCancel}
    >
      {
        deletingTag && (
          <p>
            Вы действительно хотите удалить тег
            {' '}
            <b>{deletingTag.name}</b>
            ?
          </p>
        )
      }
    </Modal>
  )
}
