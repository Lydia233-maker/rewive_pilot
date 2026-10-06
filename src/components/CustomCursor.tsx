import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

function CustomCursor() {
  const [isEnabled, setIsEnabled] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isOnHeroVisual, setIsOnHeroVisual] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const smoothX = useSpring(x, { stiffness: 420, damping: 34, mass: 0.2 })
  const smoothY = useSpring(y, { stiffness: 420, damping: 34, mass: 0.2 })

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)')
    const updateEnabled = () => setIsEnabled(mediaQuery.matches && navigator.maxTouchPoints === 0)
    updateEnabled()
    mediaQuery.addEventListener('change', updateEnabled)
    return () => mediaQuery.removeEventListener('change', updateEnabled)
  }, [])

  useEffect(() => {
    if (!isEnabled) {
      document.body.classList.remove('custom-cursor-active')
      return
    }

    document.body.classList.add('custom-cursor-active')
    const handlePointerMove = (event: PointerEvent) => {
      x.set(event.clientX)
      y.set(event.clientY)
    }
    const updateTarget = (event: PointerEvent) => {
      const target = event.target instanceof Element ? event.target : null
      setIsHovering(Boolean(target?.closest('a, button, [data-cursor-hover]')))
      setIsOnHeroVisual(Boolean(target?.closest('[data-cursor-glow]')))
    }
    const resetTarget = () => {
      setIsHovering(false)
      setIsOnHeroVisual(false)
    }

    document.addEventListener('pointermove', handlePointerMove, { passive: true })
    document.addEventListener('pointerover', updateTarget, { passive: true })
    document.addEventListener('pointerout', updateTarget, { passive: true })
    window.addEventListener('blur', resetTarget)
    return () => {
      document.body.classList.remove('custom-cursor-active')
      document.removeEventListener('pointermove', handlePointerMove)
      document.removeEventListener('pointerover', updateTarget)
      document.removeEventListener('pointerout', updateTarget)
      window.removeEventListener('blur', resetTarget)
    }
  }, [isEnabled, x, y])

  if (!isEnabled) return null

  return (
    <motion.div className="pointer-events-none fixed left-0 top-0 z-[100]" style={{ left: smoothX, top: smoothY }} aria-hidden="true">
      <motion.span
        animate={{ scale: isHovering ? 1.9 : 1, opacity: isHovering ? 0.85 : 0.5 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="absolute -left-4 -top-4 block size-8 rounded-full border border-neon-pink/70"
      />
      <span className="absolute -left-1 -top-1 block size-2 rounded-full bg-text shadow-[0_0_10px_rgb(255_79_184/70%)]" />
      <motion.span
        animate={{ opacity: isOnHeroVisual ? 0.13 : 0, scale: isOnHeroVisual ? 1 : 0.7 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="absolute -left-12 -top-12 block size-24 rounded-full bg-neon-pink blur-2xl"
      />
    </motion.div>
  )
}

export default CustomCursor
