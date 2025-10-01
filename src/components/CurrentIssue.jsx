import React from 'react'
import { useNavigate } from 'react-router-dom'

// const articles = [
//   { title: '', authors: 'Patty Duijm, Kai Schellekens', pages: '1-20', pdfUrl: '/1.pdf' },
//   { title: 'ETF flows on volatility of NAV returns: Evidence from Chinese markets', authors: 'Jiayuan Tian, Seungho Shin, Atsuyuki Naka', pages: '21-32', pdfUrl: '/2.pdf' },
//   { title: 'Term Premium Estimates for Brazil in a Model with Survey Expectations', authors: 'Adonias Evarusto da Costa Filho', pages: '33-45', pdfUrl: '/3.pdf' },
//   { title: 'Market Sentiment and Stock Splits Differential Impacts in High and Low Sentiment Regimes', authors: 'Jitka Hilliard, Haoran Zhang', pages: '46-57', pdfUrl: '/4.pdf' },
//   { title: 'Impacts of Financial Knowledge and Health on Household Savings Behavior:  Evidence from the U.S. Survey of Consumer Finances', authors: 'Lena Gan, Sara Kay', pages: '58-79', pdfUrl: '/5.pdf' },
// ]
const articles=[
  { title: 'Recycling Domino as a Didactic Strategy for Learning Integrated Urban Waste Management', authors: 'Dajil Turizo, Yerine Zuley, Peláez Garizado, Lineis Maholis, Vallejo Ochoa, Ana Carolin, López López, Jimmy Henry (Author)', pages: '1-11', pdfUrl: '/Env/1.pdf' },
  { title: 'Use Of Technology In Afro-Descendant Contexts: Improving The Quality Of Education', authors: 'Luz Mary Sierra, Ana Julia Bozo De Carmona (Author)', pages: '12-17', pdfUrl: '/Env/2.pdf' },  
  { title: 'Traditional Utilization of Plants for Malaria Prevention and Treatment by The Sumba Tribe, East Nusa Tenggara', authors: 'Oktafina Mone, Purnomo, Abdul Razaq Chasani (Author)', pages: '18-33', pdfUrl: '/Env/3.pdf' },
  { title: 'Optimum Use of Rainwater Harvesting Case Study: An Indonesian Fivestar-Hotel', authors: 'Wulandini, Haifa Al Kautsar, Djoko Sihono Gabriel (Author)', pages: '34-40', pdfUrl: '/Env/4.pdf' },  
  { title: 'Modular Distance Learning and the Academic Performance of Young Learners in Cebu South', authors: 'Helen O. Revalde (Author)', pages: '41-52', pdfUrl: '/Env/5.pdf' },
  { title: 'Automated Image Recognition of Staminate and Pistillate Flowers in Cucurbit Crops for Precision Pollination and Growth Management', authors: 'Kuo-Dung Chiou, Shin-Hau Chiou, Yi-Zhen Chen, Yu-Shen Liang, Chia-Ying Chang (Author)', pages: '53-59', pdfUrl: '/Env/6.pdf' },  

]
const CurrentIssue = () => {
  const navigator=useNavigate();
  return (
    <section className="py-8 border-t">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-bold">Current Issue</h2>
          <span className="text-sm text-gray-600">Vol. 14 (2025) · Published: 2025-05-21</span>
        </div>
        <ul className="mt-4 divide-y">
          {articles.map((a, i) => (
            <li key={i} className="py-6">
              <a href="#" className="block text-[#344d85] font-semibold hover:underline">
                {a.title}
              </a>
              <p className="text-sm text-gray-700 mt-1">{a.authors}</p>
              <div className="mt-3 flex items-center justify-between">
                <a href={a.pdfUrl} className="inline-flex items-center px-4 py-2 rounded bg-[#344d85] text-white text-sm">PDF</a>
                <span className="text-gray-600 text-sm">{a.pages}</span>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <button className="px-4 py-2 rounded border cursor-pointer" onClick={()=>{navigator('/current')}}>View All Issues</button>
          <button className="ml-3 px-4 py-2 rounded border cursor-pointer" onClick={()=>{navigator('/submissions')}}>Make a Submission</button>
        </div>
      </div>
    </section>
  )
}

export default CurrentIssue


