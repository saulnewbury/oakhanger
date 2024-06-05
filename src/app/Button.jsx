'use client'

import React from 'react'

export default function Button() {
  return (
    <div
      className={`fixed flex w-10 h-3 cursor-pointer top-5 left-5 z-50 mix-blend-difference`}
    >
      <div className='top absolute h-px top-0 bg-white w-full mix-blend-difference'></div>
      <div className='bottom absolute h-px bottom-0 bg-white w-full mix-blend-difference'></div>
    </div>
  )
}
