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
            <span className='mt-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quo ipsa debitis quam tempore voluptate nostrum iusto nihil aut, commodi ad, ab incidunt? Maxime suscipit obcaecati eligendi nihil, blanditiis excepturi.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis placeat iusto quo, mollitia accusantium architecto maxime? Saepe sit vero doloremque fugit officiis, nulla blanditiis voluptate ullam dolores, quas totam quis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi non laborum ea illo neque veniam debitis rem possimus, nihil soluta voluptates, eligendi provident ratione sapiente nam nisi ducimus reprehenderit error.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab et fugiat labore. Sapiente repellendus amet earum. Veritatis molestias nobis impedit rerum commodi dolorum eveniet reprehenderit, vitae voluptatem, repellat laudantium accusantium!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam veniam totam? Pariatur maiores rem est et tempore incidunt sequi, ex quisquam deleniti esse temporibus dignissimos neque eius libero! Est!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati illo aspernatur fuga ea voluptatibus quidem error quas deleniti et iste, accusantium modi quibusdam magni exercitationem libero nihil eos minima cumque.
            </span>
            <span className='mt-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quo ipsa debitis quam tempore voluptate nostrum iusto nihil aut, commodi ad, ab incidunt? Maxime suscipit obcaecati eligendi nihil, blanditiis excepturi.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis placeat iusto quo, mollitia accusantium architecto maxime? Saepe sit vero doloremque fugit officiis, nulla blanditiis voluptate ullam dolores, quas totam quis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi non laborum ea illo neque veniam debitis rem possimus, nihil soluta voluptates, eligendi provident ratione sapiente nam nisi ducimus reprehenderit error.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab et fugiat labore. Sapiente repellendus amet earum. Veritatis molestias nobis impedit rerum commodi dolorum eveniet reprehenderit, vitae voluptatem, repellat laudantium accusantium!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam veniam totam? Pariatur maiores rem est et tempore incidunt sequi, ex quisquam deleniti esse temporibus dignissimos neque eius libero! Est!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati illo aspernatur fuga ea voluptatibus quidem error quas deleniti et iste, accusantium modi quibusdam magni exercitationem libero nihil eos minima cumque.
            </span>
        </div>
        
            <ScrollToTop />

            {/* footer */}
            <Footer />
    </div>

  )
}

export default ResearchPage
