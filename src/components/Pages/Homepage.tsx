import dummy from '../../assets/dummy.jpg'
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
                <p className='text-gray-600 mt-2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, sapiente in eveniet, error id repellendus vero est eaque beatae amet illo exercitationem debitis voluptates iure,
                    optio qui cupiditate omnis aperiam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eligendi deserunt iure earum aliquam quibusdam in, possimus quos minima similique qui at accusamus
                    amet unde corrupti dolorum sint? Nemo, quod. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi veniam enim minus repellat consequuntur nesciunt temporibus nam similique accusamus quaerat qui,
                    exercitationem perspiciatis modi, fugiat accusantium? Laborum minima rerum explicabo!
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
