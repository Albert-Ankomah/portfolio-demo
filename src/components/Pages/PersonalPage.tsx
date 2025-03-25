import Footer from "../Footer"
import Header from "../Header"
import familyImage from "../../assets/family.jpg"
import tripImage from "../../assets/trip.jpg"

const PersonalPage = () => {
  return (
    <div className="flex flex-col min-h-screen">  
      <Header />

      <section className="container mx-auto py-4 min-h-[83vh]">
        <div className="flex flex-col md:grid grid-cols-2 items-center justify-center text-center md:text-left md:space-x-6 ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sint dolores quis magni laboriosam. Possimus autem excepturi quasi ipsum. Dolorum, reiciendis praesentium quisquam culpa cumque veritatis tempora exercitationem! At, amet.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio molestias illum nemo hic odio modi provident, voluptatem sit at temporibus eius quas ex quaerat omnis rem voluptates recusandae. Consectetur, reprehenderit.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur magni corrupti facilis ipsam debitis exercitationem! Temporibus, exercitationem tempore praesentium iste rerum pariatur sint minus et tenetur perspiciatis expedita veritatis quo.
          </p>
          <img src={familyImage} alt="family" />
          <img src={tripImage} alt="object-cover" />
          <p className="md:ml-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sint dolores quis magni laboriosam. Possimus autem excepturi quasi ipsum. Dolorum, reiciendis praesentium quisquam culpa cumque veritatis tempora exercitationem! At, amet.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio molestias illum nemo hic odio modi provident, voluptatem sit at temporibus eius quas ex quaerat omnis rem voluptates recusandae. Consectetur, reprehenderit.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur magni corrupti facilis ipsam debitis exercitationem! Temporibus, exercitationem tempore praesentium iste rerum pariatur sint minus et tenetur perspiciatis expedita veritatis quo.
          </p>

        </div>
      </section>

      <Footer />
    </div>
  )
}

export default PersonalPage
