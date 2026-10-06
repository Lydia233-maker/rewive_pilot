export type ProjectTone = 'blue' | 'pink' | 'midnight'
export type ProjectVisual = 'insight' | 'character' | 'agent'

export type Project = {
  id: string
  label: string
  title: string
  description: string
  tags: string[]
  tone: ProjectTone
  visual: ProjectVisual
  comingSoon?: boolean
}

export const projects: Project[] = [
  {
    id: 'project-01',
    label: 'PROJECT 01',
    title: '运动鞋 AI 评论洞察与商品优化助手',
    description: '从评论文本中提炼可行动的产品信号，帮助团队更快理解用户与商品。',
    tags: ['E-commerce', 'LLM', 'Fine-tuning', 'MVP'],
    tone: 'blue',
    visual: 'insight',
  },
  {
    id: 'project-02',
    label: 'PROJECT 02',
    title: '华妃 AI',
    description: '探索角色型 AI 的表达边界、训练方法与体验评估。',
    tags: ['Character AI', 'SFT', 'Evaluation'],
    tone: 'pink',
    visual: 'character',
  },
  {
    id: 'project-03',
    label: 'PROJECT 03',
    title: 'NEXT EXPERIMENT',
    description: '下一个关于 Agent、检索和 AI Native 工作方式的实验。',
    tags: ['Agent', 'RAG', 'AI Native'],
    tone: 'midnight',
    visual: 'agent',
    comingSoon: true,
  },
]
