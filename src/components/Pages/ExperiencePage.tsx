import Header from "../Header";
import Footer from "../Footer";

const ExperiencePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <Header />
      <main className="flex-1 px-6 py-10 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 border-b pb-2">Professional Experience</h1>

        {/* UTRGV */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700">
            Robert C. Vackar College of Business and Entrepreneurship, UTRGV
          </h2>
          <p className="italic text-gray-600">Edinburg, Texas | Presidential Research Fellowship, Graduate Research Assistant</p>
          <p className="mb-2 text-sm text-gray-500">August 2022 - Present</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Building NeuroPulse, an AI-CDSS for early detection and progression of neurological diseases using ML (SVM, RF, LR, XGBoost) and DL (ANN, ELM, ResNet, VGG16, AlexNet) methods.</li>
            <li>Designing personalized treatment plans for Alzheimer's Disease using large longitudinal datasets.</li>
            <li>Advisor: Dr. Xuan Wang</li>
          </ul>
        </section>

        {/* Amazon */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700">
            Amazon.com - AWS Health
          </h2>
          <p className="italic text-gray-600">Phoenix, Arizona | 2X Data Engineering Intern</p>
          <p className="mb-2 text-sm text-gray-500">Summers 2024, 2025</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Designed automated frameworks for data quality checks pre-ingestion using AWS Glue, DynamoDB, Spark SQL, Scala, and Python.</li>
            <li>Optimized Spark SQL queries for non-relational databases to reduce latency and improve ETL performance.</li>
            <li>Utilized AWS tools for data modeling, warehousing, and pipeline development.</li>
          </ul>
        </section>

        {/* Moja Group */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700">Moja Group Inc.</h2>
          <p className="italic text-gray-600">Accra, Ghana | Data and Business Intelligence Analyst</p>
          <p className="mb-2 text-sm text-gray-500">July 2021 - August 2022</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Developed BI dashboards in Tableau, Power BI, and Grafana to support sales, finance, and marketing teams.</li>
            <li>Achieved 98% predictive accuracy through optimized model parameters in game revenue prediction, resulting in a 15% uplift in Q4 revenue.</li>
          </ul>
        </section>

        {/* AirtelTigo */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700">AirtelTigo Ghana Limited</h2>
          <p className="italic text-gray-600">Accra, Ghana | Business Intelligence Analyst</p>
          <p className="mb-2 text-sm text-gray-500">September 2019 - June 2021</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Automated subscriber inactivity and CVM campaigns, improving churn rate by 20% and boosting active user metrics.</li>
            <li>Provided insights that influenced product decisions, reducing subscriber disconnection by 53K monthly and increasing revenue by 2.5% MoM.</li>
            <li>Enhanced OLAP performance through indexing, partitioning, and schema design, reducing report processing time by 50%.</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ExperiencePage;
