import { motion } from 'framer-motion'
import { ArrowUpRight, CircleDot, Sparkles, Workflow } from 'lucide-react'
import type { Project, ProjectTone, ProjectVisual } from '../data/projects'

type ProjectCardProps = {
  project: Project
}

const toneStyles: Record<ProjectTone, { border: string; glow: string; icon: string; gradient: string }> = {
  blue: {
    border: 'group-hover:border-electric-blue/50',
    glow: 'group-hover:shadow-[0_18px_40px_rgb(57_213_255/10%)]',
    icon: 'bg-electric-blue/10 text-electric-blue',
    gradient: 'from-electric-blue/20 via-electric-blue/5 to-transparent',
  },
  pink: {
    border: 'group-hover:border-neon-pink/50',
    glow: 'group-hover:shadow-[0_18px_40px_rgb(255_79_184/11%)]',
    icon: 'bg-neon-pink/10 text-neon-pink',
    gradient: 'from-neon-pink/20 via-cyber-purple/8 to-transparent',
  },
  midnight: {
    border: 'group-hover:border-cyber-purple/35',
    glow: 'group-hover:shadow-[0_18px_40px_rgb(155_92_255/8%)]',
    icon: 'bg-white/5 text-muted',
    gradient: 'from-cyber-purple/12 via-white/[0.02] to-transparent',
  },
}

function ProjectVisual({ visual, gradient }: { visual: ProjectVisual; gradient: string }) {
  return (
    <div className={`relative h-48 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${gradient}`}>
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgb(255_255_255/5%)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/5%)_1px,transparent_1px)] [background-size:28px_28px]" />
      {visual === 'insight' && (
        <div className="absolute inset-x-8 bottom-8 flex h-24 items-end gap-2 border-b border-electric-blue/25">
          {[35, 58, 46, 78, 64, 90].map((height, index) => (
            <span key={index} className="flex-1 rounded-t-sm bg-gradient-to-t from-electric-blue/20 to-electric-blue/70" style={{ height: `${height}%` }} />
          ))}
          <span className="absolute left-0 right-0 top-7 h-px rotate-[-8deg] bg-electric-blue/70 shadow-[0_0_12px_rgb(57_213_255/65%)]" />
        </div>
      )}
      {visual === 'character' && (
        <div className="absolute left-1/2 top-1/2 size-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-neon-pink/40 bg-gradient-to-br from-neon-pink/30 to-cyber-purple/20 shadow-[0_0_35px_rgb(255_79_184/18%)]">
          <div className="absolute left-1/2 top-1/2 size-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/25 bg-background-deep/70" />
          <span className="absolute -right-4 top-5 h-px w-12 rotate-[-22deg] bg-neon-pink/70" />
          <span className="absolute -left-5 bottom-6 h-px w-12 rotate-[20deg] bg-cyber-purple/70" />
        </div>
      )}
      {visual === 'agent' && (
        <div className="absolute inset-0 grid place-items-center">
          <div className="relative size-24 rounded-full border border-white/15">
            <div className="absolute inset-3 rounded-full border border-cyber-purple/30" />
            <div className="absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyber-purple shadow-[0_0_18px_rgb(155_92_255/80%)]" />
            <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-cyber-purple/50 to-transparent" />
            <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-electric-blue/40 to-transparent" />
          </div>
        </div>
      )}
      <span className="absolute left-4 top-4 font-mono text-[9px] uppercase tracking-[0.18em] text-white/30">UI / Preview</span>
    </div>
  )
}

function ProjectIcon({ visual }: { visual: ProjectVisual }) {
  if (visual === 'insight') return <CircleDot size={19} />
  if (visual === 'character') return <Sparkles size={19} />
  return <Workflow size={19} />
}

function ProjectCard({ project }: ProjectCardProps) {
  const style = toneStyles[project.tone]

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      data-cursor-hover
      className={`group rounded-3xl border border-white/10 bg-background-deep/50 p-4 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1.5 ${style.border} ${style.glow}`}
    >
      <ProjectVisual visual={project.visual} gradient={style.gradient} />
      <div className="px-2 pb-2 pt-6">
        <div className="flex items-start justify-between gap-4">
          <div className={`grid size-10 place-items-center rounded-xl ${style.icon}`}>
            <ProjectIcon visual={project.visual} />
          </div>
          <span className="font-mono text-[10px] tracking-[0.16em] text-muted/70">{project.label}</span>
        </div>
        <h3 className="mt-5 min-h-14 text-xl font-semibold leading-7 tracking-tight text-text">{project.title}</h3>
        <p className="mt-3 min-h-12 text-sm leading-6 text-muted">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] text-muted">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-between border-t border-white/8 pt-4 text-xs">
          <span className={project.comingSoon ? 'text-muted' : 'text-text/65'}>{project.comingSoon ? 'Coming Soon' : 'View case study'}</span>
          <ArrowUpRight size={16} className="text-electric-blue transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectCard
