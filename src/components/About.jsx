import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Search from './Search'

const About = () => {
  return (
    <>
      <Header />
      <main className="py-8">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <nav className="text-sm text-gray-600 mb-4">
              <span>Home / </span>
              <span className="text-blue-700">About the Journal</span>
            </nav>
            
            <h1 className="text-3xl font-bold mb-6">About the Journal</h1>

            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold mb-4">Focus and Scope</h2>
                <p className="text-gray-700 leading-relaxed">
                  Applied Finance Letters publishes empirical research with implications and relevance for academia and finance industry. The aim is to encourage high-quality contributions that foster discussions among academics, policymakers and financial practitioners.
                </p>
                <p className="text-gray-700 leading-relaxed mt-3">
                  Submitted articles go through a double-blind review process and may be returned to the authors for subsequent revision.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Frequency</h2>
                <p className="text-gray-700 leading-relaxed">
                  In 2019, this journal moved to a continuous publication model. This means that our articles are published online as soon as they are ready. We now have a more efficient publication process and this means that our subscribers have access to our content and cite articles much faster.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Peer Review Process</h2>
                <p className="text-gray-700 leading-relaxed">
                  All content is peer-reviewed and submitted articles go through a double-blind review process.
                </p>
                <p className="text-gray-700 leading-relaxed mt-3">
                  Each paper is reviewed by two reviewers that are selected by the editor in charge. Final decisions for revision or acceptance are made by the editors based on the recommendations provided by the reviewers. Revisions will be based on the comments of the reviewers and editors.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Open Access Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  This journal provides open access to all of its content on the principle that making research freely available to the public supports a greater global exchange of knowledge. Such access is associated with increased readership and increased citation of an author's work. Authors retain full copyright over their articles.
                </p>
                <p className="text-gray-700 leading-relaxed mt-3">
                  Applied Finance Letters does not charge any fees for submission, publication or access to articles.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Plagiarism Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  The authors should ensure that they have written entirely original works, and if the authors have used the work and/or words of others that this has been appropriately cited or quoted. Applied Finance Letters reserves the right to use Turnitin software to screen any article for plagiarism. If evidence of plagiarism is found at any stage, (before or after the publication of the paper) the author will be afforded an opportunity for rebuttal. If the arguments are found to be unsatisfactory, the manuscript will be retracted and the author will be restricted from publishing in our Journal in the future. We accept all terms and conditions of COPE in relation to plagiarism.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Publication Ethics and Publication Malpractice Statements</h2>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Archiving and preservation</h2>
                <p className="text-gray-700 leading-relaxed">
                  This journal's content is preserved using the LOCKSS and CLOCKSS archiving systems.
                </p>
                <p className="text-gray-700 leading-relaxed mt-3">
                  LOCKSS is a distributed archiving system among participating libraries and permits those libraries to create permanent archives of the journal for purposes of preservation and restoration.
                </p>
                <p className="text-gray-700 leading-relaxed mt-3">
                  CLOCKSS is a global archive that preserves content on behalf of all libraries and scholars worldwide. CLOCKSS preserves content in 12 strategically chosen libraries across the globe to optimize the content's safety against political and environmental threats.
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

export default About