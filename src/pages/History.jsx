import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { backgroundEvents } from "../data/backgroundEvents";
import KashmirMapImage from "../images/region-Kashmir-India.webp";

/*
  History page with a banner that appears immediately when the user arrives.
  The banner asks: "Read about the history of the crisis" or "Take me to the crisis itself"
*/

function History() {
  const [showBanner, setShowBanner] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Show banner immediately when page loads
    setShowBanner(true);
  }, []);

  const handleReadHistory = () => {
    setShowBanner(false);
    // Scroll to top of history content
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleGoToCrisis = () => {
    navigate("/exodus");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Banner - Museum Style */}
      {showBanner && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white max-w-2xl w-full p-12 border border-[#e5e5e5]">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0a0a0a] mb-6 text-center tracking-tight">
              Welcome to the History of the Conflict
            </h2>
            <p className="text-base text-[#4a4a4a] mb-10 text-center leading-relaxed max-w-lg mx-auto">
              Would you like to learn about the historical context of the crisis, 
              or proceed directly to explore the Kashmir Pandit exodus?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleReadHistory}
                className="btn-secondary"
              >
                Read About the History
              </button>
              <button
                onClick={handleGoToCrisis}
                className="btn-primary"
              >
                Take Me to the Crisis
              </button>
            </div>
          </div>
        </div>
      )}

      {/* History Content */}
      <div className="max-w-4xl mx-auto px-8 pt-24 pb-20">
        <h1 className="text-4xl md:text-5xl font-semibold text-[#0a0a0a] mb-12 tracking-tight">Conflict Background</h1>

        {/* Where is Kashmir? */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0a0a0a] mb-6 tracking-tight">Where is Kashmir?</h2>
          <p className="text-base text-[#4a4a4a] mb-8 leading-relaxed">
            Kashmir has been a region of dispute for several decades, originating from the 1947 partition 
            of British India, when the state of Jammu and Kashmir became contested between India and Pakistan. 
            Kashmir's geographical position between India and Pakistan, and its status as a disputed territory, 
            cannot be understood without reference to colonial partition and postcolonial state-making. 
            The region's borders were drawn through conflict and negotiation, shaping who belongs where 
            and under what conditions. This historical context is essential for understanding the events 
            that would lead to the 1990 exodus.
          </p>
          
          {/* Map */}
          <div className="bg-[#fafafa] border border-[#e5e5e5] mb-6 overflow-hidden">
            <img 
              src={KashmirMapImage} 
              alt="Map of Kashmir region showing disputed territories"
              className="w-full h-auto object-contain"
            />
          </div>
        </section>

        {/* Borders, Wars, and the Making of a Conflict */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0a0a0a] mb-6 tracking-tight">
            Borders, Wars, and the Making of a Conflict
          </h2>
          <p className="text-base text-[#4a4a4a] mb-8 leading-relaxed">
            Following the first Indo-Pakistani war, the region was divided by a formalized Line of Control (LoC), 
            splitting Kashmir into both Indian and Pakistani territories. Rather than resolving the dispute, 
            the LoC intensified Kashmir's status as a militarized and politically unstable region. In the late 1980s, 
            political turmoil escalated dramatically following allegations of electoral fraud in state elections. 
            Various groups began advocating for independence or alignment with Pakistan, prompting strong responses 
            from India. This escalating conflict created conditions in which Kashmiri Pandits became targets, 
            leading the vast majority to flee the valley suddenly, many believing their departure would be temporary. 
            What would become known as the 1990 Kashmiri Pandit Exodus unfolded as a mass displacement that 
            fundamentally altered the region's demographic and cultural landscape.
          </p>
          <p className="text-base text-[#4a4a4a] mb-8 leading-relaxed">
            The timeline below traces how wars, partition, and border decisions have shaped belonging 
            and displacement in Kashmir. Each event represents moments when state power, violence, 
            and forced movement intersected to determine who could remain in place and who had to leave.
          </p>
          
          <h3 className="text-2xl font-semibold text-[#0a0a0a] mb-6">
            Timeline: From Partition to Late 20th Century
          </h3>
          <div className="space-y-8">
            {backgroundEvents.map((event, index) => (
              <div key={index} className="border-l-4 border-[#0a0a0a] pl-8 pb-8">
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="text-2xl font-semibold text-[#0a0a0a]">{event.year}</span>
                  <h3 className="text-xl font-semibold text-[#0a0a0a]">{event.title}</h3>
                </div>
                <p className="text-[#4a4a4a] leading-relaxed">{event.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation to Exodus */}
        <section className="mb-16 bg-[#fafafa] p-10 border border-[#e5e5e5]">
          <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-6 text-center">
            Ready to Explore the Exodus?
          </h2>
          <p className="text-base text-[#4a4a4a] mb-8 text-center">
            Learn about the 1990 Kashmiri Pandit exodus and its lasting impact
          </p>
          <div className="flex justify-center">
            <button
              onClick={handleGoToCrisis}
              className="btn-primary"
            >
              Explore the Kashmir Pandit Exodus
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default History;
