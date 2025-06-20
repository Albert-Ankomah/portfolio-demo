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
        <div className='container mx-auto flex-1 py-4'>
            
            <div className='flex flex-col md:flex-row items-center justify-center text-center md:text-left md:space-x-6 bg-gray-200 rounded-lg shadow-lg'>
                <img src={dummy} alt="" className='w-full max-h-[600px] object-cover'/>

                <p className='text-gray-800 mt-2 text-2xl font-bold'>
                    Gabriel Owusu Ph.D. Candidate, <br />
                    Management Information Systems <br />
                    Robert C. Vackar College of Business & Entrepreneurship,
                    University of Texas Rio Grande Valley
                    </p>
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