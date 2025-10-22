'use client'
import { useState, useEffect } from 'react'

interface WindowSize {
  width: number
  height: number
}

const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>(() => {
    // Return a default size during server-side rendering
    if (typeof window === 'undefined') {
      return { width: 0, height: 0 }
    }

    // Return actual window size on client-side
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    }
  })

  useEffect(() => {
    // This effect only runs on the client side
    if (typeof window === 'undefined') return

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // Set size at the first client-side load
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}

export { useWindowSize }
