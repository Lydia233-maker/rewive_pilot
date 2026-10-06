import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import StatusPanel from './StatusPanel'
import HeroVisual from './HeroVisual'

const tags = ['LLM', 'Agent', 'AI Native', 'Product']

function Hero() {
  return (
    <section className="relative mx-auto flex min-h-[calc(100vh-1rem)] max-w-[1440px] items-center overflow-hidden px-6 pb-16 pt-28 sm:px-10 lg:min-h-[92vh] lg:px-14 lg:pt-24" aria-labelledby="hero-title">
      <div className="pointer-events-none absolute left-[42%] top-1/4 h-72 w-72 rounded-full bg-neon-pink/5 blur-3xl" />

      <div className="relative z-10 grid w-full items-center gap-10 lg:grid-cols-[minmax(18rem,1.03fr)_minmax(22rem,1fr)_15rem] lg:gap-6 xl:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="order-1 max-w-xl lg:order-none"
        >
          <div className="mb-6 flex items-center gap-3 text-xs font-medium tracking-[0.28em] text-neon-pink">
            <span className="h-px w-8 bg-neon-pink/70" />
            AI PRODUCT MANAGER
          </div>
          <h1 id="hero-title" className="text-5xl font-semibold leading-[0.98] tracking-[-0.06em] text-text sm:text-7xl xl:text-[5.5rem]">
            Hi,
            <span className="block">
              我是小梨 <span className="text-neon-pink">✦</span>
            </span>
          </h1>
          <p className="mt-7 max-w-md text-lg leading-8 text-text/85 sm:text-xl">
            我把 AI 变成真正能用的产品。
          </p>
          <p className="mt-2 text-sm tracking-wide text-muted">Building useful AI products.</p>

          <div className="mt-7 flex items-center gap-3 text-sm text-muted">
            <span className="size-2 rounded-full bg-electric-blue shadow-[0_0_12px_rgb(57_213_255/60%)]" />
            AI Product Manager
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-muted">
                {tag}
              </span>
            ))}
          </div>
          <a
            href="#projects"
            className="group mt-9 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-neon-pink to-[#ff77c7] px-6 py-3.5 text-sm font-semibold text-[#180b16] shadow-[0_0_26px_rgb(255_79_184/20%)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgb(255_79_184/32%)]"
          >
            探索我的项目
            <ArrowRight size={17} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08, ease: 'easeOut' }}
          className="order-2 min-w-0 lg:order-none"
        >
          <HeroVisual />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.18, ease: 'easeOut' }}
          className="order-3 w-full lg:order-none lg:w-auto"
          aria-label="Current status"
        >
          <StatusPanel />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
