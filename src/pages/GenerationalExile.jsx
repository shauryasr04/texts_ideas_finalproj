import { Link } from "react-router-dom";

/*
  Generational Exile page - explores the ongoing impact on second and third generations,
  who inherit an imagined homeland through stories and memory.
*/

function GenerationalExile() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 border-b border-[#e5e5e5]">
        <div className="max-w-5xl mx-auto px-8">
          <h1 className="text-5xl md:text-6xl font-semibold text-[#0a0a0a] mb-6 tracking-tight">
            Generational Exile
          </h1>
          <p className="text-xl text-[#4a4a4a] leading-relaxed font-light">
            Exile does not end with the first generation. For second and third-generation 
            Kashmiri Pandits, exile is an inherited condition, a relationship to a homeland 
            that exists primarily through stories, memory, and imagination rather than direct 
            experience.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-8 pt-16 pb-20">
        {/* Inherited Exile */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0a0a0a] mb-8 tracking-tight">Inherited Exile</h2>
          
          <div className="space-y-6 mb-10">
            <p className="text-base text-[#4a4a4a] leading-relaxed">
              Over three decades after the exodus, a significant portion of the Kashmiri Pandit 
              community consists of second and third-generation individuals who were born and 
              raised in exile. For these generations, Kashmir exists not as a physical place 
              they have known, but as an imagined homeland constructed through family stories, 
              photographs, and cultural practices.
            </p>
            <p className="text-base text-[#4a4a4a] leading-relaxed">
              This generational exile creates a unique form of displacement, one in which 
              individuals are exiled from a place they have never known, yet which remains 
              central to their identity and sense of belonging.
            </p>
          </div>

          <div className="bg-[#fafafa] border-l-4 border-[#0a0a0a] p-10 mb-10">
            <h3 className="text-2xl font-semibold text-[#0a0a0a] mb-6">Key Characteristics</h3>
            <ul className="space-y-6 text-[#4a4a4a]">
              <li className="flex items-start">
                <span className="text-[#0a0a0a] mr-4 text-lg font-light">-</span>
                <span>
                  <strong className="text-[#0a0a0a]">Imagined Homeland:</strong> Kashmir exists as a place of imagination 
                  and memory rather than direct experience, creating a complex relationship 
                  between identity and place.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0a0a0a] mr-4 text-lg font-light">-</span>
                <span>
                  <strong className="text-[#0a0a0a]">Inherited Trauma:</strong> Second and third generations inherit not 
                  only stories but also the trauma and loss experienced by their parents and 
                  grandparents, even without direct experience of displacement.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0a0a0a] mr-4 text-lg font-light">-</span>
                <span>
                  <strong className="text-[#0a0a0a]">Cultural Disconnection:</strong> Growing up outside Kashmir means 
                  limited or no connection to the physical place, its landscapes, seasons, 
                  and daily rhythms that shaped previous generations.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0a0a0a] mr-4 text-lg font-light">-</span>
                <span>
                  <strong className="text-[#0a0a0a]">Identity Negotiation:</strong> Navigating identity between the 
                  Kashmir of stories and the places where they actually live, creating 
                  complex questions of belonging and home.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Second Generation Experiences */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0a0a0a] mb-8 tracking-tight">Second Generation Experiences</h2>
          
          <div className="space-y-6 mb-10">
            <p className="text-base text-[#4a4a4a] leading-relaxed">
              The second generation, those born shortly before or after the exodus, or in the 
              early years of displacement, occupy a unique position. Many have fragmented memories 
              of Kashmir from early childhood, while others know it only through stories. They 
              bridge the gap between the first generation's direct experience and the third 
              generation's complete reliance on inherited narratives. As successive generations of 
              Pandits have been displaced, their understanding of home has fundamentally shifted. 
              The initial physical exile, combined with the ongoing exile experienced through memory, 
              creates a compound condition of generational displacement.
            </p>
            <p className="text-base text-[#4a4a4a] leading-relaxed">
              Younger Pandits continue to identify Kashmir as home, yet their knowledge of it comes 
              entirely through stories, photographs, rituals, and the palpable absence of the place 
              itself. They navigate the tension between their current locations and the past they've 
              inherited. Parents transmit stories about the tragedy to their children, which can provoke 
              difficult emotional responses. Documented accounts include children asking their parents 
              why such suffering happened to them, expressing the pain of inherited trauma. Despite 
              these questions, children must come to terms with their status as victims of exile, 
              creating a cycle that perpetuates across generations.
            </p>
          </div>

          <div className="card-elegant p-8 mb-10">
            <h3 className="text-2xl font-semibold text-[#0a0a0a] mb-6">Common Experiences</h3>
            <div className="space-y-6 text-[#4a4a4a]">
              <div>
                <h4 className="font-semibold text-[#0a0a0a] mb-3">Fragmented Memories</h4>
                <p className="text-sm leading-relaxed">
                  Partial or fragmented memories of Kashmir from early childhood, creating 
                  a sense of connection that is both real and incomplete.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-[#0a0a0a] mb-3">Stories as Reality</h4>
                <p className="text-sm leading-relaxed">
                  Family stories about Kashmir become a primary source of knowledge about 
                  homeland, shaping identity and belonging.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-[#0a0a0a] mb-3">Cultural Practices</h4>
                <p className="text-sm leading-relaxed">
                  Participation in Kashmiri cultural practices and traditions that maintain 
                  connection to homeland while existing outside its physical context.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-[#0a0a0a] mb-3">Questions of Return</h4>
                <p className="text-sm leading-relaxed">
                  Complex questions about whether Kashmir is "home" and what return might 
                  mean for those who have never truly lived there.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Third Generation and Beyond */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0a0a0a] mb-8 tracking-tight">Third Generation and Beyond</h2>
          
          <div className="space-y-6 mb-10">
            <p className="text-base text-[#4a4a4a] leading-relaxed">
              The third generation, those born in the 2000s and later, represents a new phase 
              of generational exile. For these individuals, Kashmir exists almost entirely 
              as an imagined place, known only through stories, photographs, and cultural 
              practices passed down through generations. This understanding fundamentally shapes their 
              identity, as they come to see themselves as those who have been wronged by the state 
              and as victims of historical injustice.
            </p>
            <p className="text-base text-[#4a4a4a] leading-relaxed">
              While older generations have often accepted their circumstances, some younger 
              individuals channel feelings of injustice and humiliation into anger, leading to 
              radicalization and resistance against the state. Though not universal, this represents 
              a tragic consequence of generational trauma and inherited displacement. This dynamic 
              finds parallels in <em>The Displaced</em> short stories, particularly Porochista Khakpour's 
              "13 Stories of an Immigrant." Khakpour explores her identity as an Iranian immigrant 
              and the sense of insecurity inherited from her parents, who maintained that belonging 
              wasn't necessary since their displacement was temporary. Her generational exile created 
              confusion about choosing between America and Iran, mirroring the struggles many young 
              Pandits face in determining where home truly lies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="card-elegant p-8">
              <h3 className="text-2xl font-semibold text-[#0a0a0a] mb-6">Challenges</h3>
              <ul className="space-y-3 text-[#4a4a4a] text-sm">
                <li>• Disconnection from physical place</li>
                <li>• Inherited trauma without direct experience</li>
                <li>• Questions of authentic belonging</li>
                <li>• Tension between stories and reality</li>
                <li>• Negotiating multiple identities</li>
              </ul>
            </div>

            <div className="card-elegant p-8">
              <h3 className="text-2xl font-semibold text-[#0a0a0a] mb-6">Opportunities</h3>
              <ul className="space-y-3 text-[#4a4a4a] text-sm">
                <li>• New forms of cultural expression</li>
                <li>• Creative reimagining of identity</li>
                <li>• Building bridges across communities</li>
                <li>• Digital connections to homeland</li>
                <li>• Reclaiming and reshaping narratives</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Identity Formation */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0a0a0a] mb-8 tracking-tight">Identity Formation in Exile</h2>
          
          <div className="space-y-6">
            <p className="text-base text-[#4a4a4a] leading-relaxed">
              For second and third-generation Pandits, identity formation occurs in the space 
              between the Kashmir of stories and the places where they actually live. This 
              creates complex questions about belonging, home, and authenticity.
            </p>
            <p className="text-base text-[#4a4a4a] leading-relaxed">
              Many navigate multiple identities: Kashmiri, Indian, and the specific identities 
              of the places where they live. This negotiation is ongoing and dynamic, shaped 
              by personal experiences, family stories, cultural practices, and broader social 
              and political contexts.
            </p>
          </div>

          <div className="bg-[#fafafa] p-10 border border-[#e5e5e5] mt-10">
            <h3 className="text-2xl font-semibold text-[#0a0a0a] mb-6">Dimensions of Identity</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-[#0a0a0a] mb-3">Cultural Identity</h4>
                <p className="text-[#4a4a4a] text-sm leading-relaxed">
                  Connection to Kashmiri language, traditions, festivals, and cultural 
                  practices, often maintained and adapted in diaspora.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-[#0a0a0a] mb-3">Spatial Identity</h4>
                <p className="text-[#4a4a4a] text-sm leading-relaxed">
                  Relationship to Kashmir as a physical and imagined place, and to the 
                  places where individuals actually live and grow up.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-[#0a0a0a] mb-3">Political Identity</h4>
                <p className="text-[#4a4a4a] text-sm leading-relaxed">
                  Understanding of the political context of displacement and ongoing 
                  questions of recognition, justice, and belonging.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-[#0a0a0a] mb-3">Generational Identity</h4>
                <p className="text-[#4a4a4a] text-sm leading-relaxed">
                  Awareness of one's position in the generational continuum of exile, 
                  and how this shapes relationship to homeland and identity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Future of Exile */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0a0a0a] mb-8 tracking-tight">The Future of Exile</h2>
          
          <div className="space-y-6">
            <p className="text-base text-[#4a4a4a] leading-relaxed">
              As the Kashmiri Pandit community continues to exist primarily in diaspora, 
              questions about the future of exile become increasingly important. How will 
              fourth and fifth generations relate to Kashmir? What forms will identity and 
              belonging take as the physical connection to homeland becomes increasingly distant?
            </p>
            <p className="text-base text-[#4a4a4a] leading-relaxed">
              These questions are not merely theoretical but are actively being negotiated 
              by communities today. The generational exile continues, evolving in new forms 
              while maintaining connections to the past through memory, story, and cultural 
              practice.
            </p>
          </div>
        </section>

        {/* Reference Video */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0a0a0a] mb-8 tracking-tight">Reference Video</h2>
          
          <div className="bg-[#fafafa] border border-[#e5e5e5] overflow-hidden">
            <div className="w-full aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/oQkGoDSPkgg"
                title="Generational Exile Reference Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="mb-12 bg-white border border-[#e5e5e5] p-10">
          <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-8 text-center">
            Explore Other Dimensions
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

export default GenerationalExile;
