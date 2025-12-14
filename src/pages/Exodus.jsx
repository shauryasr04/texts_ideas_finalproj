import { Link } from "react-router-dom";
import { useRef } from "react";

/*
  Main Kashmir Pandit Exodus page with:
  - Information about the crisis
  - Statistics (affected, displaced, who's back, still displaced)
  - Three buttons for different exile types: Physical, Memory, Generational
*/

function Exodus() {
  const exileSectionRef = useRef(null);

  const scrollToExileSection = () => {
    exileSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Museum Style */}
      <section className="pt-24 pb-16 border-b border-[#e5e5e5]">
        <div className="max-w-5xl mx-auto px-8">
          <h1 className="text-5xl md:text-6xl font-semibold text-[#0a0a0a] mb-8 leading-tight tracking-tight">
            The 1990 Kashmiri Pandit Exodus
          </h1>
          <p className="text-xl text-[#4a4a4a] leading-relaxed max-w-3xl font-light">
          </p>
          {/* Button to scroll to exile dimensions */}
          <div className="mt-8">
            <button
              onClick={scrollToExileSection}
              className="btn-primary"
            >
              Explore Dimensions of Exile
            </button>
          </div>
        </div>
      </section>

      {/* Statistics Section - Museum Style */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#0a0a0a] mb-16 text-center tracking-tight">
            The Scale of Displacement
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Affected */}
            <div className="card-elegant p-8 text-center">
              <div className="text-5xl font-semibold text-[#0a0a0a] mb-3 tracking-tight">300,000</div>
              <div className="text-sm font-medium text-[#0a0a0a] mb-4 uppercase tracking-wider">Pandits Displaced</div>
              <p className="text-refined text-xs leading-relaxed">
                Number of Kashmiri Pandits who were forced to flee the Kashmir Valley in 1990
              </p>
            </div>

            {/* Displaced */}
            <div className="card-elegant p-8 text-center">
              <div className="text-5xl font-semibold text-[#0a0a0a] mb-3 tracking-tight">44,684</div>
              <div className="text-sm font-medium text-[#0a0a0a] mb-4 uppercase tracking-wider">Families Displaced</div>
              <p className="text-refined text-xs leading-relaxed">
                Families who left their ancestral homes, primarily in January-February 1990
              </p>
            </div>

            {/* Returned */}
            <div className="card-elegant p-8 text-center">
              <div className="text-5xl font-semibold text-[#0a0a0a] mb-3 tracking-tight">~3,800</div>
              <div className="text-sm font-medium text-[#0a0a0a] mb-4 uppercase tracking-wider">Returned Today</div>
              <p className="text-refined text-xs leading-relaxed">
                Estimated number of Pandits who have returned to the Valley since 1990
              </p>
            </div>

            {/* Still Displaced */}
            <div className="card-elegant p-8 text-center">
              <div className="text-5xl font-semibold text-[#0a0a0a] mb-3 tracking-tight">98.73%</div>
              <div className="text-sm font-medium text-[#0a0a0a] mb-4 uppercase tracking-wider">Still Displaced</div>
              <p className="text-refined text-xs leading-relaxed">
                Percentage of the displaced population who remain outside the Valley today
              </p>
            </div>
          </div>

        {/* Additional Context */}
        <div className="bg-[#fafafa] border-l-4 border-[#0a0a0a] p-10 mb-16">
          <h3 className="text-2xl font-semibold text-[#0a0a0a] mb-8">Key Context</h3>
          <ul className="space-y-6 text-refined">
            <li className="flex items-start">
              <span className="text-[#0a0a0a] mr-4 text-lg font-light">-</span>
              <span>
                <strong className="text-[#0a0a0a]">Primary Destinations:</strong> Most displaced families relocated to Jammu refugee camps, 
                Delhi, and other Indian cities, where many continue to live in temporary settlements. The overwhelming majority, over 98%, remain 
                displaced, demonstrating that the physical exile that began in 1990 continues to define the community's reality today.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[#0a0a0a] mr-4 text-lg font-light">-</span>
              <span>
                <strong className="text-[#0a0a0a]">Timeline:</strong> The mass migration occurred primarily in January-February 1990, 
                following threats, targeted killings, and escalating violence. Most families departed hastily, believing their absence 
                would be brief, yet what began as temporary displacement has become a permanent reality spanning over three decades.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[#0a0a0a] mr-4 text-lg font-light">-</span>
              <span>
                <strong className="text-[#0a0a0a]">Targeting:</strong> Despite representing only 3-5% of the total population, Kashmiri Pandits 
                were specifically targeted, leading to the exodus of 300,000 people. This disproportionate impact on a small minority community 
                highlights the systematic nature of the displacement and the vulnerability of minority populations in conflict zones.
              </span>
            </li>
          </ul>
        </div>
        </div>
      </section>

      {/* Three Dimensions of Exile - Museum Gallery Style */}
      <section ref={exileSectionRef} className="py-20 bg-[#fafafa] border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#0a0a0a] mb-6 tracking-tight">
              Dimensions of Exile
            </h2>
            <p className="text-lg text-[#6a6a6a] max-w-2xl mx-auto">
              The Kashmir Pandit exodus cannot be understood through displacement alone. 
              Explore how exile manifests across physical and mnemonic dimensions, with generational 
              exile emerging as a byproduct of memory exile.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Physical Exile */}
            <Link
              to="/physical-exile"
              className="card-elegant p-0 overflow-hidden group"
            >
              <div className="h-64 bg-gradient-to-br from-[#f8f8f8] to-[#e8e8e8] flex items-center justify-center border-b border-[#e5e5e5] group-hover:bg-[#f0f0f0] transition-colors">
                <svg className="w-16 h-16 text-[#4a4a4a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                  Physical Exile
                </h3>
                <p className="text-refined text-sm leading-relaxed mb-6">
                  The forced displacement from ancestral homeland, examining the circumstances, 
                  routes, and immediate consequences of migration.
                </p>
                <div className="text-sm font-medium text-[#0a0a0a] uppercase tracking-wider">
                  Explore →
                </div>
              </div>
            </Link>

            {/* Memory Exile */}
            <Link
              to="/memory-exile"
              className="card-elegant p-0 overflow-hidden group"
            >
              <div className="h-64 bg-gradient-to-br from-[#f8f8f8] to-[#e8e8e8] flex items-center justify-center border-b border-[#e5e5e5] group-hover:bg-[#f0f0f0] transition-colors">
                <svg className="w-16 h-16 text-[#4a4a4a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                  Memory and Generational Exile
                </h3>
                <p className="text-refined text-sm leading-relaxed mb-6">
                  How memories of homeland are preserved, transmitted, and transformed across 
                  generations, shaping identity and belonging in diaspora.
                </p>
                <div className="text-sm font-medium text-[#0a0a0a] uppercase tracking-wider">
                  Explore →
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-white border-t border-[#e5e5e5]">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-8">
              Explore Further
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <Link
                to="/gallery"
                className="btn-secondary"
              >
                View Gallery
              </Link>
              <Link
                to="/history"
                className="btn-primary"
              >
                Learn History
              </Link>
              <Link
                to="/physical-exile"
                className="btn-secondary"
              >
                Physical Exile
              </Link>
              <Link
                to="/memory-exile"
                className="btn-primary"
              >
                Memory Exile
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Exodus;
