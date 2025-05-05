import Image from 'next/image'

export default function Projects() {
  const hackathons = [
    { id: 1, role: 'Hack the North', company: 'Dev Flow', period: 'Sep 2024', description: 'Built an automated Kanban interface, streamlining CI/CD with GitHub Actions.' },
    { id: 2, role: 'Meta Llama Impact Hackathon', company: 'Trading Zoo', period: 'Dec 2024', description: 'Built a simluated multi-agent stock market to practice trading against AI agents.' },
  ]

  return (
    <section id="projects" className="py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Hackathons</h2>
      <div className="max-w-3xl mx-auto">
        {hackathons.map((exp) => (
          <div key={exp.id} className="mb-8 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">{exp.role}</h3>
            <p className="text-gray-600 mb-2">{exp.company} | {exp.period}</p>
            <p className="text-gray-700">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

