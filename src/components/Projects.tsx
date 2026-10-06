import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <section id="projects" className="relative border-t border-white/8 px-6 py-24 sm:px-10 lg:px-14" aria-labelledby="projects-title">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="mb-12 max-w-2xl"
        >
          <p className="font-mono text-xs tracking-[0.25em] text-electric-blue">/ 02</p>
          <p className="mt-6 text-xs font-medium uppercase tracking-[0.28em] text-neon-pink">MY PROJECTS</p>
          <h2 id="projects-title" className="mt-4 text-4xl font-semibold tracking-tight text-text sm:text-5xl">小梨的实验室</h2>
          <p className="mt-5 text-base leading-7 text-muted sm:text-lg">用 AI 解决真实的问题，做真正有人用的产品。</p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
