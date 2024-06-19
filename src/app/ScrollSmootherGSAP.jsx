'use client'

import React from 'react'
import { gsap } from 'gsap'
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother'
import { useGSAP } from '@gsap/react'

export default function ScrollSmootherGSAP({ children }) {
  console.log(gsap)
  gsap.registerPlugin(ScrollSmoother)

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1
      // effects: true
    })
  })
  return (
    <div id='smooth-wrapper'>
      <div id='smooth-content'>{children}</div>
    </div>
  )
}
