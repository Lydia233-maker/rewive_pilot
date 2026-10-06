import { ArrowUpRight, ArrowDown, Sparkles } from 'lucide-react'
const projects = [
  { number: '01', label: 'AI INSIGHT', title: '让评论自己说话', copy: '把海量运动鞋评论变成能驱动决策的产品洞察。', year: '2024' },
  { number: '02', label: 'AGENT LAB', title: '角色，还是产品？', copy: '探索角色型 AI 如何被设计、训练和评估。', year: '2024' },
  { number: '03', label: 'FIELD NOTE', title: '给 Agent 留一点空白', copy: '好的 AI 产品，不应该替用户完成所有事情。', year: 'NOW' },
]
function Home() {
  return <main id="home">
    <section className="hero"><div className="hero-overlay" /><div className="hero-inner"><div className="hero-topline"><span>01 / PORTFOLIO 2026</span><span className="hero-topline-rule" /></div><div className="hero-content"><div className="hero-copy"><p className="hero-kicker">XIAOLI / 小梨 <span>—</span> AI PRODUCT MANAGER <b>+</b></p><h1>我把 <em>AI</em>，<br />做成真正能用的产品。</h1><p className="hero-intro">从真实问题出发，<br />做能被使用、验证和持续迭代的 AI 产品。</p><div className="hero-actions"><a className="button button-pink" href="#work">VIEW MY WORK <ArrowUpRight size={17} /></a><a className="under-link" href="#about">ABOUT ME <ArrowUpRight size={16} /></a></div><div className="hero-tags">LLM <span>/</span> AGENT <span>/</span> AI NATIVE <span>/</span> PRODUCT</div></div><div className="hero-side"><div className="side-line" /><span>SCROLL<br />TO EXPLORE</span><ArrowDown size={17} /></div></div></div><div className="hero-corner">✦<br /><span>AI / REAL PRODUCT</span></div></section>
    <section id="work" className="work-section"><div className="section-head"><span>02 / SELECTED WORK</span><span>WORKING IN PUBLIC ↗</span></div><div className="work-grid">{projects.map((project) => <article className="project" key={project.number}><div className="project-top"><span>{project.number}</span><span>{project.label}</span><span>{project.year}</span></div><h2>{project.title}</h2><p>{project.copy}</p><a href="#contact">查看项目 <ArrowUpRight size={16} /></a></article>)}</div></section>
    <section id="about" className="about-section"><div className="section-head"><span>03 / ABOUT ME</span><span>SHANGHAI — REMOTE</span></div><div className="about-grid"><div><p className="about-display">复杂的技术，<br /><em>简单地被使用。</em></p><div className="mini-stat"><Sparkles size={15} /><span>PRODUCT THINKING<br /><b>WITH A LITTLE MAGIC</b></span></div></div><div className="about-copy"><p>你好，我是小梨。一个对 AI 产品保持好奇的产品人，也是一位相信“先做出来再说”的长期主义者。</p><p>目前在研究 Agent、AI Native 工作方式，以及如何让复杂的技术变得更像一件好用的日常物品。</p><a className="under-link" href="mailto:hello@xiaoli.pm">给我写信 <ArrowUpRight size={16} /></a></div></div></section>
    <section id="contact" className="contact-section"><div className="contact-label">04 / CONTACT</div><h2>有一个问题，<br /><em>一起把它做出来。</em></h2><a className="button button-pink" href="mailto:hello@xiaoli.pm">LET&apos;S TALK <ArrowUpRight size={17} /></a></section>
  </main>
}
export default Home
