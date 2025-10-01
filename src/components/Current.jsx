import React from 'react'
import Header from './Header'
import Footer from './Footer'

// const articles = [
//   {
//     title: 'Effectiveness of Central Bank Swap Lines in Alleviating the Mispricing of FX Swaps at the Start of the COVID-19 Pandemic',
//     authors: 'Patty Duijm, Kai Schellekens',
//     pages: '1-20',
//     pdfUrl: '#'
//   },
//   {
//     title: 'ETF flows on volatility of NAV returns: Evidence from Chinese markets',
//     authors: 'Jiayuan Tian, Seungho Shin, Atsuyuki Naka',
//     pages: '21-32',
//     pdfUrl: '#'
//   },
//   {
//     title: 'Term Premium Estimates for Brazil in a Model with Survey Expectations',
//     authors: 'Adonias Evarusto da Costa Filho',
//     pages: '33-45',
//     pdfUrl: '#'
//   }
// ]

const articles=[
  { title: 'Recycling Domino as a Didactic Strategy for Learning Integrated Urban Waste Management', authors: 'Dajil Turizo, Yerine Zuley, Peláez Garizado, Lineis Maholis, Vallejo Ochoa, Ana Carolin, López López, Jimmy Henry (Author)', pages: '1-11', pdfUrl: '/Env/1.pdf' },
  { title: 'Use Of Technology In Afro-Descendant Contexts: Improving The Quality Of Education', authors: 'Luz Mary Sierra, Ana Julia Bozo De Carmona (Author)', pages: '12-17', pdfUrl: '/Env/2.pdf' },  
  { title: 'Traditional Utilization of Plants for Malaria Prevention and Treatment by The Sumba Tribe, East Nusa Tenggara', authors: 'Oktafina Mone, Purnomo, Abdul Razaq Chasani (Author)', pages: '18-33', pdfUrl: '/Env/3.pdf' },
  { title: 'Optimum Use of Rainwater Harvesting Case Study: An Indonesian Fivestar-Hotel', authors: 'Wulandini, Haifa Al Kautsar, Djoko Sihono Gabriel (Author)', pages: '34-40', pdfUrl: '/Env/4.pdf' },  
  { title: 'Modular Distance Learning and the Academic Performance of Young Learners in Cebu South', authors: 'Helen O. Revalde (Author)', pages: '41-52', pdfUrl: '/Env/5.pdf' },
  { title: 'Automated Image Recognition of Staminate and Pistillate Flowers in Cucurbit Crops for Precision Pollination and Growth Management', authors: 'Kuo-Dung Chiou, Shin-Hau Chiou, Yi-Zhen Chen, Yu-Shen Liang, Chia-Ying Chang (Author)', pages: '53-59', pdfUrl: '/Env/6.pdf' },  

]
const Current = () => {
  return (

    <>
      <Header />
      <main className="py-8">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold">Vol. 14 (2025)</h1>
            <p className="mt-2 text-sm"><span className="font-semibold">Published:</span> 2025-05-21</p>

            <div className="mt-8">
              <div className="flex items-center gap-4">
                <h2 className="text-lg font-semibold">Articles submitted to regular issue</h2>
                <div className="flex-1 border-t" />
              </div>

              <ul className="mt-6 divide-y">
                {articles.map((a, i) => (
                  <li key={i} className="py-6">
                    <a href="#" className="block text-[#133B75] font-semibold hover:underline">
                      {a.title}
                    </a>
                    <p className="text-sm text-gray-700 mt-1">{a.authors}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <a href={a.pdfUrl} className="inline-flex items-center px-4 py-2 rounded bg-[#133B75] text-white text-sm">PDF</a>
                      <span className="text-gray-600 text-sm">{a.pages}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="lg:col-span-1 space-y-6">
            <div className="p-4 bg-white shadow border rounded">
              <button className="w-full px-4 py-2 rounded bg-blue-600 text-white font-semibold">Make a Submission</button>
            </div>
            <div className="p-4 bg-white shadow border rounded">
              <label htmlFor="searchAfl" className="block text-sm font-medium mb-2">Search AFL</label>
              <input id="searchAfl" type="text" placeholder="Search AFL" className="w-full border rounded px-3 py-2 mb-3" />
              <button className="px-4 py-2 rounded bg-blue-600 text-white">Search</button>
            </div>
            <div className="p-4 bg-white shadow border rounded text-sm">
              <p className="font-semibold mb-2">Applied Finance Letters</p>
              <p className="mt-1">Print ISSN: 2253-5799</p>
              <p>Online ISSN: 2253-5802</p>
              <p className="mt-3">Published by the Auckland Centre for Financial Research.</p>
              <img src="/vite.svg" alt="Auckland Centre for Financial Research" className="h-10 w-auto mt-3" />
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Current
