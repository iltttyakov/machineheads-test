import { TagCreateButton, TagCreateModal } from '@features/TagCreate'
import { TagDeleteModal } from '@features/TagDelete'
import { TagEditModal } from '@features/TagEdit'
import { TagsTable } from '@features/TagsList'
import { PageLayout } from '@shared/ui'
import React from 'react'

export const TagsPage: React.FC = () => {
  return (
    <PageLayout
      title="Теги"
      action={<TagCreateButton />}
    >
      <TagsTable />
      <TagDeleteModal />
      <TagEditModal />
      <TagCreateModal />
    </PageLayout>
  )
}

export default TagsPage
