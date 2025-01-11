export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Dennis Kaydalov. All rights reserved.</p>
        <div className="mt-4">
          <a href="https://github.com/denniskaydalov" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white mx-2">GitHub</a>
          <a href="https://linkedin.com/in/denniskaydalov" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white mx-2">LinkedIn</a>
          <a href="mailto:denniskaydalov@gmail.com" className="text-gray-300 hover:text-white mx-2">Email</a>
        </div>
      </div>
    </footer>
  )
}

