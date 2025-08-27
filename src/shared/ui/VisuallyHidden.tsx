import React, { PropsWithChildren, ReactNode } from 'react'

export const VisuallyHidden: React.FC<PropsWithChildren<ReactNode>> = ({ children }) => {
  return (
    <span className="sr-only">
      {children}
    </span>
  )
}
