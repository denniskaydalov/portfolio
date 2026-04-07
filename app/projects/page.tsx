'use client'

import { useTheme } from '../components/ThemeContext'

const projects = [
  {
    name: 'Orbital',
    url: 'https://tryorbital.vercel.com',
    description: 'AI memory tool for busy people. Capture everything — meetings, notes, ideas — and ask for any of it back instantly.',
  },
  {
    name: 'Hands Up',
    url: 'https://hands-up.app/',
    description: '',
  },
  {
    name: 'Multi-Agent Trading Simulator',
    url: undefined,
    description: 'Simulated stock market with AI agents you trade against, including market makers and live market events. Built at the Meta Llama Impact Hackathon.',
  },
  {
    name: 'Dev Flow',
    url: undefined,
    description: 'Automated Kanban interface that creates and moves tickets based on GitHub Actions CI/CD events. Built at Hack the North.',
  },
]

export default function ProjectsPage() {
  const { t } = useTheme()

  return (
    <main className="max-w-5xl mx-auto px-8 py-16">
      <h1 className="text-3xl font-bold mb-12" style={{ color: t.heading }}>projects</h1>
      <div className="space-y-10">
        {projects.map((p) => (
          <div key={p.name} className="flex gap-8">
            <div className="w-36 shrink-0" />
            <div className="flex-1 border-t pt-1" style={{ borderColor: t.border }}>
              {p.url ? (
                <a href={p.url} target="_blank" rel="noopener noreferrer"
                  style={{ color: t.text }} className="font-semibold hover:opacity-70 transition-opacity block mb-1">
                  {p.name}
                </a>
              ) : (
                <span className="font-semibold block mb-1" style={{ color: t.text }}>{p.name}</span>
              )}
              {p.description && (
                <p className="text-[15px] leading-relaxed" style={{ color: t.desc }}>{p.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
