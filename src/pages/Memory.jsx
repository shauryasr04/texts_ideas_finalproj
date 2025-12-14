/*
  THEMES:
  - Theme 1: Exile as a Human Condition (ongoing, not just a moment)
  - Theme 2: Home, Homeland, and Belonging
  - Theme 5: Memory, Narrative, and Storytelling
  - Theme 6: Identity Formation in Diaspora
  - Theme 7: Trauma, Loss, and Psychological Displacement

  This page should emphasize that exile continues long after people leave their homes, 
  through memory, identity, and storytelling. It should explore how people reimagine 
  home and belonging in diaspora.
*/

function Memory() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-kashmir-800 mb-8">Memory & Identity</h1>

        {/* Living in Exile: Memory and Identity */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-kashmir-800 mb-4">Living in Exile: Memory and Identity</h2>
          <p className="text-lg text-kashmir-700 mb-6 leading-relaxed">
            {/* TODO: Introduce exile as something that continues long after people leave their homes, through memory and identity (Themes 1, 5, 6). */}
            Exile is not a single moment of departure but an ongoing condition that continues through memory, identity, and storytelling. Long after people leave their homes, they carry and reshape memories of homeland, negotiating belonging in new places while maintaining connections to the past.
          </p>
        </section>

        {/* Intergenerational Memory */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-kashmir-800 mb-6">Intergenerational Memory</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Pandits Card */}
            <div className="bg-white border border-kashmir-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-kashmir-800 mb-3">Kashmiri Pandits</h3>
              <p className="text-kashmir-700 leading-relaxed">
                {/* TODO: Summarize how this community remembers displacement across generations (Theme 5). */}
                {/* TODO: Highlight how identity is passed on or transformed through stories and family memory (Theme 6). */}
                First and second-generation Pandits remember and transmit memories of Kashmir through stories, photographs, and cultural practices. These memories shape identity across generations, maintaining connection to homeland while adapting to new contexts.
              </p>
            </div>

            {/* Muslims Card */}
            <div className="bg-white border border-kashmir-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-kashmir-800 mb-3">Kashmiri Muslims</h3>
              <p className="text-kashmir-700 leading-relaxed">
                {/* TODO: Summarize how this community remembers displacement across generations (Theme 5). */}
                {/* TODO: Highlight how identity is passed on or transformed through stories and family memory (Theme 6). */}
                Memory transmission among Kashmiri Muslims reflects both distinctive and overlapping experiences with Pandit communities. Identity is constructed across generations through narratives that negotiate belonging in contexts of conflict and displacement.
              </p>
            </div>

            {/* Sindhi Migrants Card */}
            <div className="bg-white border border-kashmir-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-kashmir-800 mb-3">Sindhi Migrants</h3>
              <p className="text-kashmir-700 leading-relaxed">
                {/* TODO: Summarize how this community remembers displacement across generations (Theme 5). */}
                {/* TODO: Highlight how identity is passed on or transformed through stories and family memory (Theme 6). */}
                Sindhi migrants remember and pass down memories of pre-Partition Sindh, creating a relationship between memory, identity, and belonging that spans decades. These memories connect Partition-era displacement to ongoing questions of home and belonging.
              </p>
            </div>
          </div>
        </section>

        {/* Homeland & Belonging */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-kashmir-800 mb-6">Homeland & Belonging</h2>
          
          <div className="space-y-4 mb-6">
            <p className="text-lg text-kashmir-700 leading-relaxed">
              {/* TODO: Explain how people reimagine 'home' after exile, and how belonging is negotiated in new places (Themes 2, 6, 7). */}
              For displaced communities, homeland functions as both a physical place and an imagined space. This relationship changes across generations, as first-generation exiles remember the physical place while second and third generations inherit an imagined homeland constructed through stories and memory.
            </p>
            <p className="text-lg text-kashmir-700 leading-relaxed">
              Belonging is negotiated in new places while maintaining connection to the homeland. This negotiation involves tension between integration and preservation of identity, between remembering and moving forward, between the homeland left behind and the new place that may never fully feel like home.
            </p>
          </div>

          {/* Quote Block */}
          <div className="bg-kashmir-50 border-l-4 border-kashmir-600 p-6 my-6">
            <p className="text-lg italic text-kashmir-700 leading-relaxed">
              "TODO: Insert a meaningful quote about homeland, exile, or belonging from one 
              of your sources or testimonies."
            </p>
            <p className="text-kashmir-600 mt-3">- TODO: Source attribution</p>
          </div>
        </section>

        {/* Theoretical Lens */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-kashmir-800 mb-6">Theoretical Lens</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-kashmir-700 mb-3">
                Ovid and the Poetics of Exile
              </h3>
              <p className="text-lg text-kashmir-700 leading-relaxed">
                {/* TODO: Connect Kashmir to course texts about exile and migration, using them as lenses to interpret memory and identity here (Themes 1, 5, 6). */}
                Ovid's Tristia provides frameworks for understanding exile, loss, and the relationship between the exiled and the homeland. The classical text illuminates how exile is experienced as an ongoing condition, not just a moment of departure, connecting to contemporary Kashmiri displacement through themes of memory, longing, and the impossibility of return.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-kashmir-700 mb-3">
                Exit West and Migrant Identities
              </h3>
              <p className="text-lg text-kashmir-700 leading-relaxed">
                {/* TODO: Connect to course texts about exile and migration (Themes 1, 5, 6). */}
                Contemporary texts like Exit West explore how migrant identities are formed and transformed through displacement. These narratives help illuminate how Kashmiri communities negotiate identity in diaspora, maintaining connections to homeland while adapting to new contexts.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-kashmir-700 mb-3">
                Antigone and Political Exclusion
              </h3>
              <p className="text-lg text-kashmir-700 leading-relaxed">
                {/* TODO: Connect to course texts about exile and migration (Themes 1, 5, 6). */}
                Antigone's themes of political exclusion, burial rights, and resistance relate to displacement narratives in Kashmir. The play illuminates the role of political agency and voice in contexts of exile, showing how marginalized communities assert their right to remember and belong.
              </p>
            </div>
          </div>
        </section>

        {/* Overlapping Narratives */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-kashmir-800 mb-6">Overlapping Narratives</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {/* Similarities */}
            <div className="bg-kashmir-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-kashmir-800 mb-4">Shared Experiences</h3>
              <ul className="space-y-2 text-kashmir-700">
                <li className="flex items-start">
                  <span className="text-saffron-600 mr-2">•</span>
                  <span>TODO: Loss of homeland and physical displacement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-saffron-600 mr-2">•</span>
                  <span>TODO: Intergenerational transmission of memory</span>
                </li>
                <li className="flex items-start">
                  <span className="text-saffron-600 mr-2">•</span>
                  <span>TODO: Negotiation of identity in new contexts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-saffron-600 mr-2">•</span>
                  <span>TODO: Tension between belonging and exclusion</span>
                </li>
              </ul>
            </div>

            {/* Differences */}
            <div className="bg-kashmir-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-kashmir-800 mb-4">Distinctive Elements</h3>
              <ul className="space-y-2 text-kashmir-700">
                <li className="flex items-start">
                  <span className="text-saffron-600 mr-2">•</span>
                  <span>TODO: Different historical contexts and timelines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-saffron-600 mr-2">•</span>
                  <span>TODO: Varying degrees of political recognition</span>
                </li>
                <li className="flex items-start">
                  <span className="text-saffron-600 mr-2">•</span>
                  <span>TODO: Different relationships to the Indian state</span>
                </li>
                <li className="flex items-start">
                  <span className="text-saffron-600 mr-2">•</span>
                  <span>TODO: Distinctive cultural and religious practices</span>
                </li>
              </ul>
            </div>

            {/* Intersections */}
            <div className="bg-kashmir-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-kashmir-800 mb-4">Points of Intersection</h3>
              <ul className="space-y-2 text-kashmir-700">
                <li className="flex items-start">
                  <span className="text-saffron-600 mr-2">•</span>
                  <span>TODO: Shared geography and historical events</span>
                </li>
                <li className="flex items-start">
                  <span className="text-saffron-600 mr-2">•</span>
                  <span>TODO: Overlapping experiences of conflict</span>
                </li>
                <li className="flex items-start">
                  <span className="text-saffron-600 mr-2">•</span>
                  <span>TODO: Common themes of memory and loss</span>
                </li>
                <li className="flex items-start">
                  <span className="text-saffron-600 mr-2">•</span>
                  <span>TODO: Parallel struggles for recognition and voice</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Memory;

