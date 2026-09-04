'use client'

import { useEffect } from 'react'

export function AmbientScene() {
  useEffect(() => {
    const root = document.documentElement
    const updatePointer = (event: PointerEvent) => {
      root.style.setProperty('--pointer-x', ((event.clientX / window.innerWidth) * 2 - 1).toFixed(3))
      root.style.setProperty('--pointer-y', ((event.clientY / window.innerHeight) * 2 - 1).toFixed(3))
    }
    const updateScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      root.style.setProperty('--scroll-depth', maxScroll > 0 ? (window.scrollY / maxScroll).toFixed(3) : '0')
    }

    window.addEventListener('pointermove', updatePointer, { passive: true })
    window.addEventListener('scroll', updateScroll, { passive: true })
    updateScroll()
    return () => {
      window.removeEventListener('pointermove', updatePointer)
      window.removeEventListener('scroll', updateScroll)
    }
  }, [])

  return (
    <div className="ambient-scene" aria-hidden="true">
      <span className="ambient-plane ambient-plane-one" />
      <span className="ambient-plane ambient-plane-two" />
    </div>
  )
}
