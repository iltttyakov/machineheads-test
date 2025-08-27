import { RootState } from '@app/store.ts'
import { AuthorRow, getAuthorsListRequest } from '@entities/Author'
import { PageSpin } from '@shared/ui'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const AuthorsTable: React.FC = () => {
  const dispatch = useDispatch()
  const { authors, listIsLoading } = useSelector((state: RootState) => state.authors)

  useEffect(() => {
    dispatch(getAuthorsListRequest())
  }, [dispatch])

  if (listIsLoading) return <PageSpin />

  return (
    <div className="flex flex-col">
      {
        authors.map((author) => (
          <AuthorRow key={author.id} author={author} />
        ))
      }
    </div>
  )
}
