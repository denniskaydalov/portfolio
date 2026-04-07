'use client'

import { useTheme } from '../components/ThemeContext'

const jobs = [
  {
    company: 'Ramp',
    url: 'https://ramp.com',
    location: 'New York City',
    period: 'May – Aug 2026',
    incoming: true,
    description: 'Incoming backend engineer on Custom Fields & Records. Building AI agents for seamless client onboarding.',
  },
  {
    company: 'Shopify',
    url: 'https://shopify.com',
    location: 'Toronto',
    period: 'Jan – Aug 2025',
    incoming: false,
    description: 'Two terms across the Retail Kernel and In Store Orders teams. Built GraphQL APIs, shipped a Shop Mini to 20M+ users, and won an internal hackathon.',
  },
  {
    company: 'Infinite Investment Systems',
    url: 'https://www.inf-systems.com',
    location: 'Toronto',
    period: 'Apr – Dec 2024',
    incoming: false,
    description: 'Built NL-to-SQL services using Azure OpenAI and RAG. ETL pipelines ingesting data from 400+ firms.',
  },
]

export default function WorkPage() {
  const { t } = useTheme()

  return (
    <main className="max-w-5xl mx-auto px-8 py-16">
      <h1 className="text-3xl font-bold mb-12" style={{ color: t.heading }}>work</h1>
      <div className="space-y-10">
        {jobs.map((job) => (
          <div key={job.company} className="flex gap-8">
            <div className="w-36 shrink-0 text-right pt-1">
              <span className="text-[13px]" style={{ color: t.muted }}>{job.period}</span>
            </div>
            <div className="flex-1 border-t pt-1" style={{ borderColor: t.border }}>
              <div className="flex items-center gap-2 mb-1">
                <a href={job.url} target="_blank" rel="noopener noreferrer"
                  style={{ color: t.text }} className="font-semibold hover:opacity-70 transition-opacity">
                  {job.company}
                </a>
                {job.incoming && (
                  <span className="text-[11px] border rounded px-1.5 py-px"
                    style={{ color: t.accent, borderColor: `${t.accent}44` }}>incoming</span>
                )}
                <span className="text-[13px]" style={{ color: t.dimmer }}>· {job.location}</span>
              </div>
              <p className="text-[15px] leading-relaxed" style={{ color: t.desc }}>{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
