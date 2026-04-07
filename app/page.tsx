'use client'

import Image from 'next/image'
import { useTheme } from './components/ThemeContext'

const jobs = [
  {
    company: 'Ramp',
    url: 'https://ramp.com',
    role: 'Software Engineer Intern',
    location: 'New York City',
    period: 'May – Aug 2026',
    incoming: true,
    description: 'Incoming backend engineer on Custom Fields & Records. Building AI agents for seamless client onboarding.',
  },
  {
    company: 'Orbital',
    url: 'https://tryorbital.vercel.com',
    role: 'Co-founder',
    location: 'Toronto',
    period: '2025 – present',
    incoming: false,
    description: 'AI memory tool for busy people — capture meetings, notes, and ideas, and ask for any of it back instantly.',
  },
  {
    company: 'Shopify',
    url: 'https://shopify.com',
    role: 'Software Engineer Intern',
    location: 'Toronto',
    period: 'Jan – Aug 2025',
    incoming: false,
    description: 'Two terms across the Retail Kernel and In Store Orders teams. Built GraphQL APIs, shipped a Shop Mini to 20M+ users, and won an internal hackathon.',
  },
  {
    company: 'Infinite Investment Systems',
    url: 'https://www.inf-systems.com',
    role: 'Software Engineer Intern',
    location: 'Toronto',
    period: 'Apr – Dec 2024',
    incoming: false,
    description: 'Built NL-to-SQL services using Azure OpenAI and RAG. ETL pipelines ingesting data from 400+ firms.',
  },
]

const projects = [
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

export default function Home() {
  const { t } = useTheme()

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-8 py-10 sm:py-16 space-y-16 sm:space-y-20">
      {/* Bio */}
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 items-start">
        <div className="shrink-0 sm:mt-2 mx-auto sm:mx-0">
          <div className="rounded-full overflow-hidden w-36 h-36 sm:w-52 sm:h-52" style={{ boxShadow: `0 0 0 4px ${t.ring}` }}>
            <Image src="/pfp.jpg" alt="Dennis Kaydalov" width={208} height={208} className="object-cover w-full h-full" />
          </div>
        </div>

        <div className="flex-1 max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-bold mb-5 sm:mb-6 leading-tight" style={{ color: t.heading }}>Hi, I'm Dennis!</h1>
          <div className="space-y-4 text-[16px] sm:text-[17px] leading-relaxed" style={{ color: t.body }}>
            <p>
              I'm a software engineer. This summer I'm joining{' '}
              <a href="https://ramp.com" target="_blank" rel="noopener noreferrer" style={{ color: t.accent }} className="underline underline-offset-2 hover:opacity-75 transition-opacity">Ramp</a>{' '}
              as a SWE intern in NYC. I'm also building{' '}
              <a href="https://tryorbital.vercel.com" target="_blank" rel="noopener noreferrer" style={{ color: t.accent }} className="underline underline-offset-2 hover:opacity-75 transition-opacity">Orbital</a>,
              an AI memory tool for busy people.
            </p>
            <p>
              Before that, I was at{' '}
              <a href="https://shopify.com" target="_blank" rel="noopener noreferrer" style={{ color: t.accent }} className="underline underline-offset-2 hover:opacity-75 transition-opacity">Shopify</a>{' '}
              working on the retail kernel, and at{' '}
              <a href="https://www.inf-systems.com" target="_blank" rel="noopener noreferrer" style={{ color: t.accent }} className="underline underline-offset-2 hover:opacity-75 transition-opacity">Infinite Investment Systems</a>{' '}
              building NLP and data platform infrastructure.
            </p>
            <p>
              I study Math &amp; CS at{' '}
              <a href="https://www.torontomu.ca" target="_blank" rel="noopener noreferrer" style={{ color: t.accent }} className="underline underline-offset-2 hover:opacity-75 transition-opacity">TMU</a>, did an exchange at{' '}
              <a href="https://ntu.edu.sg" target="_blank" rel="noopener noreferrer" style={{ color: t.accent }} className="underline underline-offset-2 hover:opacity-75 transition-opacity">NTU</a>{' '}
              in Singapore, and compete on the university's{' '}
              <a href="https://www.torontomu.ca/science/news-events/2026/01/tmu-climbs-the-ranks-in-global-computer-programming-competition/" target="_blank" rel="noopener noreferrer" style={{ color: t.accent }} className="underline underline-offset-2 hover:opacity-75 transition-opacity">ICPC</a> team.
            </p>
            <p>
              Reach me at{' '}
              <a href="mailto:denniskaydalov@gmail.com" style={{ color: t.accent }} className="underline underline-offset-2 hover:opacity-75 transition-opacity">denniskaydalov@gmail.com</a>.
            </p>
          </div>
        </div>
      </div>

      {/* Work */}
      <section id="work">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12" style={{ color: t.heading }}>work</h2>
        <div className="space-y-8 sm:space-y-10">
          {jobs.map((job) => (
            <div key={job.company} className="flex flex-col sm:flex-row sm:gap-8">
              <div className="sm:w-36 shrink-0 sm:text-right sm:pt-1 mb-1 sm:mb-0">
                <span className="text-[12px] sm:text-[13px]" style={{ color: t.muted }}>{job.period}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-0.5 flex-wrap">
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
                <p className="text-[13px] mb-2" style={{ color: t.muted }}>{job.role}</p>
                <div className="border-t mb-2" style={{ borderColor: t.border }} />
                <p className="text-[14px] sm:text-[15px] leading-relaxed" style={{ color: t.desc }}>{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12" style={{ color: t.heading }}>projects</h2>
        <div className="space-y-8 sm:space-y-10">
          {projects.map((p) => (
            <div key={p.name} className="flex flex-col sm:flex-row sm:gap-8">
              <div className="hidden sm:block sm:w-36 shrink-0" />
              <div className="flex-1">
                {p.url ? (
                  <a href={p.url} target="_blank" rel="noopener noreferrer"
                    style={{ color: t.text }} className="font-semibold hover:opacity-70 transition-opacity block mb-2">
                    {p.name}
                  </a>
                ) : (
                  <span className="font-semibold block mb-2" style={{ color: t.text }}>{p.name}</span>
                )}
                <div className="border-t mb-2" style={{ borderColor: t.border }} />
                {p.description && (
                  <p className="text-[14px] sm:text-[15px] leading-relaxed" style={{ color: t.desc }}>{p.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
