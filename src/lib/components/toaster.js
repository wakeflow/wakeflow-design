import React from 'react'
import { Toaster as HotToaster,toast as hotToast } from 'react-hot-toast'

const Toaster = () => {
  return (
    <HotToaster/>
  )
}

const toast = {
  info: msg => hotToast(msg,infoStyle),
  success: msg => hotToast(msg,successStyle),
  error: msg => hotToast(msg,errorStyle),
}

export default Toaster

export { toast }

const errorStyle = {
  style: {
    color: `white`,
    backgroundColor: `#f44336`,
  },
}

const successStyle = {
  style: {
    color: `white`,
    backgroundColor: `#4bb543`,
  },
}

const infoStyle = {
  style: {
    color: `white`,
    backgroundColor: `black`,
  },
}