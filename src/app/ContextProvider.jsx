'use client'

import { useState } from 'react'

import { MenuContext } from './Context'

export const ContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState('false')
  function toggleMenu() {
    setIsOpen(!isOpen)
  }
  return (
    <MenuContext.Provider value={{ isOpen, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  )
}
