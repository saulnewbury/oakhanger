'use client'
import { useRef } from 'react'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function TextReveal({ text }) {
  // const useRef()
  return <div>TextRevealBasic</div>
}
