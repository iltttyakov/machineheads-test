import { RootState } from '@app/store.ts'
import { deletePostRequest, setDeletePostModalOpen } from '@features/PostDelete'
import { Modal } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

interface IPostDeleteModalProps {
    postId: string
}

export const PostDeleteModal: React.FC<IPostDeleteModalProps> = ({ postId }) => {
  const dispatch = useDispatch()
  const { modalOpen, deleting } = useSelector(
    (state: RootState) => state.postDelete,
  )

  const handleCancel = () => {
    dispatch(setDeletePostModalOpen(false))
  }

  const handleOk = () => {
    dispatch(deletePostRequest(postId))
  }

  return (
    <Modal
      title="Удалить пост"
      open={modalOpen}
      confirmLoading={deleting}
      okText="Удалить"
      cancelText="Отмена"
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p>Вы уверены, что хотите удалить этот пост?</p>
    </Modal>
  )
}
