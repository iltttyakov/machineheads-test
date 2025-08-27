import { RootState } from '@app/store.ts'
import { getTagsListRequest, ITagListItem, setDeletingTag, setEditingTag, TagRow } from '@entities/Tag'
import { PageSpin } from '@shared/ui'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const TagsTable: React.FC = () => {
  const dispatch = useDispatch()
  const { tags, listLoading } = useSelector((state: RootState) => state.tags)

  useEffect(() => {
    dispatch(getTagsListRequest())
  }, [dispatch])

  const handleEdit = (tag: ITagListItem) => {
    dispatch(setEditingTag(tag))
  }

  const handleDelete = (tag: ITagListItem) => {
    dispatch(setDeletingTag(tag))
  }

  if (listLoading) return <PageSpin />

  return (
    <div>
      {
        tags.map((tag: ITagListItem) => (
          <TagRow
            key={tag.id}
            tag={tag}
            handleEdit={() => handleEdit(tag)}
            handleDelete={() => handleDelete(tag)}
          />
        ))
      }
    </div>
  )
}
