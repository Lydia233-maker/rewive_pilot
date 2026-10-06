const skills = ['LLM', 'Prompt', 'Product', 'Agent', 'Data', 'Design']

function StatusPanel() {
  return (
    <aside className="relative mx-auto w-full max-w-xl overflow-hidden rounded-2xl border border-electric-blue/15 bg-background-deep/55 p-5 font-mono shadow-[0_0_28px_rgb(57_213_255/5%)] backdrop-blur-md lg:max-w-[15rem]" aria-label="AI Product Manager status">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-pink/55 to-transparent" />

      <div className="flex items-center justify-between text-[10px] tracking-[0.12em] text-muted">
        <span>xiaoli@ai-pm ~</span>
        <span className="size-1.5 rounded-full bg-electric-blue shadow-[0_0_8px_rgb(57_213_255/75%)]" />
      </div>
      <p className="mt-4 font-sans text-xs font-medium tracking-wide text-text">AI Product Manager</p>

      <div className="mt-5 border-t border-white/8 pt-4">
        <div className="flex items-center justify-between text-[10px] text-muted">
          <span>Current mode:</span>
          <span className="text-neon-pink">shipping 🚀</span>
        </div>
        <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-neon-pink to-cyber-purple" />
        </div>
      </div>

      <div className="mt-5">
        <p className="text-[10px] tracking-[0.16em] text-muted">SKILLS</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {skills.map((skill) => (
            <span key={skill} className="rounded border border-white/10 bg-white/[0.03] px-2 py-1 text-[10px] text-text/75">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-5 space-y-4 border-t border-white/8 pt-4 text-[10px]">
        <div>
          <p className="text-muted">Currently Learning</p>
          <p className="mt-1 leading-5 text-electric-blue">Agent / RAG / AI Native</p>
        </div>
        <div>
          <p className="text-muted">In Progress</p>
          <p className="mt-1 text-neon-pink">AI Project</p>
        </div>
      </div>

      <div className="mt-5 border-t border-white/8 pt-4 font-sans text-xs text-muted">
        <span className="mr-2 text-base">☕</span>+ Curiosity + AI
      </div>
    </aside>
  )
}

export default StatusPanel
