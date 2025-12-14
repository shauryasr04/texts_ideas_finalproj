/*
  THEMES:
  - Theme 5: Memory, Narrative, and Storytelling
  - Theme 9: Representation: Who Gets to Tell the Story?

  This page should note that sources represent different perspectives (historical, literary, 
  journalistic, visual) which together shape how exile in Kashmir is remembered and represented.
*/

function WorksCited() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-8 pt-24 pb-20">
        <h1 className="text-4xl md:text-5xl font-semibold text-[#0a0a0a] mb-12 tracking-tight">Works Cited</h1>

        <p className="text-base text-[#4a4a4a] mb-12 leading-relaxed">
          {/* TODO: Note that these sources represent different perspectives (historical, literary, journalistic, visual) which together shape how exile in Kashmir is remembered and represented (Themes 5, 9). */}
          The sources below represent different perspectives—historical, literary, journalistic, and visual—which together shape how exile in Kashmir is remembered and represented. Each type of source contributes to understanding displacement, memory, and belonging, while also reflecting questions about who gets to tell the story and how narratives are constructed.
        </p>

        {/* Course Texts */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0a0a0a] mb-8 tracking-tight">Course Texts</h2>
          <ul className="space-y-4 text-[#4a4a4a]">
            <li className="pl-6 border-l-2 border-[#e5e5e5]">
              TODO: Author Lastname, Firstname. <em className="text-[#0a0a0a]">Title of Work</em>. Publisher, Year.
            </li>
            <li className="pl-6 border-l-2 border-[#e5e5e5]">
              TODO: Sophocles. <em className="text-[#0a0a0a]">Antigone</em>. Translated by Firstname Lastname, Publisher, Year.
            </li>
            <li className="pl-6 border-l-2 border-[#e5e5e5]">
              TODO: Ovid. <em className="text-[#0a0a0a]">Tristia</em>. Translated by Firstname Lastname, Publisher, Year.
            </li>
            <li className="pl-6 border-l-2 border-[#e5e5e5]">
              TODO: Add additional course texts as needed.
            </li>
          </ul>
        </section>

        {/* Secondary Scholarship */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0a0a0a] mb-8 tracking-tight">Secondary Scholarship</h2>
          <ul className="space-y-4 text-[#4a4a4a]">
            <li className="pl-6 border-l-2 border-[#e5e5e5]">
              TODO: Bose, Sumantra. <em className="text-[#0a0a0a]">Kashmir: Roots of Conflict, Paths to Peace</em>. 
              Harvard University Press, 2003.
            </li>
            <li className="pl-6 border-l-2 border-[#e5e5e5]">
              TODO: Bhat, Javaid. <em className="text-[#0a0a0a]">Title of Work</em>. Publisher, Year.
            </li>
            <li className="pl-6 border-l-2 border-[#e5e5e5]">
              TODO: Tremblay, Reeta Chowdhari. <em className="text-[#0a0a0a]">Title of Work</em>. Publisher, Year.
            </li>
            <li className="pl-6 border-l-2 border-[#e5e5e5]">
              TODO: Kaul, Nitasha. <em className="text-[#0a0a0a]">Title of Work</em>. Publisher, Year.
            </li>
            <li className="pl-6 border-l-2 border-[#e5e5e5]">
              TODO: Add additional scholarly sources on displacement, migration, and Kashmir.
            </li>
            <li className="pl-6 border-l-2 border-[#e5e5e5]">
              TODO: "Article Title." <em className="text-[#0a0a0a]">Journal Name</em>, vol. X, no. Y, Year, pp. XX-XX.
            </li>
            <li className="pl-6 border-l-2 border-[#e5e5e5]">
              TODO: IJSSRR. "Article Title." <em className="text-[#0a0a0a]">International Journal Name</em>, Year.
            </li>
          </ul>
        </section>

        {/* Multimedia & Web Resources */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0a0a0a] mb-8 tracking-tight">Multimedia & Web Resources</h2>
          <ul className="space-y-4 text-[#4a4a4a]">
            <li className="pl-6 border-l-2 border-[#e5e5e5]">
              TODO: "Documentary Title." <em className="text-[#0a0a0a]">Production Company</em>, Year. URL (if applicable).
            </li>
            <li className="pl-6 border-l-2 border-[#e5e5e5]">
              TODO: "Website Title." <em className="text-[#0a0a0a]">Organization Name</em>, Date of Access. URL.
            </li>
            <li className="pl-6 border-l-2 border-[#e5e5e5]">
              TODO: "Article Title." <em className="text-[#0a0a0a]">Website Name</em>, Date Published. URL. Accessed Date.
            </li>
            <li className="pl-6 border-l-2 border-[#e5e5e5]">
              TODO: Add additional multimedia sources, archival materials, or web resources.
            </li>
          </ul>
        </section>

        {/* Note */}
        <div className="bg-[#fafafa] border-l-4 border-[#0a0a0a] p-10 mt-12">
          <p className="text-[#4a4a4a] italic leading-relaxed">
            Note: All citations follow MLA style. Replace placeholder entries with actual 
            citations from your research. Ensure proper formatting, including hanging indents 
            for entries longer than one line.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WorksCited;

