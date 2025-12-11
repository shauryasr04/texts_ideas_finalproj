import { backgroundEvents } from "../data/backgroundEvents";

/*
  THEMES:
  - Theme 3: Power, Law, Violence, and State Control
  - Theme 4: Migration, Forced Movement, and Border-Making
  - Theme 8: Colonialism, Postcolonialism, and Geopolitics

  This page should establish the historical and political context that shapes displacement, 
  emphasizing how borders, state power, and colonial/postcolonial dynamics create conditions 
  for forced migration.
*/

function Background() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-kashmir-800 mb-8">Conflict Background</h1>

        {/* Where is Kashmir? */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-kashmir-800 mb-4">Where is Kashmir?</h2>
          <p className="text-lg text-kashmir-700 mb-6 leading-relaxed">
            {/* TODO: Explain how Kashmir's geography and borders are tied to colonial and postcolonial history (Theme 8). */}
            Kashmir's geographical position between India and Pakistan, and its status as a disputed territory, cannot be understood without reference to colonial partition and postcolonial state-making. The region's borders were drawn through conflict and negotiation, shaping who belongs where and under what conditions.
          </p>
          
          {/* Map Placeholder */}
          <div className="bg-kashmir-100 border-2 border-dashed border-kashmir-300 rounded-lg p-12 text-center mb-6">
            <p className="text-kashmir-700 text-lg">Map goes here</p>
            <p className="text-kashmir-600 text-sm mt-2">TODO: Add map component or image of Kashmir region</p>
          </div>
        </section>

        {/* Borders, Wars, and the Making of a Conflict */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-kashmir-800 mb-4">
            Borders, Wars, and the Making of a Conflict
          </h2>
          <p className="text-lg text-kashmir-700 mb-6 leading-relaxed">
            {/* TODO: Describe how wars, partition, and border decisions shape who belongs where (Themes 3, 4, 8). */}
            The timeline below traces how wars, partition, and border decisions have shaped belonging and displacement in Kashmir. Each event represents moments when state power, violence, and forced movement intersected to determine who could remain in place and who had to leave.
          </p>
          
          <h3 className="text-2xl font-semibold text-kashmir-700 mb-4">
            Timeline: From Partition to Late 20th Century
          </h3>
          <div className="space-y-6">
            {backgroundEvents.map((event, index) => (
              <div key={index} className="border-l-4 border-kashmir-600 pl-6 pb-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-2xl font-bold text-kashmir-800">{event.year}</span>
                  <h3 className="text-xl font-semibold text-kashmir-700">{event.title}</h3>
                </div>
                <p className="text-kashmir-700 leading-relaxed">{event.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Power and the State */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-kashmir-800 mb-6">Power and the State</h2>
          <p className="text-lg text-kashmir-700 mb-6 leading-relaxed">
            {/* TODO: Explain how state power, law, and militarization regulate movement and security in Kashmir (Theme 3). */}
            State power, law, and militarization have fundamentally shaped movement and security in Kashmir. The following sections explore how these forces intersect with historical, political, and social factors to create conditions for displacement.
          </p>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-kashmir-700 mb-3">
                Historical Context
              </h3>
              <p className="text-lg text-kashmir-700 leading-relaxed">
                {/* TODO: Reference works by Bose, Bhat, and other scholars. Discuss the role of Partition, princely states, and early post-independence politics (Theme 8). */}
                The historical roots of the conflict trace back to Partition, princely states, and early post-independence politics. Colonial legacies and postcolonial state-making created the conditions for ongoing contestation over territory and belonging.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-kashmir-700 mb-3">
                Political Dimensions
              </h3>
              <p className="text-lg text-kashmir-700 leading-relaxed">
                {/* TODO: Discuss autonomy movements, central government policies, and regional dynamics (Theme 3). */}
                Political factors including autonomy movements, central government policies, and regional dynamics have shaped how state power is exercised and contested in Kashmir, directly affecting who can move freely and who is forced to leave.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-kashmir-700 mb-3">
                Social and Cultural Factors
              </h3>
              <p className="text-lg text-kashmir-700 leading-relaxed">
                {/* TODO: Discuss religious diversity, community relations, and how these factors intersected with political developments. */}
                Social and cultural factors, including religious diversity and community relations, have intersected with political developments to shape patterns of belonging and displacement. These dynamics cannot be separated from questions of state power and border-making.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Background;

