import { Link } from "react-router-dom";
import KashmirMigrationMap from "../components/KashmirMigrationMap";

/*
  Physical Exile page - explores the forced displacement from ancestral homeland,
  examining the circumstances, routes, and immediate consequences of migration.
*/

function PhysicalExile() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 border-b border-[#e5e5e5]">
        <div className="max-w-5xl mx-auto px-8">
          <h1 className="text-5xl md:text-6xl font-semibold text-[#0a0a0a] mb-6 tracking-tight">
            Physical Exile
          </h1>
          <p className="text-xl text-[#4a4a4a] leading-relaxed font-light">
            This section examines the circumstances, and offers an interactive analysis of the routes and destinations of the exodus.
            </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-8 pt-16 pb-20">
        {/* The Exodus */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0a0a0a] mb-8 tracking-tight">The Exodus of 1990</h2>
          
          <div className="space-y-6 mb-10">
            <p className="text-base text-[#4a4a4a] leading-relaxed">
              In early 1990, following escalating violence, targeted killings, and threats, 
              approximately 100,000 Kashmiri Pandit families were forced to flee the Kashmir Valley. 
              This was not a voluntary migration but a forced displacement driven by fear, coercion, 
              and the breakdown of security conditions.
            </p>
            <p className="text-base text-[#4a4a4a] leading-relaxed">
              The exodus occurred primarily in January and February 1990, with families leaving 
              their ancestral homes, properties, and communities with little more than what they 
              could carry. Many left in the middle of the night, abandoning homes that had been in 
              their families for generations.
            </p>
          </div>

          <div className="bg-[#fafafa] border-l-4 border-[#0a0a0a] p-10 mb-10">
            <h3 className="text-2xl font-semibold text-[#0a0a0a] mb-6">Key Characteristics</h3>
            <ul className="space-y-6 text-[#4a4a4a]">
              <li className="flex items-start">
                <span className="text-[#0a0a0a] mr-4 text-lg font-light">—</span>
                <span>
                  <strong className="text-[#0a0a0a]">Forced Nature:</strong> The displacement was driven by threats, violence, 
                  and fear, not voluntary choice. Many families received direct threats or witnessed 
                  targeted killings of community members.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0a0a0a] mr-4 text-lg font-light">—</span>
                <span>
                  <strong className="text-[#0a0a0a]">Rapid Timeline:</strong> The mass migration occurred over a matter of 
                  weeks, with the majority leaving in January-February 1990.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0a0a0a] mr-4 text-lg font-light">—</span>
                <span>
                  <strong className="text-[#0a0a0a]">Scale:</strong> An estimated 350,000 people, representing nearly the 
                  entire Pandit population of the Valley, were displaced.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0a0a0a] mr-4 text-lg font-light">—</span>
                <span>
                  <strong className="text-[#0a0a0a]">Loss of Property:</strong> Families abandoned homes, land, businesses, 
                  and cultural sites, most of which were later occupied, destroyed, or left to decay.
                </span>
              </li>
            </ul>
          </div>

          {/* Button to navigate to map */}
          <div className="mt-10 text-center">
            <button
              onClick={() => {
                const mapSection = document.getElementById('migration-map-section');
                if (mapSection) {
                  mapSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="btn-primary inline-block"
            >
              Explore the Interactive Migration Map
            </button>
          </div>
        </section>

        {/* Routes and Destinations */}
        <section id="migration-map-section" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0a0a0a] mb-8 tracking-tight">Routes and Destinations</h2>
          
          <div className="space-y-6 mb-10">
            <p className="text-base text-[#4a4a4a] leading-relaxed">
              The displaced families primarily traveled south from the Kashmir Valley, using the 
              Jammu-Srinagar highway and other routes to reach safety. Most sought refuge in Jammu, 
              where temporary refugee camps were established, while others continued further to 
              Delhi and other major Indian cities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="card-elegant p-8">
              <h3 className="text-2xl font-semibold text-[#0a0a0a] mb-4">Jammu Refugee Camps</h3>
              <p className="text-[#4a4a4a] leading-relaxed text-sm">
                The majority of displaced families initially settled in refugee camps in Jammu, 
                where they lived in temporary shelters with limited access to basic amenities. 
                Many families continue to live in these camps over three decades later.
              </p>
            </div>

            <div className="card-elegant p-8">
              <h3 className="text-2xl font-semibold text-[#0a0a0a] mb-4">Delhi and Other Cities</h3>
              <p className="text-[#4a4a4a] leading-relaxed text-sm">
                Many families moved to Delhi, Mumbai, and other major cities, where they attempted 
                to rebuild their lives. These urban centers became new centers of Kashmiri Pandit 
                diaspora communities.
              </p>
            </div>
          </div>

          {/* Interactive Migration Map */}
          <div className="mt-12 mb-10">
            <h3 className="text-2xl font-semibold text-[#0a0a0a] mb-6">Migration Routes and Destinations</h3>
            <p className="text-base text-[#4a4a4a] mb-6 leading-relaxed">
              Explore the origins and destinations of the Kashmiri Pandit exodus. The map shows 
              concentration areas in the Kashmir Valley where families left, and the camps, 
              colonies, and cities where they settled.
            </p>
            <KashmirMigrationMap />
          </div>
        </section>

        {/* Immediate Consequences */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0a0a0a] mb-8 tracking-tight">Immediate Consequences</h2>
          
          <div className="space-y-6">
            <p className="text-base text-[#4a4a4a] leading-relaxed">
              The physical displacement had immediate and devastating consequences for individuals, 
              families, and communities. The loss of homes, livelihoods, and social networks created 
              conditions of economic hardship, psychological trauma, and cultural dislocation.
            </p>

            <div className="bg-[#fafafa] p-10 border border-[#e5e5e5]">
              <h3 className="text-2xl font-semibold text-[#0a0a0a] mb-6">Impact Areas</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-[#0a0a0a] mb-3">Economic Loss</h4>
                  <p className="text-[#4a4a4a] text-sm leading-relaxed">
                    Loss of property, businesses, and agricultural land, leading to economic 
                    hardship and dependence on government assistance.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0a0a0a] mb-3">Social Disruption</h4>
                  <p className="text-[#4a4a4a] text-sm leading-relaxed">
                    Breakdown of community networks, separation from extended families, and 
                    loss of social support systems.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0a0a0a] mb-3">Cultural Dislocation</h4>
                  <p className="text-[#4a4a4a] text-sm leading-relaxed">
                    Separation from cultural sites, temples, and traditional practices that 
                    were tied to specific places in Kashmir.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0a0a0a] mb-3">Psychological Trauma</h4>
                  <p className="text-[#4a4a4a] text-sm leading-relaxed">
                    The trauma of forced displacement, loss, and ongoing uncertainty about 
                    the future and possibility of return.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ongoing Displacement */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0a0a0a] mb-8 tracking-tight">Ongoing Displacement</h2>
          
          <div className="space-y-6">
            <p className="text-base text-[#4a4a4a] leading-relaxed">
              Over three decades after the exodus, the vast majority of displaced Kashmiri Pandits 
              remain outside the Kashmir Valley. Only a small fraction, estimated at 3,000-4,000 
              people, have returned, primarily to secure government housing colonies. The physical 
              exile continues, with many second and third-generation Pandits having never set foot 
              in their ancestral homeland.
            </p>
            <p className="text-base text-[#4a4a4a] leading-relaxed">
              With many still being displaced, this physical exile transformed into other forms of exile, such as memory exile and generational exile. View the other dimensions below of exile to learn more.
            </p>
          </div>
        </section>

        {/* Navigation */}
        <section className="mb-12 bg-white border border-[#e5e5e5] p-10">
          <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-8 text-center">
            Explore Other Dimensions
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/memory-exile"
              className="btn-secondary"
            >
              Memory Exile
            </Link>
            <Link
              to="/generational-exile"
              className="btn-primary"
            >
              Generational Exile
            </Link>
            <Link
              to="/exodus"
              className="btn-secondary"
            >
              Back to Exodus Overview
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PhysicalExile;
