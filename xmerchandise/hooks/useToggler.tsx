"use client"
import { useState } from 'react'

const useToggler = () => {
    const [show, setShow] = useState<boolean>(false)

    const handleMenu = () => {
      setShow(!show)
    }

  return {handleMenu, show}
}

export default useToggler