/*
  THEMES:
  - Theme 1: Exile as a Human Condition
  - Theme 5: Memory, Narrative, and Storytelling
  - Theme 8: Colonialism, Postcolonialism, and Geopolitics
  - Theme 9: Representation: Who Gets to Tell the Story?
  - Theme 10: Transnationalism & Global Parallels

  This page should explain the project's rationale, methodology, and relationship to course 
  themes. It should acknowledge representation and limitations, and explicitly connect the 
  site to central course themes of exile, borders, memory, and identity.
*/

function About() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-kashmir-800 mb-8">About</h1>

        {/* Project Rationale */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-kashmir-800 mb-6">Project Rationale</h2>
          
          <div className="space-y-4">
            <p className="text-lg text-kashmir-700 leading-relaxed">
              {/* TODO: State clearly that the project explores exile and belonging in Kashmir as part of a broader human and global pattern (Themes 1, 10). */}
              This project explores exile and belonging in Kashmir as part of a broader human and global pattern. The region serves as a case study for understanding exile, displacement, and belonging, with multiple groups (Pandits, Muslims, Sindhi migrants) providing nuanced perspectives on these themes.
            </p>
            <p className="text-lg text-kashmir-700 leading-relaxed">
              Exile and migration are central themes because they illuminate how identity, memory, and political belonging are negotiated in contexts of conflict and displacement. The Kashmiri case connects to broader questions about home, homeland, and the human experience of forced movement.
            </p>
          </div>
        </section>

        {/* Methodology */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-kashmir-800 mb-6">Methodology</h2>
          
          <ul className="space-y-3 text-lg text-kashmir-700">
            <li className="flex items-start">
              <span className="text-saffron-600 mr-3">•</span>
              <span>
                <strong>Historical Sources: </strong>
                {/* TODO: Describe use of historical sources, primary documents, and archival materials (Theme 8). */}
                Historical sources, primary documents, and archival materials provide context for understanding colonial and postcolonial dynamics that shape displacement in Kashmir.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-saffron-600 mr-3">•</span>
              <span>
                <strong>Scholarly Articles on Displacement: </strong>
                {/* TODO: Describe how the project uses historical scholarship, testimonies, and course texts as narrative and analytical tools (Themes 5, 8). */}
                Secondary scholarship on displacement, migration, and exile (e.g., works by Bose, Bhat, Tremblay) provides analytical frameworks for understanding forced movement and belonging.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-saffron-600 mr-3">•</span>
              <span>
                <strong>Course Texts: </strong>
                {/* TODO: Describe how the project uses historical scholarship, testimonies, and course texts as narrative and analytical tools (Themes 5, 8). */}
                Course texts (Ovid's Tristia, Antigone, Exit West, etc.) provide theoretical and literary frameworks for understanding exile and displacement, connecting classical and contemporary narratives.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-saffron-600 mr-3">•</span>
              <span>
                <strong>Testimonies and Personal Narratives: </strong>
                {/* TODO: Describe how the project uses historical scholarship, testimonies, and course texts as narrative and analytical tools (Themes 5, 8). */}
                Personal testimonies and narratives complement historical and scholarly accounts, foregrounding individual voices and lived experiences of displacement, memory, and identity.
              </span>
            </li>
          </ul>
        </section>

        {/* Representation and Limitations */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-kashmir-800 mb-6">Representation and Limitations</h2>
          
          <div className="space-y-4">
            <p className="text-lg text-kashmir-700 leading-relaxed">
              {/* TODO: Acknowledge that this is a curated academic project based on existing sources, not original fieldwork, and reflect on what that means for whose stories are centered (Theme 9). */}
              This is a curated academic project based on existing sources, not original fieldwork. This means certain perspectives may be overrepresented while others are missing. The project acknowledges scope limitations, methodological constraints, gaps in available sources, and challenges in representing diverse perspectives.
            </p>
            <p className="text-lg text-kashmir-700 leading-relaxed">
              Ethical considerations include how the project handles sensitive topics, represents marginalized voices, avoids perpetuating harmful narratives, and respects the complexity and dignity of the experiences being examined. Issues of representation, consent (for testimonies), and researcher responsibility in contexts of ongoing conflict require careful reflection.
            </p>
          </div>
        </section>

        {/* Relation to Course Themes */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-kashmir-800 mb-6">Relation to Course Themes</h2>
          
          <div className="space-y-4">
            <p className="text-lg text-kashmir-700 leading-relaxed">
              {/* TODO: Explicitly tie the site back to central course themes of exile, borders, memory, and identity, with references to key texts and films (Themes 1, 4, 5, 6, 10). */}
              This project explicitly connects to central course themes of exile, borders, memory, and identity. The Kashmiri case study illuminates broader questions about exile as a human condition, forced movement and border-making, memory and storytelling, identity formation in diaspora, and transnational parallels. Key course texts—from Ovid's Tristia to contemporary works—provide frameworks for understanding these themes.
            </p>
            <p className="text-lg text-kashmir-700 leading-relaxed">
              The project contributes to understanding the relationship between individual experiences and collective narratives, the role of memory in shaping identity, and the political dimensions of belonging and exclusion. It situates Kashmir within global patterns of displacement while attending to the specific historical, political, and cultural contexts that shape exile and belonging in the region.
            </p>
          </div>
        </section>

        {/* Author/Project Info */}
        <section className="bg-kashmir-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-kashmir-800 mb-4">Project Information</h2>
          <div className="space-y-2 text-kashmir-700">
            <p>
              <strong>Course: </strong>
              TODO: Insert course name (e.g., "Texts & Ideas: Exile & Belonging")
            </p>
            <p>
              <strong>Institution: </strong>
              TODO: Insert institution name
            </p>
            <p>
              <strong>Date: </strong>
              TODO: Insert date or semester
            </p>
            <p>
              <strong>Author: </strong>
              TODO: Insert your name (optional)
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;

