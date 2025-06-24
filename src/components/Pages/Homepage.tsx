import dummy from '../../assets/welcomepage_picture.jpg'
import HomeContentText from '../HomeContentText'
import Footer from '../Footer'
import ScrollToTop from '../ScrollToTop'
import Header from '../Header'

const Homepage = () => {
    return (
    <div className='flex flex-col min-h-screen'>
            
        {/* header */}
        <Header />  
 
            
        {/* body    */}
        <div className=' mx-auto flex-1 py-4 px-4 md:px-10 lg:px-40'>
            
            <div className='flex flex-col md:flex-row items-center justify-center gap-2 md:text-left md:space-x-5 rounded-lg shadow-lg'>
                <div className='w-full md:w-1/2 lg:w-2/4'>
                    <img src={dummy} alt="" className='w-full h-auto max-h-[600px] object-cover rounded-lg shadow-lg'/>
                </div>

                <div className='w-full md:w-1/2 lg:w-2/4'>
                    <p className='text-gray-800 text-xl md:text-2xl font-bold leading-snug  '>
                        <span className='font-serif'> Gabriel Owusu <br />
                               Ph.D. Candidate, Management Information Systems <br />
                        </span>
                        <span className='font-normal text-lg md:text-xl'>
                            Robert C. Vackar College of Business & Entrepreneurship,<br />
                            University of Texas Rio Grande Valley
                        </span>
                    </p>   
                </div>    
            </div>
            
            <HomeContentText />
            
        </div>
        
            
        <ScrollToTop />
        {/* footer */}
        <Footer />
               
    </div>
 
  )
}

export default Homepage