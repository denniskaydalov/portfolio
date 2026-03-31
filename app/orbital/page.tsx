export const metadata = {
  title: 'Orbital — AI Memory for Busy People',
  description: 'Capture everything. Ask anything back, instantly. Never lose a detail again.',
}

const useCases = [
  {
    persona: 'Executives',
    queries: [
      '"What did Henry say about the project in yesterday\'s meeting?"',
      '"What did accounting share during last week\'s town hall?"',
    ],
    description:
      'You\'re in back-to-back meetings all day. Orbital is where everything lands so nothing gets lost.',
  },
  {
    persona: 'Product Managers',
    queries: [
      '"Which milestones are still in progress?"',
      '"How does this subsystem work under the hood?"',
    ],
    description:
      'Keep your head clear for decisions. Drop in specs, stakeholder notes, and architecture details — ask later.',
  },
]

const features = [
  {
    title: 'No formatting required',
    description: 'Raw notes, rough quotes, pasted Slack messages. Just get it in.',
  },
  {
    title: 'Ask in plain English',
    description: 'Orbital understands what you mean, not just what you typed.',
  },
  {
    title: 'Context included',
    description: 'Answers come with who said it, when, and where — not just a snippet.',
  },
  {
    title: 'Yours only',
    description: 'Encrypted and private. Nobody else sees your knowledge base.',
  },
]

export default function OrbitalPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">

      {/* Nav */}
      <nav className="px-8 py-5 flex items-center justify-between max-w-5xl mx-auto">
        <span className="text-base font-semibold tracking-tight text-white">
          Orbital
        </span>
        <a
          href="mailto:dennis@denniskaydalov.com"
          className="text-sm text-white/40 hover:text-white/80 transition-colors"
        >
          Contact
        </a>
      </nav>

      {/* Hero */}
      <section className="px-8 pt-24 pb-28 max-w-5xl mx-auto text-center">
        <p className="text-xs font-medium text-white/30 uppercase tracking-widest mb-8">
          AI Knowledge Base
        </p>

        <h1 className="text-5xl sm:text-6xl font-bold leading-[1.1] tracking-tight mb-4">
          Stop carrying it all in your head.
        </h1>

        <p className="text-base text-white/50 max-w-lg mx-auto mb-10 leading-relaxed">
          Capture everything — meetings, calls, docs, ideas. Instantly ask for any of it back and never lose a detail again.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="mailto:dennis@denniskaydalov.com"
            className="inline-flex items-center justify-center rounded-md bg-white text-black px-6 py-2.5 text-sm font-medium hover:bg-white/90 transition-colors"
          >
            Request early access
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center rounded-md border border-white/10 px-6 py-2.5 text-sm font-medium text-white/50 hover:text-white hover:border-white/20 transition-colors"
          >
            See how it works
          </a>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-white/8 max-w-5xl mx-auto" />

      {/* How it works */}
      <section id="how-it-works" className="px-8 py-20 max-w-5xl mx-auto">
        <p className="text-xs font-medium text-white/30 uppercase tracking-widest mb-10">
          How it works
        </p>

        <div className="grid sm:grid-cols-2 gap-px bg-white/8 border border-white/8 rounded-xl overflow-hidden">
          <div className="bg-[#0a0a0a] p-8">
            <p className="text-xs text-white/30 mb-4">01</p>
            <h3 className="text-lg font-semibold mb-3">Log it in</h3>
            <p className="text-white/45 text-sm leading-relaxed">
              Paste notes, quotes, docs, voice memo transcripts — anything, however raw.
              No structure needed. Just get it out of your head.
            </p>
          </div>
          <div className="bg-[#0a0a0a] p-8">
            <p className="text-xs text-white/30 mb-4">02</p>
            <h3 className="text-lg font-semibold mb-3">Ask anything back</h3>
            <p className="text-white/45 text-sm leading-relaxed">
              Ask in plain English. Orbital searches your entire history and
              returns the exact answer — with context about when and who.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-white/8 max-w-5xl mx-auto" />

      {/* Use cases */}
      <section className="px-8 py-20 max-w-5xl mx-auto">
        <p className="text-xs font-medium text-white/30 uppercase tracking-widest mb-10">
          Who it's for
        </p>

        <div className="grid sm:grid-cols-2 gap-8">
          {useCases.map((uc) => (
            <div key={uc.persona}>
              <h3 className="text-base font-semibold mb-2 text-white/80">{uc.persona}</h3>
              <p className="text-sm text-white/40 leading-relaxed mb-5">{uc.description}</p>
              <div className="space-y-2">
                {uc.queries.map((q) => (
                  <div
                    key={q}
                    className="rounded-lg border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-white/50 italic"
                  >
                    {q}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-white/8 max-w-5xl mx-auto" />

      {/* Features */}
      <section className="px-8 py-20 max-w-5xl mx-auto">
        <p className="text-xs font-medium text-white/30 uppercase tracking-widest mb-10">
          Built to get out of your way
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => (
            <div key={f.title}>
              <h3 className="text-sm font-semibold mb-2 text-white/80">{f.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/8 px-8 py-6 max-w-5xl mx-auto flex items-center justify-between text-xs text-white/20">
        <span>Orbital</span>
        <span suppressHydrationWarning>
          © {new Date().getFullYear()}{' '}
          <a
            href="https://denniskaydalov.com"
            className="hover:text-white/50 transition-colors underline underline-offset-2"
          >
            Dennis Kaydalov
          </a>
        </span>
      </footer>

    </div>
  )
}
