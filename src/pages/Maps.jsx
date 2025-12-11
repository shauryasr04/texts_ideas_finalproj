import { migrations } from "../data/migrations";

/*
  THEMES:
  - Theme 4: Migration, Forced Movement, and Border-Making
  - Theme 10: Transnationalism & Global Parallels

  This page should emphasize that each migration represents forced or constrained movement 
  shaped by conflict and borders. It should also connect local displacement to global 
  diaspora patterns.
*/

function Maps() {
  // Group migrations by year
  const migrationsByYear = migrations.reduce((acc, migration) => {
    if (!acc[migration.year]) {
      acc[migration.year] = [];
    }
    acc[migration.year].push(migration);
    return acc;
  }, {});

  const sortedYears = Object.keys(migrationsByYear).sort((a, b) => Number(a) - Number(b));

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-kashmir-800 mb-8">Maps & Timelines</h1>

        <p className="text-lg text-kashmir-700 mb-8 leading-relaxed">
          {/* TODO: Explain that each line and arrow on this page represents forced or constrained movement shaped by conflict and borders (Theme 4). */}
          Each migration route, timeline entry, and arrow on this page represents forced or constrained movement shaped by conflict and borders. These are not voluntary journeys but displacements driven by violence, threats, and state control over movement and belonging.
        </p>

        {/* Timeline Summary */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-kashmir-800 mb-6">Timeline Summary</h2>
          
          <div className="space-y-8">
            {sortedYears.map((year) => (
              <div key={year} className="border-l-4 border-kashmir-600 pl-6">
                <h3 className="text-2xl font-bold text-kashmir-800 mb-4">{year}</h3>
                <div className="space-y-4">
                  {migrationsByYear[year].map((migration) => (
                    <div key={migration.id} className="bg-kashmir-50 p-4 rounded-lg">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="font-semibold text-kashmir-800">{migration.group}</span>
                        <span className="text-kashmir-600">•</span>
                        <span className="text-kashmir-700">{migration.from}</span>
                        <span className="text-kashmir-600">→</span>
                        <span className="text-kashmir-700">{migration.to.join(", ")}</span>
                      </div>
                      <p className="text-kashmir-700">{migration.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Migration Cards / Map Placeholder */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-kashmir-800 mb-6">Migration Movements</h2>
          
          {/* Map Placeholder */}
          <div className="bg-kashmir-100 border-2 border-dashed border-kashmir-300 rounded-lg p-16 text-center mb-8">
            <p className="text-kashmir-600 text-xl mb-2">Map Placeholder</p>
            <p className="text-kashmir-500 text-sm">
              TODO: Add a real map or visualization later. This could include:
            </p>
            <ul className="text-kashmir-500 text-sm mt-2 text-left max-w-md mx-auto">
              <li>• Interactive map showing migration routes</li>
              <li>• Geographic visualization of displacement patterns</li>
              <li>• Timeline overlay on map</li>
              <li>• Population flow diagrams</li>
            </ul>
          </div>

          {/* Migration Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {migrations.map((migration) => (
              <div
                key={migration.id}
                className="bg-white border border-kashmir-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-kashmir-800">{migration.group}</h3>
                  <span className="text-sm font-semibold text-kashmir-600 bg-kashmir-100 px-3 py-1 rounded">
                    {migration.year}
                  </span>
                </div>
                
                <div className="space-y-2 text-kashmir-700 mb-3">
                  <div>
                    <span className="font-medium">From: </span>
                    <span>{migration.from}</span>
                  </div>
                  <div>
                    <span className="font-medium">To: </span>
                    <span>{migration.to.join(", ")}</span>
                  </div>
                </div>
                
                <p className="text-kashmir-600 text-sm leading-relaxed">{migration.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* From Local Conflict to Global Diaspora */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-kashmir-800 mb-6">From Local Conflict to Global Diaspora</h2>
          <p className="text-lg text-kashmir-700 leading-relaxed">
            {/* TODO: Indicate how some migration paths extend beyond the region, connecting to a wider global diaspora (Theme 10). */}
            Some migration paths extend far beyond the immediate region, connecting Kashmir to a wider global diaspora. These transnational connections link local displacement to global patterns of exile, migration, and belonging, showing how borders and conflicts create diasporic communities that span continents.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Maps;

