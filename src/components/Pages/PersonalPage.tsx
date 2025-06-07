import Footer from "../Footer"
import Header from "../Header"
import familyPhoto from "../../assets/gabriel_family.jpg"; // Replace with Gabriel's actual image

const PersonalPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col md:flex-row items-center justify-between px-8 py-20 max-w-6xl mx-auto gap-10">
        
        {/* Text Section */}
        <div className="md:w-1/2 text-left space-y-4 text-gray-800">
          <h1 className="text-3xl font-bold mb-4">More Than a Researcher</h1>
          <p>
            I was born and raised in Ghana in a loving family of four. Growing up, my home was filled with energy, discipline, and a deep sense of purpose , values that continue to shape how I live, work, and dream today.
          </p>
          <p>
            Outside of academia and professional life, I'm deeply passionate about sports and technology. I play football regularly, enjoy tennis, and I’m currently learning how to pilot a drone. Music is another key part of my life, I find rhythm in melodies and peace in sound.
          </p>
          <p>
            I'm a perfectionist by nature and never back down from a challenge. Whether it's writing code, launching a research idea, or learning something new, I believe in giving my absolute best and seeing things through.
          </p>
          <p>
            Thank you for taking the time to explore who I am beyond my CV. Feel free to connect with me if you’d like to talk tech, sports, music, or simply life.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src={familyPhoto}
            alt="Gabriel Owusu and family"
            className="rounded-lg shadow-lg max-w-full"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PersonalPage;
