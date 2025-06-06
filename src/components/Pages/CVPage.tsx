import Header from '../Header';
import Footer from '../Footer';
import gabrielImage from '../../assets/gabriel_cv_image.jpg'; // ✅ Ensure this matches the file in /assets

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
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Download CV
        </a>
      </div>
      <Footer />
    </section>
  );
};

export default CVPage;
