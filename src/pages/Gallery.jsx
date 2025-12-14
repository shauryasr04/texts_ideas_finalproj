import { Link } from "react-router-dom";
import DreamingAnimal from "../images/DreamingAnimal.png";
import FragmentedMemory from "../images/FragmentedMemory.png";
import im1 from "../images/im1.png";
import im2 from "../images/im2.png";
import im3 from "../images/im3.jpg";
import im4 from "../images/im4.png";
import im5 from "../images/im5.png";
import im6 from "../images/im6.png";
import im7 from "../images/im7.png";
import im8 from "../images/im8.png";
import im9 from "../images/im9.png";
import im10 from "../images/im10.png";
import im12 from "../images/im12.png";
import StreetShop from "../images/StreetShop.png";
import StrugglingSmile from "../images/StrugglingSmile.png";

/*
  Image Gallery page - displays images with captions about the Kashmir Pandit exodus crisis.
  Horizontal scroll layout with black and white theme.
*/

function Gallery() {
  const images = [
    {
      id: 1,
      src: DreamingAnimal,
      title: "Dreaming Animal",
      caption: "A representation of longing and memory, capturing the essence of displacement and the dreams of return.",
      category: "Memory & Identity"
    },
    {
      id: 2,
      src: FragmentedMemory,
      title: "Fragmented Memory",
      caption: "Visual metaphor for the fragmented nature of memory and identity in exile, where pieces of the past are preserved across generations.",
      category: "Memory"
    },
    {
      id: 3,
      src: im1,
      title: "Image 1",
      caption: "A group of Kashmiri Pandits sit together during a public demonstration, holding placards that describe exile as a form of ongoing violence. The image foregrounds collective memory and the demand to be seen and acknowledged after displacement.",
      category: "Displacement"
    },
    {
      id: 4,
      src: im2,
      title: "Image 2",
      caption: "Members of the Kashmiri Pandit diaspora stand holding signs that assert historical belonging and call for justice. The use of both English and Kashmiri connects political demands to cultural identity and memory.",
      category: "Physical Exile"
    },
    {
      id: 5,
      src: im3,
      title: "Image 3",
      caption: "Children stand near armed security personnel in a narrow street. The contrast between childhood and militarization reflects how everyday life in Kashmir has been shaped by prolonged conflict.",
      category: "Cultural Heritage"
    },
    {
      id: 6,
      src: im4,
      title: "Image 4",
      caption: "Abandoned residential buildings stand empty in the Kashmiri landscape. The absence of people emphasizes loss and interrupted continuity, turning architecture into a marker of displacement.",
      category: "Memory & Identity"
    },
    {
      id: 7,
      src: im5,
      title: "Image 5",
      caption: "Rows of temporary tents form a migrant camp, illustrating the conditions many displaced Kashmiri Pandits lived in after leaving the Valley. The image captures exile as prolonged and structural rather than momentary.",
      category: "Cultural Practice"
    },
    {
      id: 8,
      src: im6,
      title: "Image 6",
      caption: "A woman holds a sign during a protest that reads \"Blacklist Us All,\" pointing to collective punishment and restricted freedoms. The image centers civilian voices within a climate of surveillance and control.",
      category: "Memory"
    },
    {
      id: 9,
      src: im7,
      title: "Image 7",
      caption: "Displaced individuals protest for employment and economic rights in Jammu. The banner highlights how exile extends beyond loss of home into long-term struggles over livelihood and stability.",
      category: "Generational Exile"
    },
    {
      id: 10,
      src: im8,
      title: "Image 8",
      caption: "A parent holds a child while displaying a sign stating \"I was born in exile.\" The image underscores how displacement has become generational, shaping identity from birth.",
      category: "Displacement"
    },
    {
      id: 11,
      src: im9,
      title: "Image 9",
      caption: "Children and adults hold placards demanding human rights and recognition of roots in Kashmir. The presence of children emphasizes how memory and displacement are inherited rather than chosen.",
      category: "Memory & Identity"
    },
    {
      id: 12,
      src: im10,
      title: "Image 10",
      caption: "A family sits together inside a modest living space, surrounded by everyday objects. The image reflects how displacement reshapes domestic life, with home reconstructed in unfamiliar places.",
      category: "Cultural Heritage"
    },
    {
      id: 13,
      src: im12,
      title: "Image 12",
      caption: "A row of government-constructed housing units stands in a planned resettlement colony for displaced Kashmiri Pandits. The uniform layout reflects attempts to provide stability after displacement, while the shared walkways emphasize communal life shaped by exile rather than choice.",
      category: "Memory"
    },
    {
      id: 14,
      src: StreetShop,
      title: "Street Shop",
      caption: "Everyday life and community spaces, representing the continuity of cultural practices and daily existence.",
      category: "Cultural Practice"
    },
    {
      id: 16,
      src: StrugglingSmile,
      title: "Struggling Smile",
      caption: "A poignant representation of resilience, capturing the complex emotions of displacement, loss, and hope.",
      category: "Memory & Identity"
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
                {/* Image */}
                <div className="w-full h-80 border-b border-[#e5e5e5] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Caption */}
                <div className="p-8">
                  {!image.title.startsWith("Image") && (
                    <h3 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                      {image.title}
                    </h3>
                  )}
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
              and its ongoing impact. These photographs and visual materials document displacement, 
              community life in diaspora, cultural practices, and the relationship between memory 
              and homeland. Each image tells a part of the larger story of exile, identity, and belonging.
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
