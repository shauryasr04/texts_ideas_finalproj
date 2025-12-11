import { useState } from "react";
import { testimonies } from "../data/testimonies";

/*
  THEMES:
  - Theme 5: Memory, Narrative, and Storytelling
  - Theme 6: Identity Formation in Diaspora
  - Theme 7: Trauma, Loss, and Psychological Displacement
  - Theme 9: Representation: Who Gets to Tell the Story?

  This page should foreground individual stories and voices to humanize displacement, 
  showing how identity, memory, and trauma appear in people's own words. It should also 
  reflect on representation and whose voices are included or missing.
*/

function Voices() {
  const [filter, setFilter] = useState("All");

  const filterOptions = ["All", "Kashmiri Pandit", "Kashmiri Muslim", "Sindhi Migrant"];

  const filteredTestimonies =
    filter === "All"
      ? testimonies
      : testimonies.filter((testimony) => testimony.group === filter);

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-kashmir-800 mb-8">Voices & Testimonies</h1>

        <p className="text-lg text-kashmir-700 mb-8 leading-relaxed">
          {/* TODO: Explain that this page foregrounds individual stories and voices to humanize displacement (Theme 5). */}
          This page foregrounds individual stories and voices to humanize displacement, exile, and memory. Personal narratives and testimonies provide insight into lived experiences that complement historical and scholarly accounts, showing how identity, memory, and trauma appear in people's own words.
        </p>

        {/* Filter Bar */}
        <div className="mb-8 flex flex-wrap gap-2">
          {filterOptions.map((option) => (
            <button
              key={option}
              onClick={() => setFilter(option)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === option
                  ? "bg-kashmir-600 text-white"
                  : "bg-kashmir-200 text-kashmir-700 hover:bg-kashmir-300"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Testimony Cards */}
        <div className="space-y-6">
          {filteredTestimonies.length === 0 ? (
            <p className="text-kashmir-600 text-center py-8">
              No testimonies found for the selected filter.
            </p>
          ) : (
            filteredTestimonies.map((testimony) => (
              <div
                key={testimony.id}
                className="bg-white border border-kashmir-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-kashmir-100 text-kashmir-700 rounded-full text-sm font-medium">
                    {testimony.group}
                  </span>
                  <span className="px-3 py-1 bg-kashmir-100 text-kashmir-700 rounded-full text-sm font-medium">
                    {testimony.generation}
                  </span>
                </div>

                <blockquote className="text-lg text-kashmir-700 italic mb-4 leading-relaxed border-l-4 border-kashmir-300 pl-4">
                  "{testimony.quote}"
                </blockquote>

                <p className="text-sm text-kashmir-600">
                  <span className="font-medium">Source: </span>
                  {testimony.source}
                </p>
              </div>
            ))
          )}
        </div>

        {/* Additional Context Section */}
        <section className="mt-12 bg-kashmir-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-kashmir-800 mb-4">About These Voices</h2>
          <p className="text-kashmir-700 leading-relaxed mb-4">
            {/* TODO: Choose short quotes or paraphrased testimonies that show how identity, memory, and trauma appear in people's own words (Themes 5, 6, 7). */}
            The testimonies above are selected to show how identity, memory, and trauma appear in people's own words. Each voice represents individual experiences that, together, illuminate broader patterns of displacement, exile, and belonging.
          </p>
          <p className="text-kashmir-700 leading-relaxed">
            {/* TODO: Reflect briefly on whose voices are included and which perspectives might be missing, tying into the ethics of representation (Theme 9). */}
            It is important to reflect on whose voices are included here and which perspectives might be missing. This is a curated selection based on available sources, and gaps in representation reflect broader questions about who gets to tell the story of displacement and exile in Kashmir.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Voices;

