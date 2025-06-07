import Header from "../Header";
import Footer from "../Footer";
import gabrielContactImg from "../../assets/gabriel_contact.jpg"; // ✅ Add Gabriel’s image to assets

const ContactPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col md:flex-row items-center justify-between px-8 py-20 max-w-6xl mx-auto gap-8">
        
        {/* Contact Text */}
        <div className="md:w-1/2 text-left space-y-6">
          <p className="text-xl text-gray-800 leading-relaxed">
            You can reach me at <br />
            <span className="text-blue-700 font-semibold">gabriel.owusu01@utrgv.edu</span><br />
            I am always happy to have a chat.
          </p>

          <a
            href="mailto:gabriel.owusu01@utrgv.edu"
            className="inline-block px-6 py-3 bg-gray-200 text-gray-800 font-bold rounded hover:bg-gray-300 transition"
          >
            CLICK HERE TO SEND ME A MESSAGE
          </a>
        </div>

        {/* Gabriel's Image */}
        <div className="md:w-1/2">
          <img
            src={gabrielContactImg}
            alt="Gabriel Owusu"
            className="rounded-lg shadow-lg max-w-full"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
