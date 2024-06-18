'use client'

import { useState } from 'react'

import { MenuContext } from './Context'

export const ContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState('false')
  const [isReady, setIsReady] = useState(true)

  // Toggle menu
  function toggleMenu() {
    setIsOpen(!isOpen)
  }

  // Ready for start animation
  function ready(bool) {
    console.log('ready function')
    setIsReady(bool)
  }
  return (
    <MenuContext.Provider value={{ isOpen, toggleMenu, isReady, ready }}>
      {children}
    </MenuContext.Provider>
  )
}
