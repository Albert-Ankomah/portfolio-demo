import Header from '../Header';
import Footer from '../Footer';
import gabrielImage from '../../assets/CV_pg.jpg'; 

const CVPage = () => {
  return (
    <section className='flex flex-col min-h-screen'>
      <Header />
      <div className='text-center justify-center mx-auto my-10 py-20'>
        <img
          src={gabrielImage}
          alt="Gabriel Owusu writing"
          className="max-w-md mx-auto rounded-lg shadow-md"
        />
        <h1 className='text-4xl font-bold py-6'>Gabriel Owusu</h1>
        <a
          href="public/files/GABRIEL_OWUSU_RESUME.pdf"
          download="Gabriel_Owusu_Resume.pdf"
          className="px-4 py-2 text-lg font-medium text-white bg-orange-800 rounded hover:bg-orange-900 transition"
        >
          Download CV
        </a> 
        <br />
        <br />

        
        

        <p className="text-xl text-gray-800 leading-relaxed">
            Please keep my resume on file in case you think I may be a good fit with your organization either now or in the future. 
            Feel free to contact me with any questions at <br />
            <span className="text-orange-700 font-semibold">gabriel.owusu01@utrgv.edu</span><br />
            I am always happy to have a chat.
          </p>

          <a
            href="mailto:gabriel.owusu01@utrgv.edu"
            className="inline-block px-6 py-3 bg-gray-200 text-gray-800 font-bold rounded hover:bg-gray-300 transition"
            
          >
            CLICK HERE TO SEND ME A MESSAGE
          </a>
      </div>
      
      <Footer />
    </section>
  );
};

export default CVPage;
