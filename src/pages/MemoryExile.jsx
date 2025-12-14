import { Link } from "react-router-dom";
import { artworks } from "../data/artworks";
import FragmentedMemoryImage from "../images/FragmentedMemory.png";
import StreetShopImage from "../images/StreetShop.png";
import DreamingAnimalImage from "../images/DreamingAnimal.png";
import StrugglingSmileImage from "../images/StrugglingSmile.png";

/*
  Memory Exile page - explores how memories of homeland are preserved, transmitted,
  and transformed across generations, shaping identity and belonging in diaspora.
  This page combines Memory Exile and Generational Exile, showing how generational
  exile emerges as a byproduct of memory exile.
*/

function MemoryExile() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 border-b border-[#e5e5e5]">
        <div className="max-w-5xl mx-auto px-8">
          <h1 className="text-5xl md:text-6xl font-semibold text-[#0a0a0a] mb-6 tracking-tight">
            Memory and Generational Exile
          </h1>
          <p className="text-xl text-[#4a4a4a] leading-relaxed font-light">
            Exile extends far beyond physical displacement. For Kashmiri Pandits, the loss of 
            homeland is also a mnemonic exile, a condition in which memories of Kashmir are 
            preserved, transmitted, and transformed across generations, shaping identity and 
            belonging in diaspora. As these memories are passed down, they create generational exile, a 
            byproduct where second and third generations inherit an imagined homeland through stories 
            and memory rather than direct experience.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-8 pt-16 pb-20">
        {/* Memory as Exile */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0a0a0a] mb-8 tracking-tight">Memory and Generational Exile</h2>
          
          <div className="space-y-6 mb-10">
            <p className="text-base text-[#4a4a4a] leading-relaxed">
              For first-generation exiles, memory serves as both a connection to homeland and a 
              reminder of loss. The Kashmir they remember is frozen in time, the Kashmir of 1990 
              and before, while the physical place has continued to change. This creates a form 
              of exile that exists in the space between memory and reality.
            </p>
            <p className="text-base text-[#4a4a4a] leading-relaxed">
              Memory exile is not simply about remembering; it is about the ongoing negotiation 
              between the homeland that was, the homeland that is (for those who have returned 
              or visited), and the homeland that exists only in stories and imagination.
            </p>
          </div>

          <div className="bg-[#fafafa] border-l-4 border-[#0a0a0a] p-10 mb-10">
            <h3 className="text-2xl font-semibold text-[#0a0a0a] mb-6">Key Dimensions</h3>
            <ul className="space-y-6 text-[#4a4a4a]">
              <li className="flex items-start">
                <span className="text-[#0a0a0a] mr-4 text-lg font-light">-</span>
                <span>
                  <strong className="text-[#0a0a0a]">Nostalgic Memory:</strong> Idealized recollections of pre-exodus Kashmir, 
                  often emphasizing harmony, beauty, and cultural richness.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0a0a0a] mr-4 text-lg font-light">-</span>
                <span>
                  <strong className="text-[#0a0a0a]">Traumatic Memory:</strong> Memories of violence, fear, and forced departure 
                  that shape identity and belonging in complex ways.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0a0a0a] mr-4 text-lg font-light">-</span>
                <span>
                  <strong className="text-[#0a0a0a]">Cultural Memory:</strong> Preservation of language, traditions, festivals, 
                  and practices that connect communities to homeland across distance and time.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0a0a0a] mr-4 text-lg font-light">-</span>
                <span>
                  <strong className="text-[#0a0a0a]">Collective Memory:</strong> Shared narratives and stories that create 
                  community identity and belonging in diaspora.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Intergenerational Transmission */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0a0a0a] mb-8 tracking-tight">Intergenerational Transmission</h2>
          
          <div className="space-y-6 mb-10">
            <p className="text-base text-[#4a4a4a] leading-relaxed">
              Memory is not static but is actively transmitted and transformed across generations. 
              First-generation exiles share stories, photographs, and cultural practices with 
              their children and grandchildren, creating an imagined homeland that exists through 
              narrative rather than direct experience.
            </p>
            <p className="text-base text-[#4a4a4a] leading-relaxed">
              For second and third-generation Pandits, Kashmir exists primarily as a place of 
              memory and imagination. They inherit stories of a homeland they have never known, 
              creating a complex relationship between memory, identity, and belonging. This process 
              of transmission creates generational exile, a byproduct of memory exile where younger 
              generations are exiled from a place they have never known, yet which remains central 
              to their identity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="card-elegant p-8">
              <h3 className="text-2xl font-semibold text-[#0a0a0a] mb-4">First Generation</h3>
              <p className="text-[#4a4a4a] leading-relaxed mb-6 text-sm">
                Those who experienced the exodus directly carry memories of physical place, 
                community, and the trauma of displacement. Their memories are grounded in 
                lived experience.
              </p>
              <ul className="space-y-2 text-[#4a4a4a] text-sm">
                <li>• Direct memories of Kashmir</li>
                <li>• Experience of displacement</li>
                <li>• Loss of physical homeland</li>
                <li>• Trauma of forced migration</li>
              </ul>
            </div>

            <div className="card-elegant p-8">
              <h3 className="text-2xl font-semibold text-[#0a0a0a] mb-4">Second & Third Generation</h3>
              <p className="text-[#4a4a4a] leading-relaxed mb-6 text-sm">
                Those born in exile inherit Kashmir through stories, creating an imagined 
                homeland that shapes identity even without direct experience of the place. 
                This generational exile emerges directly from the memory exile of their parents 
                and grandparents.
              </p>
              <ul className="space-y-2 text-[#4a4a4a] text-sm">
                <li>• Inherited memories through stories</li>
                <li>• Imagined homeland</li>
                <li>• Cultural practices without place</li>
                <li>• Complex relationship to identity</li>
                <li>• Exile from a place never known</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Generational Exile as Byproduct */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0a0a0a] mb-8 tracking-tight">Generational Exile: A Byproduct of Memory Exile</h2>
          
          <div className="space-y-6 mb-10">
            <p className="text-base text-[#4a4a4a] leading-relaxed">
              Over three decades after the exodus, a significant portion of the Kashmiri Pandit 
              community consists of second and third-generation individuals who were born and 
              raised in exile. For these generations, Kashmir exists not as a physical place 
              they have known, but as an imagined homeland constructed through family stories, 
              photographs, and cultural practices passed down from the first generation.
            </p>
            <p className="text-base text-[#4a4a4a] leading-relaxed">
              This generational exile is a direct byproduct of memory exile. As first-generation 
              exiles preserve and transmit their memories of Kashmir, they create conditions in 
              which younger generations inherit an imagined homeland. The initial physical exile, 
              combined with the ongoing exile experienced through memory, creates a compound condition 
              of generational displacement. Younger Pandits continue to identify Kashmir as home, yet 
              their knowledge of it comes entirely through stories, photographs, rituals, and the 
              palpable absence of the place itself.
            </p>
            <p className="text-base text-[#4a4a4a] leading-relaxed">
              Parents transmit stories about the tragedy to their children, which can provoke 
              difficult emotional responses. Documented accounts include children asking their parents 
              why such suffering happened to them, expressing the pain of inherited trauma. Despite 
              these questions, children must come to terms with their status as victims of exile, 
              creating a cycle that perpetuates across generations.
            </p>
          </div>

          <div className="bg-[#fafafa] border-l-4 border-[#0a0a0a] p-10 mb-10">
            <h3 className="text-2xl font-semibold text-[#0a0a0a] mb-6">Key Characteristics of Generational Exile</h3>
            <ul className="space-y-6 text-[#4a4a4a]">
              <li className="flex items-start">
                <span className="text-[#0a0a0a] mr-4 text-lg font-light">-</span>
                <span>
                  <strong className="text-[#0a0a0a]">Imagined Homeland:</strong> Kashmir exists as a place of imagination 
                  and memory rather than direct experience, created through inherited narratives from the first generation.
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

        {/* Second and Third Generation Experiences */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0a0a0a] mb-8 tracking-tight">Second and Third Generation Experiences</h2>
          
          <div className="space-y-6 mb-10">
            <p className="text-base text-[#4a4a4a] leading-relaxed">
              The second generation, those born shortly before or after the exodus, or in the 
              early years of displacement, occupy a unique position. Many have fragmented memories 
              of Kashmir from early childhood, while others know it only through stories. They 
              bridge the gap between the first generation's direct experience and the third 
              generation's complete reliance on inherited narratives.
            </p>
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

        {/* Memory and Identity */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0a0a0a] mb-8 tracking-tight">Memory and Identity</h2>
          
          <div className="space-y-6">
            <p className="text-base text-[#4a4a4a] leading-relaxed">
              Memory plays a central role in the formation and maintenance of identity for 
              displaced communities. For Kashmiri Pandits, memory of Kashmir is not simply 
              about the past but is actively used to construct identity in the present, 
              creating a sense of belonging that transcends physical place.
            </p>
            <p className="text-base text-[#4a4a4a] leading-relaxed">
              This mnemonic identity exists in tension with the realities of life in diaspora. 
              Communities must negotiate between preserving memory and adapting to new contexts, 
              between remembering homeland and building new lives, between the Kashmir of memory 
              and the Kashmir of the present. For second and third generations, this negotiation 
              becomes even more complex as they form identity in the space between the Kashmir 
              of stories and the places where they actually live.
            </p>
          </div>

          <div className="bg-[#fafafa] p-10 border border-[#e5e5e5] mt-10">
            <h3 className="text-2xl font-semibold text-[#0a0a0a] mb-6">Memory Practices</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-[#0a0a0a] mb-3">Storytelling</h4>
                <p className="text-[#4a4a4a] text-sm leading-relaxed">
                  Oral narratives passed down through generations, preserving memories of 
                  place, community, and displacement.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-[#0a0a0a] mb-3">Photographs</h4>
                <p className="text-[#4a4a4a] text-sm leading-relaxed">
                  Visual records of pre-exodus Kashmir that serve as tangible connections 
                  to homeland and memory.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-[#0a0a0a] mb-3">Cultural Practices</h4>
                <p className="text-[#4a4a4a] text-sm leading-relaxed">
                  Festivals, rituals, and traditions that maintain connection to Kashmir 
                  while adapting to new contexts.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-[#0a0a0a] mb-3">Community Organizations</h4>
                <p className="text-[#4a4a4a] text-sm leading-relaxed">
                  Groups and associations that create spaces for memory sharing and 
                  identity formation in diaspora.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Politics of Memory */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0a0a0a] mb-8 tracking-tight">The Politics of Memory</h2>
          
          <div className="space-y-6">
            <p className="text-base text-[#4a4a4a] leading-relaxed">
              Memory is not neutral but is shaped by political, social, and cultural forces. 
              The ways in which the Kashmir Pandit exodus is remembered, or forgotten, reflect 
              broader questions about recognition, justice, and belonging in postcolonial India.
            </p>
            <p className="text-base text-[#4a4a4a] leading-relaxed">
              The struggle to preserve and transmit memory is also a struggle for recognition, 
              for ensuring that the experiences of displacement are not erased or forgotten. 
              This mnemonic exile is thus both personal and political, individual and collective.
            </p>
          </div>
        </section>

        {/* Art and Memory Gallery */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0a0a0a] mb-8 tracking-tight">Art and Memory</h2>
          
          <div className="space-y-6 mb-10">
            <p className="text-base text-[#4a4a4a] leading-relaxed">
              Art serves as a powerful medium for preserving, transmitting, and transforming memory. 
              Through poetry, visual art, film, literature, and other creative expressions, Kashmiri 
              Pandit communities have documented their experiences of exile, loss, and belonging. The 
              displacement extended beyond physical removal from place. It also severed the connection to 
              home as an idea and concept. Through recollection, storytelling, and artistic expression, 
              Kashmir persists as a remembered homeland for many displaced individuals, with nostalgia 
              playing a central role in how displaced communities maintain their connection to the places 
              they left behind.
            </p>
            <p className="text-base text-[#4a4a4a] leading-relaxed">
              This page includes works spanning across poets, filmmakers, and other artists. Amongst the most signifcant are Lalita Pandit Hogan's poetry and Ajay Raina's documentary <em>The Tree They Have Planted Has Now Grown</em>.
              In the film world, this topic has also been explored in the Bollywood industry, namely in the film <em>The Kashmir Files</em> and <em> Haider </em>. Both films further examine themes of exile in memory as well as generational exile.
            </p>
            <p className="text-base text-[#4a4a4a] leading-relaxed">
              <strong>Note:</strong> Works are tagged to indicate whether they explore Memory Exile, Generational Exile, or both. 
              This helps illustrate how memory exile creates the conditions for generational exile.
            </p>
          </div>

          {/* Poetry Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-[#0a0a0a] mb-6 border-b border-[#e5e5e5] pb-4">Poetry</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {artworks.poetry.map((poem) => (
                <Link
                  key={poem.id}
                  to={`/artwork/${poem.id}`}
                  className="card-elegant p-6 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs px-2 py-1 bg-[#f0f0f0] border border-[#e5e5e5] text-[#4a4a4a] uppercase tracking-wider">
                      Memory Exile
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-[#0a0a0a] mb-2 group-hover:text-[#4a4a4a] transition-colors">{poem.title}</h4>
                  <p className="text-sm text-[#4a4a4a] mb-3">{poem.author}</p>
                  <p className="text-xs text-[#6a6a6a] leading-relaxed line-clamp-3 mb-4">
                    {poem.description}
                  </p>
                  <div className="text-xs text-[#0a0a0a] font-medium uppercase tracking-wider">
                    View Details →
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Visual Art Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-[#0a0a0a] mb-6 border-b border-[#e5e5e5] pb-4">Visual Art</h3>
            <div className="overflow-x-auto pb-4 -mx-8 px-8">
              <div className="flex gap-6 min-w-max">
                {artworks.visualArt.map((art) => (
                  <Link
                    key={art.id}
                    to={`/artwork/${art.id}`}
                    className="card-elegant p-0 overflow-hidden hover:shadow-lg transition-all group flex-shrink-0 w-80"
                  >
                    <div className="h-64 bg-[#f8f8f8] border-b border-[#e5e5e5] flex items-center justify-center group-hover:bg-[#f0f0f0] transition-colors overflow-hidden">
                      {art.id === 'art-1' ? (
                        <img 
                          src={FragmentedMemoryImage} 
                          alt={art.title}
                          className="w-full h-full object-cover"
                        />
                      ) : art.id === 'art-2' ? (
                        <img 
                          src={StreetShopImage} 
                          alt={art.title}
                          className="w-full h-full object-cover"
                        />
                      ) : art.id === 'art-3' ? (
                        <img 
                          src={DreamingAnimalImage} 
                          alt={art.title}
                          className="w-full h-full object-cover"
                        />
                      ) : art.id === 'art-4' ? (
                        <img 
                          src={StrugglingSmileImage} 
                          alt={art.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-center p-4">
                          <svg className="w-16 h-16 text-[#4a4a4a] mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <p className="text-xs text-[#6a6a6a] uppercase tracking-wider">Artwork</p>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs px-2 py-1 bg-[#f0f0f0] border border-[#e5e5e5] text-[#4a4a4a] uppercase tracking-wider">
                          Memory Exile
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold text-[#0a0a0a] mb-2 group-hover:text-[#4a4a4a] transition-colors">{art.title}</h4>
                      <p className="text-sm text-[#4a4a4a] mb-3">{art.artist}</p>
                      <p className="text-xs text-[#6a6a6a] leading-relaxed line-clamp-2 mb-3">
                        {art.description}
                      </p>
                      <div className="text-xs text-[#0a0a0a] font-medium uppercase tracking-wider">
                        View Details →
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Film Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-[#0a0a0a] mb-6 border-b border-[#e5e5e5] pb-4">Film & Documentary</h3>
            <div className="overflow-x-auto pb-4 -mx-8 px-8">
              <div className="flex gap-6 min-w-max">
                {artworks.film.map((film) => (
                  <Link
                    key={film.id}
                    to={`/artwork/${film.id}`}
                    className="card-elegant p-0 overflow-hidden hover:shadow-lg transition-all group flex-shrink-0 w-80"
                  >
                    <div className="h-64 bg-[#f8f8f8] border-b border-[#e5e5e5] flex items-center justify-center group-hover:bg-[#f0f0f0] transition-colors overflow-hidden">
                      {film.videoId ? (
                        <div className="w-full h-full relative">
                          <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${film.videoId}${film.videoStartTime ? `?start=${film.videoStartTime}` : ''}`}
                            title={film.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          ></iframe>
                        </div>
                      ) : (
                        <div className="text-center p-4">
                          <svg className="w-16 h-16 text-[#4a4a4a] mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                          <p className="text-xs text-[#6a6a6a] uppercase tracking-wider">Film</p>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        {film.exileType === 'both' ? (
                          <>
                            <span className="text-xs px-2 py-1 bg-[#0a0a0a] text-white uppercase tracking-wider">
                              Memory & Generational
                            </span>
                          </>
                        ) : (
                          <span className="text-xs px-2 py-1 bg-[#f0f0f0] border border-[#e5e5e5] text-[#4a4a4a] uppercase tracking-wider">
                            Memory Exile
                          </span>
                        )}
                      </div>
                      <h4 className="text-lg font-semibold text-[#0a0a0a] mb-2 group-hover:text-[#4a4a4a] transition-colors">{film.title}</h4>
                      <p className="text-sm text-[#4a4a4a] mb-3">{film.director} • {film.year}</p>
                      <p className="text-xs text-[#6a6a6a] leading-relaxed mb-3 line-clamp-3">
                        {film.description}
                      </p>
                      <p className="text-xs text-[#6a6a6a] italic mb-3">{film.type}</p>
                      <div className="text-xs text-[#0a0a0a] font-medium uppercase tracking-wider">
                        View Details →
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Music & Performance Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-[#0a0a0a] mb-6 border-b border-[#e5e5e5] pb-4">Music & Performance</h3>
            <div className="overflow-x-auto pb-4 -mx-8 px-8">
              <div className="flex gap-6 min-w-max">
                {artworks.music.map((item) => (
                  <Link
                    key={item.id}
                    to={`/artwork/${item.id}`}
                    className="card-elegant p-0 overflow-hidden hover:shadow-lg transition-all group flex-shrink-0 w-80"
                  >
                    <div className="h-64 bg-[#f8f8f8] border-b border-[#e5e5e5] flex items-center justify-center group-hover:bg-[#f0f0f0] transition-colors overflow-hidden">
                      {item.videoId ? (
                        <div className="w-full h-full relative">
                          <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${item.videoId}${item.videoStartTime ? `?start=${item.videoStartTime}` : ''}`}
                            title={item.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          ></iframe>
                        </div>
                      ) : (
                        <div className="text-center p-4">
                          {item.category === 'Music' ? (
                            <svg className="w-16 h-16 text-[#4a4a4a] mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                            </svg>
                          ) : (
                            <svg className="w-16 h-16 text-[#4a4a4a] mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          )}
                          <p className="text-xs text-[#6a6a6a] uppercase tracking-wider">{item.category}</p>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        {item.exileType === 'both' ? (
                          <>
                            <span className="text-xs px-2 py-1 bg-[#0a0a0a] text-white uppercase tracking-wider">
                              Memory & Generational
                            </span>
                          </>
                        ) : (
                          <span className="text-xs px-2 py-1 bg-[#f0f0f0] border border-[#e5e5e5] text-[#4a4a4a] uppercase tracking-wider">
                            Memory Exile
                          </span>
                        )}
                      </div>
                      <h4 className="text-lg font-semibold text-[#0a0a0a] mb-2 group-hover:text-[#4a4a4a] transition-colors">{item.title}</h4>
                      <p className="text-sm text-[#4a4a4a] mb-3">{item.artist}</p>
                      <p className="text-xs text-[#6a6a6a] leading-relaxed line-clamp-3 mb-3">
                        {item.description}
                      </p>
                      <div className="text-xs text-[#0a0a0a] font-medium uppercase tracking-wider">
                        View Details →
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-[#0a0a0a] mb-6 border-b border-[#e5e5e5] pb-4">Testimonials</h3>
            <div className="overflow-x-auto pb-4 -mx-8 px-8">
              <div className="flex gap-6 min-w-max">
                {artworks.testimonials.map((testimonial) => (
                  <Link
                    key={testimonial.id}
                    to={`/artwork/${testimonial.id}`}
                    className="card-elegant p-0 overflow-hidden hover:shadow-lg transition-all group flex-shrink-0 w-80"
                  >
                    <div className="h-64 bg-[#f8f8f8] border-b border-[#e5e5e5] flex items-center justify-center group-hover:bg-[#f0f0f0] transition-colors overflow-hidden">
                      {testimonial.videoId ? (
                        <div className="w-full h-full relative">
                          <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${testimonial.videoId}${testimonial.videoStartTime ? `?start=${testimonial.videoStartTime}` : ''}`}
                            title={testimonial.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          ></iframe>
                        </div>
                      ) : (
                        <div className="text-center p-4">
                          <svg className="w-16 h-16 text-[#4a4a4a] mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                          <p className="text-xs text-[#6a6a6a] uppercase tracking-wider">Testimonial</p>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        {testimonial.exileType === 'both' ? (
                          <>
                            <span className="text-xs px-2 py-1 bg-[#0a0a0a] text-white uppercase tracking-wider">
                              Memory & Generational
                            </span>
                          </>
                        ) : (
                          <span className="text-xs px-2 py-1 bg-[#f0f0f0] border border-[#e5e5e5] text-[#4a4a4a] uppercase tracking-wider">
                            Memory Exile
                          </span>
                        )}
                      </div>
                      <h4 className="text-lg font-semibold text-[#0a0a0a] mb-2 group-hover:text-[#4a4a4a] transition-colors">{testimonial.title}</h4>
                      <p className="text-sm text-[#4a4a4a] mb-3">{testimonial.speaker} • {testimonial.year}</p>
                      <p className="text-xs text-[#6a6a6a] leading-relaxed mb-3 line-clamp-3">
                        {testimonial.description}
                      </p>
                      <div className="text-xs text-[#0a0a0a] font-medium uppercase tracking-wider">
                        View Details →
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
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
              className="btn-primary"
            >
              Physical Exile
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

export default MemoryExile;
