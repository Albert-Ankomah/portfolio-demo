import Header from '../Header'
import Footer from '../Footer'
import cvImage from '../../assets/cv.jpg'

const CVPage = () => {
    return (
    <section className='flex flex-col min-h-screen'>
        <Header />
        <div className='align-center text-center justify-center h-190 mx-auto my-10 md:h-201 py-20'>
            <img src={cvImage} alt="cv" />
            <h1 className='text-4xl font-bold text-center py-4'>Albert Ankomah Boateng</h1> 
            <a href="/files/ALBERT_ANKOMAH_BOATENG_RESUME_pdf.pdf" download='ALBERT_ANKOMAH_BOATENG_RESUME_pdf.pdf' className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 font-bold">
                Download Resume
            </a>
        </div>
        <Footer /> 
    </section>



  )
}

export default CVPage
