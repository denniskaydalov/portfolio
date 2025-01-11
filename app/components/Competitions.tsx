export default function Competitions() {
  const competitions = [
    { id: 1, name: 'Hack the North 2024', result: 'Waterloo, ON', description: 'Developed an AI-powered solution for sustainable energy management.' },
    { id: 2, name: 'Meta Llama Impact Hackathon', result: 'Toronto, ON', description: 'Solved complex algorithmic problems in a timed competition.' },
    { id: 3, name: 'ICPC ECNA', result: 'Windsor, ON', description: 'Presented a novel approach to urban mobility using IoT devices.' },
  ]

  return (
    <section id="competitions" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-8">Competitions</h2>
      <div className="max-w-3xl mx-auto">
        {competitions.map((comp) => (
          <div key={comp.id} className="mb-8 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">{comp.name}</h3>
            <p className="text-gray-600 font-medium mb-2">{comp.result}</p>
            <p className="text-gray-700">{comp.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

