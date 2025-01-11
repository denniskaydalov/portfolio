import Image from 'next/image'

export default function AboutMe() {
  return (
    <section id="about" className="pt-8 py-20">
      <h1 className="text-7xl font-bold text-center mb-20 text-gray-800">Dennis Kaydalov</h1>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <Image
            src="./pfp.jpg?height=300&width=300"
            alt="Profile Picture"
            width={300}
            height={300}
            className="rounded-full"
          />
        </div>
        <div className="md:w-2/3 md:pl-8 text-center md:text-left">
          <p className="text-gray-700 mb-4">
            Hello! I'm Dennis, I study Mathematics and Computer Science at TMU and I'm currently a Software Developer at Shopify!
          </p>
          <p className="text-gray-700">
            I love Backend Development and DevOps. I also love competitive proramming, I'm even part of TMU's ICPC team!
          </p>
        </div>
      </div>
    </section>
  )
}

