import { Link } from "react-router-dom";

/*
  THEMES:
  - Theme 3: Power, Law, Violence, and State Control
  - Theme 4: Migration, Forced Movement, and Border-Making
  - Theme 7: Trauma, Loss, and Psychological Displacement

  This page should emphasize that displacement in Kashmir is forced, not voluntary, 
  driven by violence, threats, and state power. It should also highlight the 
  psychological and emotional consequences of forced migration.
*/

function Displacement() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-kashmir-800 mb-6">Exodus & Displacement</h1>
        
        <p className="text-lg text-kashmir-700 mb-12 leading-relaxed">
          TODO: Insert introductory paragraph explaining the scope of displacement in Kashmir, 
          the different groups affected, and the significance of these movements for understanding 
          exile and belonging.
        </p>

        {/* Kashmiri Pandit Exodus */}
        <section id="pandits" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold text-kashmir-800 mb-4">
            1990 Kashmiri Pandit Exodus
          </h2>
          
          <div className="space-y-4 mb-6">
            <p className="text-lg text-kashmir-700 leading-relaxed">
              {/* TODO: Describe the forced displacement of Kashmiri Pandits, emphasizing coercion, threats, and fear, not voluntary migration (Themes 3, 4, 7). */}
              The 1990 exodus of Kashmiri Pandits was not a voluntary migration but a forced displacement driven by threats, violence, and fear. This section should detail the circumstances, scale, and immediate aftermath, emphasizing the coercive nature of the movement and its traumatic impact on communities.
            </p>
            <p className="text-lg text-kashmir-700 leading-relaxed">
              {/* TODO: Reference specific sources and numbers where available. Discuss the impact on Pandit communities and their relationship with Kashmir as homeland (Theme 7). */}
              The social, cultural, and political factors that led to this displacement created lasting trauma and fundamentally altered Pandit communities' relationship with Kashmir as homeland. The psychological and emotional consequences continue across generations.
            </p>
          </div>

          <div className="bg-kashmir-50 p-6 rounded-lg mb-6 border-l-4 border-kashmir-500">
            <h3 className="text-xl font-semibold text-kashmir-800 mb-3">Key Points</h3>
            <ul className="space-y-2 text-kashmir-700">
              <li className="flex items-start">
                <span className="text-saffron-600 mr-3">•</span>
                <span>TODO: Who left? (e.g., "Approximately X Kashmiri Pandit families")</span>
              </li>
              <li className="flex items-start">
                <span className="text-saffron-600 mr-3">•</span>
                <span>TODO: Numbers and scale (e.g., "Estimated X people displaced")</span>
              </li>
              <li className="flex items-start">
                <span className="text-saffron-600 mr-3">•</span>
                <span>TODO: Where they went (e.g., "Primarily to Jammu refugee camps, Delhi, and other Indian cities")</span>
              </li>
              <li className="flex items-start">
                <span className="text-saffron-600 mr-3">•</span>
                <span>TODO: Timeline and duration (e.g., "Mass migration occurred primarily in early 1990")</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Displacement of Kashmiri Muslims */}
        <section id="muslims" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold text-kashmir-800 mb-4">
            Displacement of Kashmiri Muslims & Cross-border Migrants
          </h2>
          
          <div className="space-y-4 mb-6">
            <p className="text-lg text-kashmir-700 leading-relaxed">
              {/* TODO: Explain internal displacement and cross-border movement of Kashmiri Muslims, again framing it as conflict-driven and forced (Themes 3, 4, 7). */}
              The displacement of Kashmiri Muslims—whether internal displacement within India or cross-border movements—must also be understood as conflict-driven and forced, not voluntary. These movements were shaped by violence, border restrictions, and state control over movement and security.
            </p>
            <p className="text-lg text-kashmir-700 leading-relaxed">
              {/* TODO: Discuss the complexity of belonging and identity in these contexts. */}
              While the circumstances of Muslim displacement differ from Pandit experiences, both groups share experiences of forced movement, loss, and the ongoing negotiation of belonging and identity in contexts of conflict and displacement.
            </p>
          </div>

          <div className="bg-kashmir-50 p-6 rounded-lg mb-6 border-l-4 border-lake-500">
            <h3 className="text-xl font-semibold text-kashmir-800 mb-3">Key Points</h3>
            <ul className="space-y-2 text-kashmir-700">
              <li className="flex items-start">
                <span className="text-lake-600 mr-3">•</span>
                <span>TODO: Who was displaced? (e.g., "Kashmiri Muslims affected by conflict and border tensions")</span>
              </li>
              <li className="flex items-start">
                <span className="text-lake-600 mr-3">•</span>
                <span>TODO: Numbers and patterns (e.g., "Internal displacement and cross-border movements")</span>
              </li>
              <li className="flex items-start">
                <span className="text-lake-600 mr-3">•</span>
                <span>TODO: Where they went (e.g., "Pakistan-administered Kashmir, Delhi, other Indian cities")</span>
              </li>
              <li className="flex items-start">
                <span className="text-lake-600 mr-3">•</span>
                <span>TODO: Distinctive factors (e.g., "Different from Pandit exodus in terms of scale, timing, and circumstances")</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Comparative Summary */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-kashmir-800 mb-6">Comparative Summary</h2>
          <p className="text-lg text-kashmir-700 mb-6 leading-relaxed">
            {/* TODO: Compare not only the routes and numbers, but also patterns of loss, fear, and long-term trauma experienced by each group (Theme 7). */}
            The comparison below examines not only migration routes and numbers, but also patterns of loss, fear, and long-term trauma. Understanding these psychological and emotional dimensions is essential to grasping the full impact of forced displacement.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Pandits Card */}
            <div className="bg-white border-2 border-kashmir-300 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-kashmir-800 mb-4">Kashmiri Pandits</h3>
              <div className="space-y-3 text-kashmir-700">
                <div>
                  <span className="font-semibold">Who: </span>
                  <span>TODO: Insert description</span>
                </div>
                <div>
                  <span className="font-semibold">When: </span>
                  <span>TODO: Insert timeline</span>
                </div>
                <div>
                  <span className="font-semibold">Why: </span>
                  <span>TODO: Insert reasons</span>
                </div>
                <div>
                  <span className="font-semibold">Where: </span>
                  <span>TODO: Insert destinations</span>
                </div>
              </div>
            </div>

            {/* Muslims Card */}
            <div className="bg-white border-2 border-lake-300 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-kashmir-800 mb-4">Kashmiri Muslims</h3>
              <div className="space-y-3 text-kashmir-700">
                <div>
                  <span className="font-semibold">Who: </span>
                  <span>TODO: Insert description</span>
                </div>
                <div>
                  <span className="font-semibold">When: </span>
                  <span>TODO: Insert timeline</span>
                </div>
                <div>
                  <span className="font-semibold">Why: </span>
                  <span>TODO: Insert reasons</span>
                </div>
                <div>
                  <span className="font-semibold">Where: </span>
                  <span>TODO: Insert destinations</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/maps"
              className="px-6 py-3 bg-kashmir-600 text-white rounded-lg hover:bg-kashmir-700 transition-colors font-medium text-center shadow-md"
            >
              See these movements on the map
            </Link>
            <Link
              to="/voices"
              className="px-6 py-3 bg-saffron-500 text-white rounded-lg hover:bg-saffron-600 transition-colors font-medium text-center shadow-md"
            >
              Read individual stories
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Displacement;

