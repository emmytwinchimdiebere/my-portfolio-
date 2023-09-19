import React from 'react'

type sectionProps = {
  children :React.ReactNode,
  className: string
}
export default function SectionPage({children, className, ...props} : sectionProps) {
  return (
  <h1 className={className}  {...props} >{children}</h1>
  
  )

}

