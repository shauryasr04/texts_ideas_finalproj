import { Link } from "react-router-dom";

/*
  THEMES:
  - Theme 1: Exile as a Human Condition
  - Theme 2: Home, Homeland, and Belonging
  - Theme 10: Transnationalism & Global Parallels

  This page should introduce exile as both a physical and existential condition, 
  frame the whole project, and connect Kashmir to global patterns of displacement.
*/

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-kashmir-50 via-lake-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-kashmir-800 mb-6">
            Exile and Migration in Kashmir
          </h1>
          <p className="text-xl text-kashmir-700 mb-8 leading-relaxed">
            {/* TODO: Briefly introduce exile as both a physical displacement and a broader human condition (Theme 1). */}
            Exile is more than physical migration. It is a fundamental human condition that shapes identity, memory, and belonging. This digital exhibit explores the complex narratives of displacement, memory, and identity among Kashmiri Pandits, Kashmiri Muslims, and Sindhi migrants, examining how exile shapes belonging across generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/background"
              className="px-6 py-3 bg-kashmir-600 text-white rounded-lg hover:bg-kashmir-700 transition-colors font-medium shadow-md"
            >
              Start with the Conflict
            </Link>
            <Link
              to="/maps"
              className="px-6 py-3 bg-saffron-500 text-white rounded-lg hover:bg-saffron-600 transition-colors font-medium shadow-md"
            >
              Explore Maps
            </Link>
          </div>
        </div>
      </section>

      {/* Why Exile & Belonging? */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-kashmir-800 mb-6">Why Exile & Belonging?</h2>
          <p className="text-lg text-kashmir-700 mb-6 leading-relaxed">
            {/* TODO: Connect Kashmir to global examples of displacement discussed in the course (Theme 10). */}
            Kashmir represents one case in a global pattern of displacement, exile, and contested belonging. From Partition-era migrations to contemporary border conflicts, the region's history reflects broader questions about home, identity, and the human experience of forced movement.
          </p>
        </div>
      </section>

      {/* Research Questions */}
      <section className="py-12 bg-kashmir-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-kashmir-800 mb-6">Research Questions</h2>
          <ul className="space-y-4 text-lg text-kashmir-700">
            <li className="flex items-start">
              <span className="text-saffron-600 mr-3 text-xl">•</span>
              <span>
                {/* TODO: Replace these placeholder questions with my final research questions focusing on exile, home, and memory (Themes 1, 2, 5). */}
                How does exile shape identity and memory across generations in displaced Kashmiri communities?
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-saffron-600 mr-3 text-xl">•</span>
              <span>
                What is the relationship between displacement narratives and political belonging in contexts of conflict?
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-saffron-600 mr-3 text-xl">•</span>
              <span>
                How do classical texts about exile (Ovid, Antigone) illuminate contemporary displacement experiences in Kashmir?
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Overview Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-kashmir-800 mb-8">Explore Key Themes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              to="/displacement#pandits"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2 border-kashmir-200 hover:border-kashmir-400"
            >
              <h3 className="text-xl font-bold text-kashmir-800 mb-3">
                1990 Kashmiri Pandit Exodus
              </h3>
              <p className="text-kashmir-600">
                TODO: Brief description of the Pandit exodus and its significance.
              </p>
            </Link>

            <Link
              to="/displacement#muslims"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2 border-kashmir-200 hover:border-kashmir-400"
            >
              <h3 className="text-xl font-bold text-kashmir-800 mb-3">
                Displacement of Kashmiri Muslims
              </h3>
              <p className="text-kashmir-600">
                TODO: Brief description of Muslim displacement narratives.
              </p>
            </Link>

            <Link
              to="/memory"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2 border-kashmir-200 hover:border-kashmir-400"
            >
              <h3 className="text-xl font-bold text-kashmir-800 mb-3">
                Memory & Homeland
              </h3>
              <p className="text-kashmir-600">
                TODO: Brief description of how memory shapes identity and belonging.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

