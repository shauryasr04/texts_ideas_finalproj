/*
  THEMES:
  - Theme 5: Memory, Narrative, and Storytelling
  - Theme 9: Representation: Who Gets to Tell the Story?

  This page should note that sources represent different perspectives (historical, literary, 
  journalistic, visual) which together shape how exile in Kashmir is remembered and represented.
*/

function WorksCited() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-kashmir-800 mb-8">Works Cited</h1>

        <p className="text-lg text-kashmir-700 mb-8 leading-relaxed">
          {/* TODO: Note that these sources represent different perspectives (historical, literary, journalistic, visual) which together shape how exile in Kashmir is remembered and represented (Themes 5, 9). */}
          The sources below represent different perspectives—historical, literary, journalistic, and visual—which together shape how exile in Kashmir is remembered and represented. Each type of source contributes to understanding displacement, memory, and belonging, while also reflecting questions about who gets to tell the story and how narratives are constructed.
        </p>

        {/* Course Texts */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-kashmir-800 mb-6">Course Texts</h2>
          <ul className="space-y-3 text-kashmir-700">
            <li className="pl-4">
              TODO: Author Lastname, Firstname. <em>Title of Work</em>. Publisher, Year.
            </li>
            <li className="pl-4">
              TODO: Sophocles. <em>Antigone</em>. Translated by Firstname Lastname, Publisher, Year.
            </li>
            <li className="pl-4">
              TODO: Ovid. <em>Tristia</em>. Translated by Firstname Lastname, Publisher, Year.
            </li>
            <li className="pl-4">
              TODO: Add additional course texts as needed.
            </li>
          </ul>
        </section>

        {/* Secondary Scholarship */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-kashmir-800 mb-6">Secondary Scholarship</h2>
          <ul className="space-y-3 text-kashmir-700">
            <li className="pl-4">
              TODO: Bose, Sumantra. <em>Kashmir: Roots of Conflict, Paths to Peace</em>. 
              Harvard University Press, 2003.
            </li>
            <li className="pl-4">
              TODO: Bhat, Javaid. <em>Title of Work</em>. Publisher, Year.
            </li>
            <li className="pl-4">
              TODO: Tremblay, Reeta Chowdhari. <em>Title of Work</em>. Publisher, Year.
            </li>
            <li className="pl-4">
              TODO: Kaul, Nitasha. <em>Title of Work</em>. Publisher, Year.
            </li>
            <li className="pl-4">
              TODO: Add additional scholarly sources on displacement, migration, and Kashmir.
            </li>
            <li className="pl-4">
              TODO: "Article Title." <em>Journal Name</em>, vol. X, no. Y, Year, pp. XX-XX.
            </li>
            <li className="pl-4">
              TODO: IJSSRR. "Article Title." <em>International Journal Name</em>, Year.
            </li>
          </ul>
        </section>

        {/* Multimedia & Web Resources */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-kashmir-800 mb-6">Multimedia & Web Resources</h2>
          <ul className="space-y-3 text-kashmir-700">
            <li className="pl-4">
              TODO: "Documentary Title." <em>Production Company</em>, Year. URL (if applicable).
            </li>
            <li className="pl-4">
              TODO: "Website Title." <em>Organization Name</em>, Date of Access. URL.
            </li>
            <li className="pl-4">
              TODO: "Article Title." <em>Website Name</em>, Date Published. URL. Accessed Date.
            </li>
            <li className="pl-4">
              TODO: Add additional multimedia sources, archival materials, or web resources.
            </li>
          </ul>
        </section>

        {/* Note */}
        <div className="bg-kashmir-50 p-6 rounded-lg mt-8">
          <p className="text-kashmir-700 italic">
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

