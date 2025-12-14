import { useParams, useNavigate, Link } from 'react-router-dom';
import { getArtworkById } from '../data/artworks';
import FragmentedMemoryImage from '../images/FragmentedMemory.png';
import StreetShopImage from '../images/StreetShop.png';
import DreamingAnimalImage from '../images/DreamingAnimal.png';
import StrugglingSmileImage from '../images/StrugglingSmile.png';

function ArtworkDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const artwork = getArtworkById(id);

  if (!artwork) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-[#0a0a0a] mb-4">Artwork Not Found</h1>
          <Link to="/memory-exile" className="btn-primary">
            Back to Gallery
          </Link>
        </div>
      </div>
    );
  }

  // Get icon based on category
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Poetry':
        return (
          <svg className="w-8 h-8 text-[#4a4a4a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      case 'Visual Art':
        return (
          <svg className="w-8 h-8 text-[#4a4a4a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      case 'Film':
        return (
          <svg className="w-8 h-8 text-[#4a4a4a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        );
      case 'Literature':
        return (
          <svg className="w-8 h-8 text-[#4a4a4a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      case 'Music':
      case 'Performance':
        return (
          <svg className="w-8 h-8 text-[#4a4a4a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 border-b border-[#e5e5e5]">
        <div className="max-w-5xl mx-auto px-8">
          <div className="mb-6">
            <button
              onClick={() => navigate(-1)}
              className="text-sm text-[#4a4a4a] hover:text-[#0a0a0a] mb-4 flex items-center gap-2 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Gallery
            </button>
          </div>
          <div className="flex items-center gap-3 mb-4">
            {getCategoryIcon(artwork.category)}
            <span className="text-sm text-[#6a6a6a] uppercase tracking-wider">{artwork.category}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold text-[#0a0a0a] mb-4 tracking-tight">
            {artwork.title}
          </h1>
          <p className="text-xl text-[#4a4a4a] font-light">
            {artwork.author || artwork.director || artwork.artist || artwork.speaker}
            {artwork.year && ` • ${artwork.year}`}
            {artwork.medium && ` • ${artwork.medium}`}
            {artwork.type && ` • ${artwork.type}`}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-8 pt-16 pb-20">
        {/* Artwork Display */}
        <section className="mb-16">
          <div className="bg-[#fafafa] border border-[#e5e5e5] mb-8 overflow-hidden">
            {artwork.videoId ? (
              <div className="w-full aspect-video">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${artwork.videoId}${artwork.videoStartTime ? `?start=${artwork.videoStartTime}` : ''}`}
                  title={artwork.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            ) : artwork.id === 'art-1' ? (
              <img 
                src={FragmentedMemoryImage} 
                alt={artwork.title}
                className="w-full h-auto object-contain max-h-[600px] mx-auto"
              />
            ) : artwork.id === 'art-2' ? (
              <img 
                src={StreetShopImage} 
                alt={artwork.title}
                className="w-full h-auto object-contain max-h-[600px] mx-auto"
              />
            ) : artwork.id === 'art-3' ? (
              <img 
                src={DreamingAnimalImage} 
                alt={artwork.title}
                className="w-full h-auto object-contain max-h-[600px] mx-auto"
              />
            ) : artwork.id === 'art-4' ? (
              <img 
                src={StrugglingSmileImage} 
                alt={artwork.title}
                className="w-full h-auto object-contain max-h-[600px] mx-auto"
              />
            ) : (
              <div className="h-96 flex items-center justify-center">
                <div className="text-center p-8">
                  {getCategoryIcon(artwork.category)}
                  <p className="text-sm text-[#6a6a6a] uppercase tracking-wider mt-4">Artwork Image / Content</p>
                  <p className="text-xs text-[#6a6a6a] mt-2">Placeholder for {artwork.category.toLowerCase()}</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Description */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-6">About This Work</h2>
          <div className="space-y-6">
            <p className="text-base text-[#4a4a4a] leading-relaxed">
              {artwork.fullDescription || artwork.description}
            </p>
            {artwork.fullText && (
              <div className="bg-[#fafafa] border-l-4 border-[#0a0a0a] p-8 mt-8">
                <h3 className="text-lg font-semibold text-[#0a0a0a] mb-4">Full Text</h3>
                <div className="text-base text-[#4a4a4a] leading-relaxed whitespace-pre-line">
                  {artwork.fullText}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Navigation */}
        <section className="mb-12 bg-white border border-[#e5e5e5] p-10">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate(-1)}
              className="btn-secondary"
            >
              Back to Gallery
            </button>
            <Link
              to="/"
              className="btn-primary"
            >
              Back to Home
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ArtworkDetail;
