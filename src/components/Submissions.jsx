import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Search from './Search'

const Submissions = () => {
  return (
    <>
      <Header />
      <main className="py-8">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <nav className="text-sm text-gray-600 mb-4">
              <span>Home / </span>
              <span className="text-blue-700">Submissions</span>
            </nav>
            
            <h1 className="text-3xl font-bold mb-6">Submissions</h1>
            
            <div className="mb-8 p-4 bg-blue-50 border-l-4 border-blue-500">
              <p className="text-blue-800 font-medium">Login or Register to make a submission.</p>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold mb-4">Submission Preparation Checklist</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  As part of the submission process, authors are required to check off their submission's compliance with all of the following items, and submissions may be returned to authors that do not adhere to these guidelines.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>The submission has not been previously published, nor is it before another journal for consideration (or an explanation has been provided in Comments to the Editor).</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>The submission file is in Microsoft Word document file format.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>The text adheres to the stylistic and bibliographic requirements outlined in the Author Guidelines, which is found in About the Journal.</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Author Guidelines</h2>
                <h3 className="text-lg font-semibold mb-3">ARTICLE GUIDELINES</h3>
                
                <div className="space-y-4 text-gray-700">
                  <div>
                    <p><strong>Page Layout:</strong></p>
                    <p>A4 Portrait, Margins 3cm Left and Right; 2.5cm Top and Bottom</p>
                  </div>
                  
                  <div>
                    <p><strong>Headings</strong> Century Gothic 12pt Bold</p>
                    <p><strong>Sub-headings</strong> Century Gothic 11pt Bold</p>
                    <p><strong>Body Text</strong> Century Gothic 10pt</p>
                  </div>

                  <div>
                    <p><strong>Subdivision - numbered sections:</strong></p>
                    <p>Divide your article into clearly defined and numbered sections. Subsections should be numbered 1.1 (then 1.1.1, 1.1.2, ...), 1.2, etc. (the abstract is not included in section numbering). Use this numbering also for internal cross-referencing: do not just refer to 'the text'. Any subsection may be given a brief heading. Each heading should appear on its own separate line. Sections in bold, subsection Italic.</p>
                    <div className="mt-2 ml-4">
                      <p><em>Example:</em></p>
                      <p>2. Literature Review</p>
                      <p>2.1 Background</p>
                    </div>
                  </div>

                  <div>
                    <p><strong>Equations:</strong></p>
                    <p>Equation Font: Times New Roman 10pt</p>
                    <p>Equation Numbers should be provided and right aligned.</p>
                    <p>Reference Equations as Equation (XXX), etc.</p>
                  </div>

                  <div>
                    <p><strong>Title:</strong></p>
                    <p>Concise and informative.</p>
                  </div>

                  <div>
                    <p><strong>Author names and affiliations:</strong></p>
                    <p>Where the family name may be ambiguous (e.g., a double name), please indicate this clearly. Present the authors' affiliation addresses below the names. Indicate all affiliations with a lower-case superscript letter immediately after the author's name and in front of the appropriate address. Provide the full postal address of each affiliation, including the country name and, if available, the e-mail address of each author.</p>
                  </div>

                  <div>
                    <p><strong>Corresponding author:</strong></p>
                    <p>Clearly indicate who will handle correspondence at all stages of refereeing and publication, also post-publication. Ensure that phone numbers (with country and area code) are provided in addition to the e-mail address and the complete postal address. Contact details must be kept up to date by the corresponding author.</p>
                  </div>

                  <div>
                    <p><strong>Present/permanent address:</strong></p>
                    <p>If an author has moved since the work described in the article was done, or was visiting at the time, a 'Present address' (or 'Permanent address') may be indicated as a footnote to that author's name. The address at which the author actually did the work must be retained as the main, affiliation address. Superscript Arabic numerals are used for such footnotes.</p>
                  </div>

                  <div>
                    <p><strong>Abstract:</strong></p>
                    <p>A concise and factual abstract is required. The abstract should state briefly the purpose of the research, the principal results and major conclusions. An abstract is often presented separately from the article, so it must be able to stand alone. For this reason, References should be avoided, but if essential, then cite the author(s) and year(s). Also, non-standard or uncommon abbreviations should be avoided, but if essential they must be defined at their first mention in the abstract itself.</p>
                  </div>

                  <div>
                    <p><strong>Keywords:</strong></p>
                    <p>Immediately after the abstract, provide a maximum of 6 keywords, using American spelling and avoiding general and plural terms and multiple concepts (avoid, for example, 'and', 'of'). Be sparing with abbreviations: only abbreviations firmly established in the field may be eligible. These keywords will be used for indexing purposes.</p>
                  </div>

                  <div>
                    <p><strong>Abbreviations:</strong></p>
                    <p>Define abbreviations that are not standard in this field in a footnote to be placed on the first page of the article. Such abbreviations that are unavoidable in the abstract must be defined at their first mention there, as well as in the footnote. Ensure consistency of abbreviations throughout the article.</p>
                  </div>

                  <div>
                    <p><strong>Footnotes:</strong></p>
                    <p>Use footnotes instead of endnotes. Number them consecutively throughout the article, using superscript Arabic numbers.</p>
                  </div>

                  <div>
                    <p><strong>Acknowledgements:</strong></p>
                    <p>Collate acknowledgements in a separate section at the end of the article before the references and do not, therefore, include them on the title page, as a footnote to the title or otherwise. List here those individuals who provided help during the research (e.g., providing language help, writing assistance or proof reading the article, etc.).</p>
                  </div>

                  <div>
                    <p><strong>Figure captions:</strong></p>
                    <p>Ensure that each Figure has a caption. Supply captions separately, not attached to the figure. A caption should comprise a brief title (not on the figure itself) and a description of the illustration. Keep text in the illustrations themselves to a minimum but explain all symbols and abbreviations used.</p>
                  </div>

                  <div>
                    <p><strong>Tables:</strong></p>
                    <p>Number tables consecutively in accordance with their appearance in the text. Place notes to tables above the table body. Avoid vertical rules. Be sparing in the use of tables and ensure that the data presented in tables do not duplicate results described elsewhere in the article.</p>
                  </div>

                  <div>
                    <p><strong>References:</strong></p>
                    <p><strong>Citation in text</strong> Please ensure that every reference cited in the text is also present in the reference list (and vice versa).</p>
                    
                    <p><strong>Reference style text:</strong></p>
                    <p>All citations in the text should refer to:</p>
                    <ol className="ml-4 mt-2 space-y-1">
                      <li>1. Single author: the author's name (without initials, unless there is ambiguity) and the year of publication;</li>
                      <li>2. Two authors: both authors' names and the year of publication;</li>
                      <li>3. Three or more authors: first author's name followed by 'et al.' and the year of publication. Citations may be made directly (or parenthetically). Groups of references should be listed first alphabetically, then chronologically.</li>
                    </ol>
                    
                    <p className="mt-3"><em>Examples:</em></p>
                    <p className="ml-4 italic">'as demonstrated (Allan, 2000a, 2000b, 1999; Allan and Jones, 1999). Kramer et al. (2010) have recently shown ....'</p>
                    
                    <p className="mt-3"><strong>List:</strong></p>
                    <p>References should be arranged first alphabetically and then further sorted chronologically if necessary. More than one reference from the same author(s) in the same year must be identified by the letters 'a', 'b', 'c', etc., placed after the year of publication.</p>
                    
                    <p className="mt-3"><em>Examples:</em></p>
                    <div className="ml-4 space-y-2 text-sm">
                      <p><strong>Reference to a journal publication:</strong></p>
                      <p>Van der Geer, J., Hanraads, J.A.J., Lupton, R.A., 2010. The art of writing a scientific article. Journal of Scientific Communication 163, 51–59.</p>
                      
                      <p><strong>Reference to a book:</strong></p>
                      <p>Strunk Jr., W., White, E.B., 2000. The Elements of Style, fourth ed. Longman, New York.</p>
                      
                      <p><strong>Reference to a chapter in an edited book:</strong></p>
                      <p>Mettam, G.R., Adams, L.B., 2009. How to prepare an electronic version of your article, in: Jones, B.S., Smith, R.Z. (Eds.), Introduction to the Electronic Age. E-Publishing Inc., New York, pp. 281–304.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Articles submitted to regular issue</h2>
                <p className="text-gray-700 leading-relaxed">
                  Articles for the regular issue must be submitted using the above Author Guidelines, as MS-Word.doc that can be edited.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Special Issues</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>Current Issues in Applied Finance</strong> is a forthcoming special issue for 2023.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Generally, papers submitted to special issues will have specific requirements but, should <strong>always</strong> be submitted using our style guidelines.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Copyright Notice</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Authors submitting articles for publication warrant that the work is not an infringement of any existing copyright and will indemnify the publisher against any breach of such warranty. By publishing in Applied Finance Letters, the author(s) retain copyright but agree to the dissemination of their work through Applied Finance Letters.
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  By publishing in Applied Finance Letters, the authors grant the Journal a Creative Commons nonexclusive worldwide license (CC-BY-NC-ND: Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License) for electronic dissemination of the article via the Internet, and, a nonexclusive right to license others to reproduce, republish, transmit, and distribute the content of the journal. The authors grant the Journal the right to transfer content (without changing it), to any medium or format necessary for the purpose of preservation.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Authors agree that the Journal will not be liable for any damages, costs, or losses whatsoever arising in any circumstances from its services, including damages arising from the breakdown of technology and difficulties with access.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Privacy Statement</h2>
                <p className="text-gray-700 leading-relaxed">
                  The names and email addresses entered in this journal site will be used exclusively for the stated purposes of this journal and will not be made available for any other purpose or to any other party.
                </p>
              </section>
            </div>
          </div>

          <aside className="lg:col-span-1 space-y-6">
            <Search/>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Submissions
