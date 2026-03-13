'use client'

import dynamic from 'next/dynamic'

const StarsCanvas = dynamic(() => import('./Stars'), {
  ssr: false,
})

export default function DynamicStars() {
  return <StarsCanvas />
}
