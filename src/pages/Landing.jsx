import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
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
  Landing page that introduces the main themes of the website
  and mentions that this is a digital exhibit.
*/

function Landing() {
  // All images for the slideshow
  const images = [
    DreamingAnimal,
    FragmentedMemory,
    im1,
    im2,
    im3,
    im4,
    im5,
    im6,
    im7,
    im8,
    im9,
    im10,
    im12,
    StreetShop,
    StrugglingSmile
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Manual navigation
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Museum Style */}
      <section className="relative bg-white pt-24 pb-32 border-b border-[#e5e5e5]">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-1.5 border border-[#1a1a1a] text-[#1a1a1a] text-xs font-medium tracking-widest uppercase mb-8">
              Digital Exhibit
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-semibold text-[#0a0a0a] mb-8 leading-[1.1] tracking-tight">
            Exile and Memory<br />in Kashmir
          </h1>
          <p className="text-xl md:text-2xl text-[#4a4a4a] mb-6 leading-relaxed max-w-2xl mx-auto font-light">
            A digital exploration of displacement, identity, and belonging
          </p>
          <p className="text-base text-[#6a6a6a] mb-12 leading-relaxed max-w-xl mx-auto">
            This digital exhibit examines the complex narratives of exile, memory, and identity 
            among Kashmiri communities, exploring how displacement shapes belonging across generations.
          </p>
          <Link
            to="/history"
            className="btn-primary inline-block"
          >
            Begin Your Visit
          </Link>
        </div>
      </section>

      {/* Image Slideshow Section */}
      <section className="py-20 bg-white border-b border-[#e5e5e5]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="relative w-full h-[500px] overflow-hidden">
            {/* Images Container */}
            <div 
              className="flex transition-transform duration-700 ease-in-out h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="min-w-full h-full flex-shrink-0"
                >
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all z-10"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all z-10"
              aria-label="Next image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-white w-8'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Themes Section - Museum Gallery Style */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#0a0a0a] mb-4 tracking-tight">
              Main Themes
            </h2>
            <p className="text-lg text-[#6a6a6a] max-w-2xl mx-auto">
              This exhibit explores three interconnected dimensions of exile and displacement
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {/* Theme 1: Physical Exile */}
            <div className="card-elegant p-0 overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-[#f8f8f8] to-[#e8e8e8] flex items-center justify-center border-b border-[#e5e5e5]">
                <svg className="w-16 h-16 text-[#4a4a4a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                  Physical Exile
                </h3>
                <p className="text-refined text-sm leading-relaxed">
                  The forced displacement of communities from their ancestral homeland, 
                  examining the circumstances, scale, and immediate consequences of migration.
                </p>
              </div>
            </div>

            {/* Theme 2: Memory Exile */}
            <div className="card-elegant p-0 overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-[#f8f8f8] to-[#e8e8e8] flex items-center justify-center border-b border-[#e5e5e5]">
                <svg className="w-16 h-16 text-[#4a4a4a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                  Memory Exile
                </h3>
                <p className="text-refined text-sm leading-relaxed">
                  How memories of homeland are preserved, transmitted, and transformed 
                  across generations, shaping identity and belonging in diaspora.
                </p>
              </div>
            </div>

            {/* Theme 3: Generational Exile */}
            <div className="card-elegant p-0 overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-[#f8f8f8] to-[#e8e8e8] flex items-center justify-center border-b border-[#e5e5e5]">
                <svg className="w-16 h-16 text-[#4a4a4a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                  Generational Exile
                </h3>
                <p className="text-refined text-sm leading-relaxed">
                  The ongoing impact of displacement on second and third generations, 
                  who inherit an imagined homeland through stories and memory.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Exhibit - Museum Style */}
      <section className="py-20 bg-[#fafafa] border-t border-[#e5e5e5]">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#0a0a0a] mb-12 text-center tracking-tight">
            About This Digital Exhibit
          </h2>
          <div className="space-y-8 text-refined text-base leading-relaxed">
            <p>
              This digital exhibit explores the 1990 Kashmiri Pandit exodus and its lasting 
              impact on communities, identity, and memory. Through oral histories, testimonies, 
              and archival materials, we examine how exile manifests not only as physical 
              displacement but as an ongoing condition that shapes belonging across generations.
            </p>
            <p>
              The exhibit is organized around three interconnected dimensions of exile: 
              the physical act of displacement, the preservation and transformation of memory, 
              and the intergenerational transmission of loss and identity. Each dimension 
              reveals different aspects of how communities navigate the complex terrain of 
              home, homeland, and belonging in contexts of forced migration.
            </p>
            <p>
              By centering individual experiences and community narratives, this exhibit 
              seeks to contribute to a deeper understanding of displacement as both a 
              historical event and an ongoing human condition.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white border-t border-[#e5e5e5]">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0a0a0a] mb-6 tracking-tight">
            Begin Your Journey
          </h2>
          <p className="text-base text-[#6a6a6a] mb-10">
            Explore the history, stories, and ongoing impact of the Kashmir Pandit exodus
          </p>
          <Link
            to="/history"
            className="btn-primary inline-block"
          >
            Begin Your Visit
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Landing;
