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
      <div className='mx-auto flex-1 py-4 px-4 md:px-10 lg:px-40'>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 p-6 md:p-8 rounded-xl backdrop-blur-sm transition-all duration-300">
          <div className="relative w-full md:w-1/2 overflow-hidden rounded-xl aspect-video transition-shadow duration-300 group">
            <img 
              src={researchImage} 
              alt="A visual representation of information systems, AI, and analytics working together" 
              className="w-full h-auto max-h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div> 

          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Research Focus</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Information systems (IS), artificial intelligence (AI), and business analytics are deeply intertwined, transforming both business and healthcare in today's data-driven world. My research explores how to leverage these technologies to drive innovation and develop impactful solutions that enhance decision-making processes across clinical, corporate, and data governance contexts.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-800">Information Systems</span>
              <span className="px-3 py-1 text-sm font-medium rounded-full bg-purple-100 text-purple-800">AI Applications</span>
              <span className="px-3 py-1 text-sm font-medium rounded-full bg-emerald-100 text-emerald-800">Healthcare Analytics</span>
            </div>
          </div>   
        </div>
        
        {/* research 2 */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 p-6 md:p-8 rounded-xl backdrop-blur-sm transition-all duration-300 bg-white/95">
          <div className="relative w-full md:w-1/2 overflow-hidden rounded-xl aspect-video md:aspect-[4/3] shadow-md transition-shadow duration-300 group hover:shadow-lg">
            <img 
              src={researchImage2} 
              alt="AI and machine learning applications in healthcare diagnostics" 
              className="w-full h-full object-cover transform group-hover:scale-103 transition-transform duration-500 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 leading-tight">
              Machine Learning and Healthcare Analytics
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                The integration of AI and ML into healthcare promises to transform how we diagnose, treat, and manage diseases. My research focuses on improving decision-making and self-management in chronic neurological diseases (Alzheimer's and Parkinson's) through AI-powered clinical decision support systems (CDSS).
              </p>
              
              <p>
                As part of my dissertation, I'm investigating:
              </p>
              
              <ul className="list-disc pl-5 space-y-2">
                <li>AI applications in healthcare delivery</li>
                <li>Design frameworks for medical AI systems</li>
                <li>Adoption challenges of digital health innovations</li>
              </ul>
              
              <p>
                Our goal is to establish how technological innovations can enhance healthcare accessibility and quality, with particular focus on early detection, self-management, and personalized treatment through advanced ML techniques.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-800">AI in Healthcare</span>
              <span className="px-3 py-1 text-sm font-medium rounded-full bg-purple-100 text-purple-800">Clinical Decision Support</span>
              <span className="px-3 py-1 text-sm font-medium rounded-full bg-emerald-100 text-emerald-800">Neurological Diseases</span>
            </div>
            
            <a
              href="https://aisel.aisnet.org/hicss-57/hc/process/4/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-3 text-lg font-medium text-white bg-orange-400 rounded-lg hover:bg-orange-500 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              View Most Recent Publication
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        {/* research 3 */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 p-6 md:p-8 rounded-xl backdrop-blur-sm transition-all duration-300">
          <div className="w-full md:w-1/2 overflow-hidden rounded-xl aspect-video md:aspect-[5/4] shadow-lg">
            <img 
              src={researchImage3} 
              alt="AI analytics applications for corporate sustainability and ESG metrics" 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-102"
              loading="lazy"
            />
          </div>
          
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
              Analytics for Corporate Sustainability and Societal Impact
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                As AI reshapes industries, its role in corporate sustainability and societal impact grows increasingly significant. My research examines how AI enhances sustainability performance, with particular focus on the evolving role of Chief Sustainability Officers (CSOs).
              </p>
              
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-800">Key Research Areas:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Advanced analytics for ESG (Environmental, Social, Governance) outcomes</li>
                  <li>Responsible AI in sustainable business practices</li>
                  <li>Sentiment analysis of sustainability disclosures</li>
                  <li>Social media analytics for stakeholder engagement</li>
                </ul>
              </div>
              
              <p>
                This work contributes to developing equitable, transparent, and data-driven business ecosystems that align organizational goals with societal impact.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="https://journals.aom.org/doi/abs/10.5465/AMPROC.2024.28bp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 text-lg font-medium text-white bg-orange-400 rounded-lg hover:bg-orange-500 transition-colors duration-200 shadow hover:shadow-md text-center"
              >
                View AOM Conference Paper
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              
              <a
                href="https://scholarspace.manoa.hawaii.edu/server/api/core/bitstreams/c369e057-20c0-4eb3-a005-045f7170662e/content"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 text-lg font-medium text-white bg-orange-400 rounded-lg hover:bg-orange-500 transition-colors duration-200 shadow hover:shadow-md text-center"
              >
                View HICSS Publication
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
      </div>
    </div>


      <ScrollToTop />

      {/* footer */}
      <Footer />
    </div>

  )
}

export default ResearchPage
