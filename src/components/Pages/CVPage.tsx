import Header from '../Header';
import Footer from '../Footer';
import gabrielImage from '../../assets/CV_pg.jpg'; 

const CVPage = () => {
  return (
    <section className='flex flex-col h-screen'>
      <Header />
      <div className='text-center items-center justify-center p-2'>
        <div>
          <img src={gabrielImage} alt="Gabriel Owusu writing" className="max-w-md mx-auto rounded-lg shadow-md" />
        </div>
        <h1 className='text-3xl font-bold font-serif py-2'>Gabriel Owusu</h1>
        <a
          href="public/files/CV_Gabriel_Owusu.pdf"
          download="CV_Gabriel_Owusu.pdf"
          className="px-4 py-2 text-lg font-medium text-white bg-orange-400 rounded hover:bg-orange-500 transition"
        >
          Download CV
        </a> 
        <br />

        <div>
        <p className="text-xl text-gray-800 leading-relaxed max-w-2xl mx-auto">
            Please keep my resume on file in case you think I may be a good fit with your organization either now or in the future. 
            Feel free to contact me with any questions at <br />
            <span className="text-orange-800 font-semibold">gabriel.owusu01@utrgv.edu</span><br />
            I am always happy to have a chat.
        </p>

          <a
            href="mailto:gabriel.owusu01@utrgv.edu"
            className="inline-block px-6 py-3 bg-gray-200 text-gray-800 font-bold rounded hover:bg-gray-300 transition"
            
          >
            SEND ME A MESSAGE
          </a>
        </div>
        
      </div>
      
      <Footer />
    </section>
  );
};

export default CVPage;
