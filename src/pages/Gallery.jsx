import { Link } from "react-router-dom";

/*
  Image Gallery page - displays images with captions about the Kashmir Pandit exodus crisis.
  Horizontal scroll layout with black and white theme.
*/

function Gallery() {
  // Placeholder image data - in a real implementation, these would be actual image paths
  const images = [
    {
      id: 1,
      title: "Refugee Camp in Jammu",
      caption: "Temporary shelters in Jammu refugee camps where many displaced Kashmiri Pandit families initially settled and continue to live decades later.",
      category: "Displacement"
    },
    {
      id: 2,
      title: "Abandoned Homes in Kashmir",
      caption: "Homes left behind by Kashmiri Pandit families during the 1990 exodus, many of which remain abandoned or have been repurposed.",
      category: "Physical Exile"
    },
    {
      id: 3,
      title: "Community Gathering",
      caption: "Kashmiri Pandit community members gathering in diaspora to preserve cultural practices and maintain connections to homeland.",
      category: "Memory & Identity"
    },
    {
      id: 4,
      title: "Temple in Kashmir",
      caption: "Historic temples in the Kashmir Valley that hold cultural and religious significance for the Pandit community.",
      category: "Cultural Heritage"
    },
    {
      id: 5,
      title: "Protest for Recognition",
      caption: "Community members advocating for recognition, justice, and the right to return to their ancestral homeland.",
      category: "Activism"
    },
    {
      id: 6,
      title: "Family Photographs",
      caption: "Family photographs from pre-exodus Kashmir, serving as tangible connections to homeland and memory across generations.",
      category: "Memory"
    },
    {
      id: 7,
      title: "Cultural Festival",
      caption: "Kashmiri Pandit cultural festivals celebrated in diaspora, maintaining traditions and creating community spaces.",
      category: "Cultural Practice"
    },
    {
      id: 8,
      title: "Second Generation",
      caption: "Second and third-generation Kashmiri Pandits who have never known Kashmir directly but inherit it through stories and memory.",
      category: "Generational Exile"
    },
    {
      id: 9,
      title: "Return to Kashmir",
      caption: "Limited returns to Kashmir, primarily to secure government housing colonies, representing a small fraction of the displaced population.",
      category: "Return"
    },
    {
      id: 10,
      title: "Jammu Transit Camps",
      caption: "Transit camps in Jammu where displaced families lived in cramped conditions, many for years, waiting for permanent resettlement.",
      category: "Displacement"
    },
    {
      id: 11,
      title: "Empty Classrooms",
      caption: "Abandoned schools and educational institutions in Kashmir that once served the Pandit community, now standing empty.",
      category: "Physical Exile"
    },
    {
      id: 12,
      title: "Oral History Recording",
      caption: "Elders sharing their memories and experiences of the exodus, preserving stories for future generations through oral history projects.",
      category: "Memory"
    },
    {
      id: 13,
      title: "Cultural Artifacts",
      caption: "Traditional Kashmiri artifacts and heirlooms carried by families during displacement, representing cultural continuity in exile.",
      category: "Cultural Heritage"
    },
    {
      id: 14,
      title: "Memorial Service",
      caption: "Community memorial services honoring those who lost their lives during the exodus and commemorating the displacement.",
      category: "Memory & Identity"
    },
    {
      id: 15,
      title: "Delhi Settlement",
      caption: "Kashmiri Pandit neighborhoods in Delhi and other major cities where displaced families established new communities.",
      category: "Displacement"
    },
    {
      id: 16,
      title: "Language Preservation",
      caption: "Efforts to preserve Kashmiri language and literature in diaspora, teaching younger generations their ancestral tongue.",
      category: "Cultural Practice"
    },
    {
      id: 17,
      title: "Documentation Project",
      caption: "Community-led documentation projects collecting testimonies, photographs, and records of pre-exodus life in Kashmir.",
      category: "Memory"
    },
    {
      id: 18,
      title: "Youth Conference",
      caption: "Second and third-generation Pandits gathering to discuss identity, belonging, and their relationship to an imagined homeland.",
      category: "Generational Exile"
    },
    {
      id: 19,
      title: "Temple Restoration",
      caption: "Efforts to restore and maintain temples in Kashmir, maintaining spiritual connections to homeland across distance and time.",
      category: "Cultural Heritage"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 border-b border-[#e5e5e5]">
        <div className="max-w-5xl mx-auto px-8">
          <h1 className="text-5xl md:text-6xl font-semibold text-[#0a0a0a] mb-6 tracking-tight">
            Image Gallery
          </h1>
          <p className="text-xl text-[#4a4a4a] leading-relaxed font-light">
            Visual documentation of the Kashmir Pandit exodus, displacement, and the ongoing 
            impact on communities, identity, and memory.
          </p>
        </div>
      </section>

      {/* Horizontal Scroll Gallery */}
      <section className="py-16">
        <div className="overflow-x-auto overflow-y-hidden">
          <div className="flex gap-8 px-8 pb-8" style={{ minWidth: 'max-content' }}>
            {images.map((image) => (
              <div
                key={image.id}
                className="card-elegant flex-shrink-0 w-96"
              >
                {/* Image Placeholder */}
                <div className="w-full h-80 bg-gradient-to-br from-[#f8f8f8] to-[#e8e8e8] flex items-center justify-center border-b border-[#e5e5e5]">
                  <div className="text-center p-4">
                    <svg
                      className="w-16 h-16 text-[#4a4a4a] mx-auto mb-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-[#6a6a6a] text-xs uppercase tracking-wider">Image Placeholder</p>
                    <p className="text-[#4a4a4a] text-sm mt-2 font-medium">{image.title}</p>
                  </div>
                </div>
                
                {/* Caption */}
                <div className="p-8">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 border border-[#0a0a0a] text-[#0a0a0a] text-xs font-medium uppercase tracking-wider">
                      {image.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                    {image.title}
                  </h3>
                  <p className="text-[#4a4a4a] leading-relaxed text-sm">
                    {image.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note about Images */}
      <section className="py-16 bg-[#fafafa] border-t border-[#e5e5e5]">
        <div className="max-w-4xl mx-auto px-8">
          <div className="bg-white border-l-4 border-[#0a0a0a] p-10">
            <h3 className="text-2xl font-semibold text-[#0a0a0a] mb-6">
              About These Images
            </h3>
            <p className="text-[#4a4a4a] leading-relaxed">
              The images in this gallery represent various aspects of the Kashmir Pandit exodus 
              and its ongoing impact. In a full implementation, these would be actual photographs 
              and archival materials documenting displacement, refugee camps, community life in 
              diaspora, cultural practices, and the relationship between memory and homeland. 
              Each image tells a part of the larger story of exile, identity, and belonging.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 bg-white border-t border-[#e5e5e5]">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-8">
              Continue Exploring
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/exodus"
                className="btn-secondary"
              >
                Back to Exodus Overview
              </Link>
              <Link
                to="/physical-exile"
                className="btn-primary"
              >
                Explore Physical Exile
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
