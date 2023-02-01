import { useEffect, useState } from 'react'

const useMediaQuery = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  return {
    isMobile: width <= 768,
    isTablet: width > 768 && width <= 1124,
  }
}

export default useMediaQuery
