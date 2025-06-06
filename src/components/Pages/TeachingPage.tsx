import Footer from "../Footer";
import Header from "../Header";

const TeachingPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <Header />
      <main className="flex-1 px-6 py-10 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 border-b pb-2">Teaching Experience</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Course Instructor
          </h2>
          <p className="italic text-gray-600 mb-1">
            University of Texas Rio Grande Valley
          </p>
          <p className="mb-1">Spring 2025</p>
          <ul className="list-disc list-inside ml-4">
            <li>
              <span className="font-medium">INFS 2300 – Data Modeling Management Tools</span>
              <ul className="list-[circle] ml-5 mt-1 space-y-1 text-gray-700">
                <li>Hybrid format, class size: 36 students</li>
                <li>
                  Introduced students to business analytics tools such as
                  Microsoft Excel</li>
                <li>Received a course evaluation score of 4.6/5</li>
              </ul>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TeachingPage;
