import Chatbot from "../Components/Chatbot";

function Home() {
  return (
    <div className="bg-slate-100 min-h-screen">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold mb-4">
            Welcome to Sibel Welfare AI Chatbot
          </h1>

          <p className="text-lg max-w-3xl mx-auto leading-8">
            Get instant answers about Sibel Welfare Organization, our
            services, orphan care, donations, volunteering, blood donation,
            education support, and more.
          </p>

          <button className="mt-8 bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
            Start Chat
          </button>

        </div>
      </section>

      {/* Quick Services */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <h3 className="text-xl font-semibold text-blue-700">
              👶 Orphan Care
            </h3>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <h3 className="text-xl font-semibold text-blue-600">
              ❤️ Blood Donation
            </h3>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <h3 className="text-xl font-semibold text-blue-700">
              🎓 Education
            </h3>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <h3 className="text-xl font-semibold text-blue-600">
              🤝 Volunteer
            </h3>
          </div>

        </div>
      </section>

      {/* Chatbot */}
      <section className="max-w-6xl mx-auto px-6 pb-12">
        <Chatbot />
      </section>

    </div>
  );
}

export default Home;