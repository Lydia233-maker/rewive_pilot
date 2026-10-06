import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import { type PointerEvent, useRef } from 'react'
import PearPet from './PearPet'

function HeroVisual() {
  const visualRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const springX = useSpring(pointerX, { stiffness: 80, damping: 18, mass: 0.5 })
  const springY = useSpring(pointerY, { stiffness: 80, damping: 18, mass: 0.5 })
  const translateX = useTransform(springX, [-1, 1], [-7, 7])
  const translateY = useTransform(springY, [-1, 1], [-5, 5])

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (reducedMotion || window.innerWidth < 1024 || !visualRef.current) return
    const bounds = visualRef.current.getBoundingClientRect()
    pointerX.set((event.clientX - bounds.left) / bounds.width * 2 - 1)
    pointerY.set((event.clientY - bounds.top) / bounds.height * 2 - 1)
  }

  const resetPointer = () => {
    pointerX.set(0)
    pointerY.set(0)
  }

  return (
    <div
      ref={visualRef}
      data-cursor-glow
      className="relative mx-auto h-[26rem] w-full max-w-[34rem] overflow-visible sm:h-[32rem]"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <motion.div style={{ x: translateX, y: translateY }} className="absolute inset-0">
        <div className="absolute right-[2%] top-[5%] z-30 sm:right-[5%] sm:top-[7%]">
          <PearPet />
        </div>

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[75%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyber-purple/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-4 top-16 h-40 w-40 rounded-full bg-electric-blue/10 blur-3xl" />

        <div className="absolute left-1/2 top-1/2 h-[78%] w-[70%] -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-[2rem] border border-white/15 bg-background-deep/45 shadow-[0_0_55px_rgb(155_92_255/12%),inset_0_0_40px_rgb(57_213_255/5%)] backdrop-blur-sm">
          <div className="absolute inset-5 rounded-[1.3rem] border border-neon-pink/20 bg-[linear-gradient(135deg,rgb(255_79_184/7%),transparent_38%,rgb(57_213_255/6%))]" />
          <div className="absolute inset-0 rounded-[2rem] opacity-35 [background-image:linear-gradient(rgb(255_255_255/6%)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/6%)_1px,transparent_1px)] [background-size:32px_32px]" />
          <div className="absolute left-7 right-7 top-[38%] h-px bg-gradient-to-r from-transparent via-electric-blue/35 to-transparent" />
          <div className="absolute -left-8 top-12 h-px w-16 rotate-[-34deg] bg-gradient-to-r from-transparent to-neon-pink/50" />
          <div className="absolute -right-10 bottom-20 h-px w-20 rotate-[-34deg] bg-gradient-to-r from-electric-blue/50 to-transparent" />
          <span className="absolute left-7 top-6 text-[9px] uppercase tracking-[0.25em] text-white/25">Portal / 01</span>
          <span className="absolute bottom-6 right-7 text-[9px] uppercase tracking-[0.2em] text-white/20">Frame active</span>
        </div>

        <div className="absolute left-1/2 top-[18%] z-10 h-[64%] w-[35%] -translate-x-1/2">
          <div className="absolute left-1/2 top-0 size-[4.8rem] -translate-x-1/2 rounded-full border border-white/20 bg-gradient-to-br from-white/20 to-cyber-purple/25 shadow-[0_0_24px_rgb(155_92_255/20%)]" />
          <div className="absolute left-1/2 top-[4.3rem] h-[13rem] w-[8.2rem] -translate-x-1/2 rounded-[45%_45%_22%_22%] border border-white/15 bg-gradient-to-b from-cyber-purple/30 via-background-deep to-background-deep shadow-[inset_0_0_30px_rgb(57_213_255/7%)]" />
          <div className="absolute left-1/2 top-[6.5rem] h-px w-20 -translate-x-1/2 bg-neon-pink/55 shadow-[0_0_12px_rgb(255_79_184/50%)]" />
          <div className="absolute left-1/2 top-[11rem] h-16 w-28 -translate-x-1/2 rounded-[50%] border border-electric-blue/20 bg-electric-blue/5 blur-[1px]" />
        </div>

        <div className="absolute bottom-[16%] left-[23%] z-20 h-4 w-[46%] rotate-[17deg] rounded-full border border-neon-pink/30 bg-gradient-to-r from-background-deep via-neon-pink/45 to-white/25 shadow-[0_0_18px_rgb(255_79_184/22%)]" />
        <div className="absolute bottom-[9%] right-[20%] z-20 h-16 w-7 rotate-[-15deg] rounded-b-xl border border-electric-blue/35 bg-gradient-to-b from-background-deep to-electric-blue/30 shadow-[0_0_18px_rgb(57_213_255/20%)]" />
        <div className="absolute right-[17%] top-[12%] z-20 h-14 w-3 rotate-[25deg] rounded-full bg-gradient-to-b from-neon-pink/75 to-cyber-purple/20 shadow-[0_0_18px_rgb(255_79_184/24%)]" />
        <div className="absolute bottom-[4%] right-[11%] z-20 h-3 w-14 rotate-[-8deg] rounded-full border border-electric-blue/40 bg-electric-blue/20" />

        <span className="absolute left-[11%] top-[25%] size-1 rounded-full bg-neon-pink/70 shadow-[0_0_8px_rgb(255_79_184/60%)]" />
        <span className="absolute right-[8%] top-[40%] size-1.5 rounded-full bg-electric-blue/60" />
        <span className="absolute bottom-[24%] left-[13%] size-1 rounded-full bg-cyber-purple/70" />
      </motion.div>
    </div>
  )
}

export default HeroVisual
