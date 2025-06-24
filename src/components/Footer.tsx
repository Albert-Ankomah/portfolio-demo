const Footer = () => {
  return (
    <div className="bg-orange-100 py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://scholar.google.com/citations?user=DLs2k9IAAAAJ&hl=en&oi=sra" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
              alt="Google Scholar"
              className="w-8 h-8 shadow-lg border-transparent hover:border-blue-500 hover:shadow-xl hover:scale-120 transform transition-all duration-300 ease-in-out rounded-full"
            />
          </a>
          <a href="https://github.com/aspirinzamani" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
              alt="GitHub"
              className="w-8 h-8 shadow-lg border-transparent hover:border-blue-500 hover:shadow-xl hover:scale-120 transform transition-all duration-300 ease-in-out rounded-full"
            />
          </a>
          <a href="https://www.linkedin.com/in/gabriel-owusu-9965b7137/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/145/145807.png"
              alt="LinkedIn"
              className="w-8 h-8 shadow-lg border-transparent hover:border-blue-500 hover:shadow-xl hover:scale-120 transform transition-all duration-300 ease-in-out rounded-full"
            />
          </a>
          <a href="https://x.com/aspirin_gabriel?s=21" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
              alt="Twitter"
              className="w-8 h-8 shadow-lg border-transparent hover:border-blue-500 hover:shadow-xl hover:scale-120 transform transition-all duration-300 ease-in-out rounded-full"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
