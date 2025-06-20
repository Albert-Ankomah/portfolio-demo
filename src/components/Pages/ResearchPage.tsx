import researchImage from "../../assets/research2.jpg";
import researchImage2 from "../../assets/research1.jpg";
import researchImage3 from "../../assets/research3.jpg";

// import newImage from '../../assets/new.jpg'
import Footer from '../Footer'
import ScrollToTop from '../ScrollToTop'
import Header from "../Header";

const ResearchPage = () => {
  return (
    <div>

      {/* header */}
      <Header />

      {/* body */}
      <div className='grid md:grid-cols-2 gap-4 py-4 text-center justify-center items-center'>
        <img src={researchImage} alt="research" className='w-full max-h-[600px] object-cover' />
        <p>
          <span>
            Information systems (IS), artificial intelligence (AI), and business analytics are deeply intertwined in ways that influence both business and healthcare in today’s data-driven world. My research interest focuses on how we could use leverage various forms of technology with the goal of driving innovation and creating impactful solutions that enhance decision making processes in clinical, corporate, and data governance contexts.

          </span>
        </p>
        <img src={researchImage2} alt="research" className='w-full max-h-[600px] object-cover' />
        <p>
          <span className='font-bold text-2xl tracking-tighter'>Machine Learning and Healthcare Analytics Stream <br /></span>
          <span>
            The integration of AI and ML into healthcare holds a promise of transforming how we diagnose, treat, and manage diseases. My research in this area focuses on improving and augmenting decision making and self management in chronic neurological disease management such as Alzheimer's Disease (AD) and Parkinson's Disease (PD) through AI-powered clinical decision support systems (CDSS). As part of my dissertation research, I am working on multiple studies that focus on AI applications in healthcare, design choices for AI applications and the challenges of adopting digital health innovations. Our primary goal is to theoretically establish how practical technological innovations can enhance healthcare delivery, improve accessibility and elevate quality. I believe that early detection, self management and personalized treatment are crucial for patient care, and I work toward using various ML techniques to assist healthcare professionals in making more informed decisions. My research contributes to the broader discussion on enhancing healthcare outcomes through advanced technologies to improve the efficiency and accuracy of clinical decision-making. <br />
          </span>
          <br />


          <a
            href="https://aisel.aisnet.org/hicss-57/hc/process/4/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-lg font-medium text-white bg-orange-800 rounded hover:bg-orange-900 transition"
          >
            Link to Most Recently Published Paper
          </a>


        </p>

        <img src={researchImage3} alt="new" />
        <p>
          <span className='font-bold text-2xl tracking-tighter'> Analytics for Corporate Sustainability and Societal Impact <br /></span>
          <span>
            As AI continues to reshape industries, its role in corporate sustainability and societal impact has become increasingly significant. My research in this stream examines how AI can be leveraged to enhance corporate sustainability performance, with a particular focus on the role of the Chief Sustainability Officer (CSO). I investigate how advanced analytics and responsible AI can support sustainable business practices, focusing on the strategic role of Chief Sustainability Officers (CSOs) in aligning organizational goals with environmental, social, and governance (ESG) outcomes. I use machine learning, sentiment analysis, and social media analytics to examine sustainability disclosures, stakeholder engagement, and public response to digital campaigns. This stream reflects my broader interest in the societal implications of AI and contributes to the development of equitable, transparent, and data-driven business ecosystems. <br />

          </span>
          <br />
          <a
            href="https://journals.aom.org/doi/abs/10.5465/AMPROC.2024.28bp"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-lg font-medium text-white bg-orange-800 rounded hover:bg-orange-900 transition"
          >
            Link to Most Recently Published Paper
          </a>

          <br />
          <br />

          <a
            href="https://scholarspace.manoa.hawaii.edu/server/api/core/bitstreams/c369e057-20c0-4eb3-a005-045f7170662e/content"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-lg font-medium text-white bg-orange-800 rounded hover:bg-orange-900 transition"
          >
            Link to Most Recently Published Paper
          </a>
        </p>

      </div>

      <ScrollToTop />

      {/* footer */}
      <Footer />
    </div>

  )
}

export default ResearchPage
