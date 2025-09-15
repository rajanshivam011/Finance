import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Search from './Search'

const Editorial_team = () => {
  return (
    <>
      <Header />
      <main className="py-8">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold mb-6">Editorial Team</h1>

            <section className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-3">Editors-in-Chief</h2>
                <ul className="space-y-3">
                  <li>
                    <strong>Olga Dodd</strong>, <em>Auckland University of Technology</em>, New Zealand (Director of ACFR)
                  </li>
                  <li>
                    <strong>Alireza Tourani-Rad</strong>, <em>Auckland University of Technology</em>, New Zealand
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">Editorial Board</h2>
                <ul className="space-y-2 text-[15px] leading-7">
                  <li><strong>Christina Atanasova</strong>, <em>Simon Fraser University</em>, Canada</li>
                  <li><strong>Rainer Baule</strong>, <em>University of Hagen</em>, Germany</li>
                  <li><strong>Adrian Fernandez-Perez</strong>, University College Dublin, Ireland</li>
                  <li><strong>Bart Frijns</strong>, <em>Open Universiteit</em>, the Netherlands</li>
                  <li><strong>Ivan Indriawan</strong>, <em>Adelaide University</em>, Australia</li>
                  <li><strong>Madhu Kalimipalli</strong>, <em>Wilfried Laurier University</em>, Canada</li>
                  <li><strong>Nick Nguyen</strong>, <em>Auckland University of Technology</em>, New Zealand</li>
                  <li><strong>Stefanie Kleimeier</strong>, <em>Maastricht University</em>, Netherlands</li>
                  <li><strong>James Kolari</strong>, <em>Texas A&M University</em>, United States</li>
                  <li><strong>Marie Lambert</strong>, <em>University of Liege</em>, Belgium</li>
                  <li><strong>Thorsten Lehnert</strong>, <em>Luxembourg School of Finance</em>, Luxembourg</li>
                  <li><strong>Yulia Merkoulova</strong>, <em>Monash University</em>, Australia</li>
                  <li><strong>Simon Sosvilla-Rivero</strong>, <em>Universidad Complutense de Madrid, Spain</em></li>
                  <li><strong>Qian Sun</strong>, <em>Fudan University</em>, China</li>
                </ul>
              </div>
            </section>
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

export default Editorial_team