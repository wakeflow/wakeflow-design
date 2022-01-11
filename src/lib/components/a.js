import React from 'react'

const A = ({ 
  href,
  target = `_blank`,
  rel = `noopener noreferrer`,
  children,
  ...rest
}) => {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      {...rest}
    >{children}</a>
  )
}

export default A 


