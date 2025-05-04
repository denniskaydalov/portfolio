export default function Experience() {
  const experiences = [
    { id: 1, role: 'Shopify', company: 'Software Engineering Intern', period: 'Jan 2025 - Present', description: 'Backend development on the In Store Orders team with Ruby and Ruby on Rails.' },
    { id: 2, role: 'Infinite Investment Systems', company: 'Software Engineering Intern', period: 'Apr 2024 - Dec 2024', description: 'Backend development & DevOps with Python and Azure.' },
    { id: 3, role: 'Applied Post', company: 'Software Engineering Contractor', period: 'Mar 2024 - Apr 2024', description: 'DevOps with Python and AWS.' },
  ]

  return (
    <section id="experience" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
      <div className="max-w-3xl mx-auto">
        {experiences.map((exp) => (
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

