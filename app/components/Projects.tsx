import Image from 'next/image'

export default function Projects() {
  const projects = [
    { id: 1, title: 'Trading Zoo', description: 'A simulated multi-agent stock market, pairing AI agents against each other to trade securities and make a profit.', image: './trading.png?height=200&width=300' },
    { id: 2, title: 'Dev Flow', description: 'An automated Kanban interface, streamlining CI/CD by automatically moving tickets from GitHub activity.', image: './dev.png?height=200&width=300' },
    { id: 3, title: 'Home Server', description: 'SuperMicro and RPI home servers, managing backups, automations, etc.', image: './server.png?height=200&width=300' },
  ]

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-8">Projects & Hackathons</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 transform hover:scale-105">
            <Image src={project.image} alt={project.title} width={300} height={200} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

