import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { type PointerEvent, useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

export type PearPetState =
  | 'idle'
  | 'walking'
  | 'sleeping'
  | 'typing'
  | 'dragging'
  | 'feeding'
  | 'chatting'

const bubbles = [
  '点我干嘛 👀',
  '正在偷偷学习 Agent...',
  '今天也要 Build Something ✦',
  '检测到有人摸鱼。',
  '小梨正在加载灵感...',
  'AI PM 也需要喝咖啡 ☕',
]

type PearPetProps = {
  state?: PearPetState
}

function PearPet({ state = 'idle' }: PearPetProps) {
  const reducedMotion = useReducedMotion()
  const [bubble, setBubble] = useState<string | null>(null)
  const [isJumping, setIsJumping] = useState(false)
  const bubbleTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const lastBubbleIndex = useRef(-1)
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const eyeX = useSpring(useTransform(pointerX, [-1, 1], [-2, 2]), { stiffness: 150, damping: 20 })
  const eyeY = useSpring(useTransform(pointerY, [-1, 1], [-1, 1]), { stiffness: 150, damping: 20 })

  useEffect(() => {
    return () => {
      if (bubbleTimer.current) clearTimeout(bubbleTimer.current)
    }
  }, [])

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (window.innerWidth < 1024) return
    const bounds = event.currentTarget.getBoundingClientRect()
    pointerX.set((event.clientX - bounds.left) / bounds.width * 2 - 1)
    pointerY.set((event.clientY - bounds.top) / bounds.height * 2 - 1)
  }

  const resetPointer = () => {
    pointerX.set(0)
    pointerY.set(0)
  }

  const handleClick = () => {
    let nextIndex = Math.floor(Math.random() * bubbles.length)
    if (nextIndex === lastBubbleIndex.current) nextIndex = (nextIndex + 1) % bubbles.length
    lastBubbleIndex.current = nextIndex
    setBubble(bubbles[nextIndex])
    setIsJumping(true)
    if (bubbleTimer.current) clearTimeout(bubbleTimer.current)
    bubbleTimer.current = setTimeout(() => setBubble(null), 2400)
    window.setTimeout(() => setIsJumping(false), 450)
  }

  return (
    <div
      className="relative h-[4.25rem] w-[4.25rem] select-none sm:h-20 sm:w-20"
      data-state={state}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      {bubble && (
        <motion.div
          initial={{ opacity: 0, y: 5, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 3 }}
          className="pointer-events-none absolute -right-12 -top-14 z-40 w-max max-w-[12rem] rounded-xl border border-neon-pink/20 bg-background-deep/90 px-3 py-2 font-sans text-[10px] leading-4 text-text shadow-lg shadow-neon-pink/10 backdrop-blur-md"
        >
          {bubble}
          <span className="absolute -bottom-1.5 right-7 size-3 rotate-45 border-b border-r border-neon-pink/20 bg-background-deep/90" />
        </motion.div>
      )}

      <motion.button
        type="button"
        aria-label="Interact with PearPet"
        onClick={handleClick}
        onPointerMove={handlePointerMove}
        onPointerLeave={resetPointer}
        whileHover={{ scale: 1.05, y: -3 }}
        animate={isJumping ? { y: reducedMotion ? 0 : [0, -13, 0] } : { y: reducedMotion ? 0 : [0, -3, 0] }}
        transition={reducedMotion ? { duration: 0 } : isJumping ? { duration: 0.45, ease: 'easeOut' } : { duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative block h-full w-full cursor-pointer appearance-none border-0 bg-transparent p-0 outline-none"
      >
        <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="PearPet">
          <defs>
            <linearGradient id="pearBody" x1="28" y1="18" x2="92" y2="130" gradientUnits="userSpaceOnUse">
              <stop stopColor="#D7F69A" />
              <stop offset="0.58" stopColor="#9CCF68" />
              <stop offset="1" stopColor="#638E68" />
            </linearGradient>
            <linearGradient id="headset" x1="22" y1="45" x2="102" y2="90" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF4FB8" />
              <stop offset="1" stopColor="#39D5FF" />
            </linearGradient>
          </defs>

          <ellipse cx="60" cy="132" rx="30" ry="4" fill="#080A12" fillOpacity="0.48" />
          <path d="M61 24C62 16 67 11 75 9" stroke="#638E68" strokeWidth="5" strokeLinecap="round" />
          <path d="M72 12C82 7 92 12 92 20C83 22 76 19 72 12Z" fill="#9CCF68" fillOpacity="0.8" />
          <path d="M60 26C78 26 91 38 94 58C98 83 91 119 60 126C29 119 22 83 26 58C29 38 42 26 60 26Z" fill="url(#pearBody)" stroke="#F5F5F7" strokeOpacity="0.3" strokeWidth="1.5" />

          <path d="M28 57C28 36 43 23 60 23C77 23 92 36 92 57" stroke="url(#headset)" strokeWidth="5" strokeLinecap="round" />
          <rect x="21" y="52" width="13" height="24" rx="6.5" fill="#FF4FB8" fillOpacity="0.9" />
          <rect x="86" y="52" width="13" height="24" rx="6.5" fill="#39D5FF" fillOpacity="0.9" />
          <path d="M94 74C101 74 104 77 104 84" stroke="#39D5FF" strokeWidth="2" strokeLinecap="round" />
          <circle cx="104" cy="86" r="2.5" fill="#39D5FF" />

          <motion.g style={{ x: eyeX, y: eyeY }}>
            <ellipse cx="46" cy="68" rx="4.5" ry="7" fill="#080A12" />
            <ellipse cx="74" cy="68" rx="4.5" ry="7" fill="#080A12" />
            <circle cx="44.5" cy="65.5" r="1.5" fill="#F5F5F7" />
            <circle cx="72.5" cy="65.5" r="1.5" fill="#F5F5F7" />
          </motion.g>
          <path d="M55 82C58 85 62 85 65 82" stroke="#FF4FB8" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="38" cy="80" r="3" fill="#FF4FB8" fillOpacity="0.22" />
          <circle cx="82" cy="80" r="3" fill="#FF4FB8" fillOpacity="0.22" />

          <path d="M37 111C30 117 27 124 30 130" stroke="#9CCF68" strokeWidth="8" strokeLinecap="round" />
          <path d="M83 111C90 117 93 124 90 130" stroke="#9CCF68" strokeWidth="8" strokeLinecap="round" />
          <path d="M42 126C37 131 35 134 37 136" stroke="#FF4FB8" strokeWidth="5" strokeLinecap="round" />
          <path d="M78 126C83 131 85 134 83 136" stroke="#39D5FF" strokeWidth="5" strokeLinecap="round" />
        </svg>
      </motion.button>
    </div>
  )
}

export default PearPet
