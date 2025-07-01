import Header from "../Header";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";

const ExperiencePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <Header />
      <main className="flex-1 px-6 py-10 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 border-b pb-2">Teaching </h1>

        <p className="mb-8">While I’m passionate about research, I find equal fulfillment in teaching, mentoring and 
          supporting students. My approach  is 
           centered on experiential learning and promoting inclusivity in the classroom. 
           I strive to foster a supportive environment where students are encouraged to express ideas freely, 
           make mistakes, and grow through hands-on practice and real-world problem solving. 
           
           </p>


        <section className="mb-8">
  <h2 className="text-2xl font-bold mb-6 pb-2 underline decoration-orange-800 text-orange-800">
    Classes Taught
  </h2>

  <div className="mb-6">
    <h3 className="text-xl font-bold mb-2">
      INFS 2300: Data Modeling Management Tools <span className="text-sm text-gray-600 bold">— Spring 2025, In Person</span>
    </h3>
    <p className="mb-1">
      This course introduces students to foundational and advanced business analytics tools, with a focus on Microsoft Excel. 
      Students develop proficiency in data modeling, spreadsheet management, data visualization, and decision-support tools used in
       business environments.
    </p>
    <p>
      Topics covered include advanced Excel functions (e.g., pivot tables, lookup functions, conditional logic), data cleaning,
       charting and visualization, scenario and sensitivity analysis, and introduction to database concepts.
    </p>
  </div>

  <div className="mb-6">
    <h3 className="text-xl font-bold mb-2">
      QUMT 4343: Prescriptive Analytics <span className="text-sm text-gray-600 bold">— Fall 2025, In Person (ITV)</span>
    </h3>
    <p className="mb-1">
      This course introduces students to data-driven decision-making techniques focused on optimizing business outcomes. 
      It emphasizes the application of advanced spreadsheet modeling and a wide range of analytical methods to support prescriptive decision-making 
      in real-world contexts.
    </p>
    <p>
      Topics covered include linear and non-linear programming, integer programming, sensitivity analysis, simulation, forecasting, queuing theory, 
      and decision analysis. Students learn how to model and solve optimization problems using tools such as Microsoft Excel and other decision-support systems.
    </p>
  </div>

  <h2 className="text-2xl font-bold mb-6 pb-2 underline decoration-orange-800 text-orange-800">
    Student Comments
  </h2>

  <p className="mb-4">
    Teaching allows me to connect with students in meaningful ways and make a direct impact on their academic and personal growth. 
    It’s incredibly fulfilling to witness those “aha” moments when a concept clicks or a student feels newly empowered in their learning. 
    Below are some reflections from students that speak to these experiences.
  </p>

  <div className="space-y-6">
    <blockquote className="italic border-l-2 border-orange-800 pl-4">
      “You were very helpful and detailed with each chapter, answered questions, and were very understanding
and helpful when I had to make up work because of my circumstances. I really appreciate everything you did
for me and I learned a lot about excel thanks to you.”
      <div className="mt-2 text-sm font-semibold text-gray-700">— Undergraduate Student, INFS 2300</div>
    </blockquote>

    <blockquote className="italic border-l-2 border-orange-800 pl-4">
      “great professor! he was really helpful through the semester and made sure everyone understood.”
      <div className="mt-2 text-sm font-semibold text-gray-700">— Undergraduate Student, INFS 2300</div>
    </blockquote>

    <blockquote className="italic border-l-2 border-orange-800 pl-4">
      “I would easily take this class again with the same professor! He was very understanding the entire
semesters and made the course content easy to understand.”
      <div className="mt-2 text-sm font-semibold text-gray-700">— Undergraduate Student, INFS 2300</div>
    </blockquote>

    <blockquote className="italic border-l-2 border-orange-800 pl-4">
      “Great class, felt too advanced for me but i managed to keep up since the instructor was very supportive
and helpful.”
      <div className="mt-2 text-sm font-semibold text-gray-700">— Undergraduate Student, INFS 2300</div>
    </blockquote>
  </div>
</section>


        <h1 className="text-3xl font-bold mb-6 border-b pb-2">Professional Experience</h1>

        {/* UTRGV */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700">
            Robert C. Vackar College of Business and Entrepreneurship, UTRGV
          </h2>
          <p className="italic text-gray-600">Edinburg, Texas | Presidential Research Fellowship, Graduate Research Assistant</p>
          <p className="mb-2 text-sm text-gray-500">August 2022 - Present</p>
          
        </section>

        {/* Amazon */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700">
            Amazon.com - AWS Health
          </h2>
          <p className="italic text-gray-600">Seattle, WA | 2X Data Engineering Intern</p>
          <p className="mb-2 text-sm text-gray-500">Summer 2024, 2025</p>
        </section>

        {/* Moja Group */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700">Moja Group Inc.</h2>
          <p className="italic text-gray-600">Accra, Ghana | Data Science and Business Intelligence Analyst</p>
          <p className="mb-2 text-sm text-gray-500">July 2021 - August 2022</p>
        </section>

        {/* AirtelTigo */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700">AirtelTigo Ghana Limited</h2>
          <p className="italic text-gray-600">Accra, Ghana | Business Intelligence and Data Scientist</p>
          <p className="mb-2 text-sm text-gray-500">September 2019 - June 2021</p>
        </section>
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default ExperiencePage;
