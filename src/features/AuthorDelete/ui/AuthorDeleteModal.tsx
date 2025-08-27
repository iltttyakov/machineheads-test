import { deleteAuthorRequest, setDeleteAuthorModalOpen } from '@features/AuthorDelete'
import { Modal } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '@app/store.ts'

interface AuthorDeleteModalProps {
    authorId: number
}

export const AuthorDeleteModal: React.FC<AuthorDeleteModalProps> = ({ authorId }) => {
  const dispatch = useDispatch()
  const { deleteModalOpen, deleteLoading } = useSelector((state: RootState) => state.authorDelete)

  const handleCancel = () => dispatch(setDeleteAuthorModalOpen(false))
  const handleOk = () => dispatch(deleteAuthorRequest(authorId))

  return (
    <Modal
      title="Удалить автора"
      open={deleteModalOpen}
      okButtonProps={{ danger: true, loading: deleteLoading }}
      okText="Удалить"
      cancelText="Отмена"
      onCancel={handleCancel}
      onOk={handleOk}
    >
      Вы уверены, что хотите удалить автора?
    </Modal>
  )
}
