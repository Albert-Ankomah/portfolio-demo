import researchImage from "../../assets/research.jpg";
import newImage from '../../assets/new.jpg'
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
            <img src= {researchImage} alt="research" className='w-full max-h-[600px] object-cover'/>
            <p>
                <span>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, cumque assumenda? Consectetur architecto ab, minus perspiciatis temporibus possimus exercitationem soluta reprehenderit eveniet natus quaerat ratione inventore aperiam nesciunt velit delectus?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit fugiat, delectus sit eius autem maiores voluptas laudantium repellendus fugit quis error, ratione, doloribus suscipit qui explicabo ipsa deserunt ut ullam.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam perferendis eius voluptatibus repellendus voluptate, omnis id incidunt expedita minus dolore. Quisquam excepturi facilis quos doloribus numquam enim officia neque necessitatibus!
                </span>
            </p>
                
            <img src={newImage} alt="new" />
            <p>
                <span>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, cumque assumenda? Consectetur architecto ab, minus perspiciatis temporibus possimus exercitationem soluta reprehenderit eveniet natus quaerat ratione inventore aperiam nesciunt velit delectus?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit fugiat, delectus sit eius autem maiores voluptas laudantium repellendus fugit quis error, ratione, doloribus suscipit qui explicabo ipsa deserunt ut ullam.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam perferendis eius voluptatibus repellendus voluptate, omnis id incidunt expedita minus dolore. Quisquam excepturi facilis quos doloribus numquam enim officia neque necessitatibus!
                </span>
            </p>
        </div>
            
        <div className='py-6 flex flex-col'>
  <span className='font-bold text-2xl tracking-tighter italic'>Thesis</span>

  <span className='mt-2 text-justify'>
    My dissertation focuses on one of the most pressing challenges in modern healthcare:
    how we detect, diagnose, and support people living with Alzheimer’s disease and related
    dementias (ADRDs). As populations age, especially with the rise of the baby boomer generation
    reaching retirement, healthcare systems face mounting pressure to deliver high-quality, scalable care.
    Through this research, I aim to leverage AI to improve how we manage chronic neurological conditions.
  </span>

  <span className='mt-2 text-justify'>
    I designed a unified framework that combines explainable machine learning and deep learning
    to detect signs of dementia at the earliest possible stages. Using techniques like multi-level
    attention and longitudinal neuroimaging, my models help identify and interpret patterns of disease
    progression that are often missed by traditional tools. Beyond diagnosis, I also explored how
    conversational AI can offer meaningful support to caregivers during the most demanding phases
    of care.
  </span>

  <span className='mt-2 text-justify'>
    What motivated this research is the urgent need to build smarter health information systems (HIS)
    that work not just for clinicians, but also for families and patients. With millions of people expected
    to transition from employer-sponsored insurance to public healthcare systems, the burden of care
    is increasing. At the same time, many caregivers often unpaid family members, lack the tools and
    guidance they need to navigate daily challenges.
  </span>

  <span className='mt-2 text-justify'>
    This work is guided by three main questions: <br /> (1) How can we detect ADRDs early using AI
    frameworks that are transparent and trustworthy?<br /> (2) How can we personalize diagnosis and
    progression tracking through deep learning?<br /> (3) And how can we equip caregivers with intelligent,
    compassionate AI agents that respond to real-world needs? <br />These questions shaped each
    phase of my dissertation.
  </span>

  <span className='mt-2 text-justify'>
    My goal is not just to contribute to academic literature, but also to provide tools that make a
    real difference in people’s lives. I believe this research offers a path toward more inclusive,
    effective, and human-centered healthcare systems,where technology empowers rather than
    overwhelms, and where compassion is built into every algorithm.
  </span>
</div>

            <ScrollToTop />

            {/* footer */}
            <Footer />
    </div>

  )
}

export default ResearchPage
