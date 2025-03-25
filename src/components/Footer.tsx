
const Footer = () => {
  return (
    <div className="bg-orange-100 py-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <h3 className='text-3xl font-bold tracking-tight italic rounded-full bg-orange-800 text-white text-center'>Asp</h3>
            
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="https://github.com" target="_blank">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" className="w-8 h-8 hover:shadow-xl transition duration-300 rounded-full" />
              </a>
              <a href="https://linkedin.com" target="_blank">
                  <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn" className="w-8 h-8 hover:shadow-xl transition duration-300 rounded-full"/>
              </a>

              <a href="https://twitter.com" target="_blank">
                  <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" className="w-8 h-8 hover:shadow-xl transition duration-300 rounded-full"/>
              </a>

              <a href="https://facebook.com" target="_blank">
                  <img src="https://cdn-icons-png.flaticon.com/512/145/145802.png" alt="Facebook" className="w-8 h-8 shadow-lg hover:shadow-xl transition duration-300 rounded-full"/>
              </a>
            </div>
        </div>
    </div>
  )
}

export default Footer
