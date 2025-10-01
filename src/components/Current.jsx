import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Search from './Search';

const articles = [
  {
    title: 'Recycling Domino as a Didactic Strategy for Learning Integrated Urban Waste Management',
    authors: 'Dajil Turizo, Yerine Zuley, Peláez Garizado, Lineis Maholis, Vallejo Ochoa, Ana Carolin, López López, Jimmy Henry (Author)',
    pages: '1-11',
    pdfUrl: '/Env/1.pdf',
  },
  {
    title: 'Use Of Technology In Afro-Descendant Contexts: Improving The Quality Of Education',
    authors: 'Luz Mary Sierra, Ana Julia Bozo De Carmona (Author)',
    pages: '12-17',
    pdfUrl: '/Env/2.pdf',
  },
  {
    title: 'Traditional Utilization of Plants for Malaria Prevention and Treatment by The Sumba Tribe, East Nusa Tenggara',
    authors: 'Oktafina Mone, Purnomo, Abdul Razaq Chasani (Author)',
    pages: '18-33',
    pdfUrl: '/Env/3.pdf',
  },
  {
    title: 'Optimum Use of Rainwater Harvesting Case Study: An Indonesian Fivestar-Hotel',
    authors: 'Wulandini, Haifa Al Kautsar, Djoko Sihono Gabriel (Author)',
    pages: '34-40',
    pdfUrl: '/Env/4.pdf',
  },
  {
    title: 'Modular Distance Learning and the Academic Performance of Young Learners in Cebu South',
    authors: 'Helen O. Revalde (Author)',
    pages: '41-52',
    pdfUrl: '/Env/5.pdf',
  },
  {
    title: 'Automated Image Recognition of Staminate and Pistillate Flowers in Cucurbit Crops for Precision Pollination and Growth Management',
    authors: 'Kuo-Dung Chiou, Shin-Hau Chiou, Yi-Zhen Chen, Yu-Shen Liang, Chia-Ying Chang (Author)',
    pages: '53-59',
    pdfUrl: '/Env/6.pdf',
  },
];

const Current = () => {
  const [filteredArticles, setFilteredArticles] = useState(articles);

  const handleSearch = (query) => {
    const results = articles.filter((a) =>
      a.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredArticles(results);
  };

  return (
    <>
      <Header />
      <main className="py-12 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-purple-900 tracking-tight">
              Vol. 14 (2025)
            </h1>
            <p className="mt-2 text-base text-gray-700">
              <span className="font-semibold">Published:</span> 2025-05-21
            </p>

            <div className="mt-8">
              <div className="flex items-center gap-4">
                <h2 className="text-xl font-bold text-purple-900">
                  Articles submitted to regular issue
                </h2>
                <div className="flex-1 border-t border-purple-300" />
              </div>

              <ul className="mt-6 space-y-6">
                {filteredArticles.length > 0 ? (
                  filteredArticles.map((article, index) => (
                    <li
                      key={index}
                      className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                    >
                      <a
                        href={article.pdfUrl}
                        className="block text-lg font-bold text-purple-700 hover:text-purple-800 hover:underline transition-colors duration-200"
                      >
                        {article.title}
                      </a>
                      <p className="mt-2 text-base text-gray-700">{article.authors}</p>
                      <div className="mt-4 flex items-center justify-between">
                        <a
                          href={article.pdfUrl}
                          className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 text-gray-900 text-base font-bold transition-all duration-200 transform hover:scale-105"
                        >
                          PDF
                        </a>
                        <span className="text-base text-gray-600">Pages: {article.pages}</span>
                      </div>
                    </li>
                  ))
                ) : (
                  <p className="py-6 text-base text-gray-500">No articles found</p>
                )}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <Search
              onSearch={handleSearch}
              className="bg-white border border-gray-200 rounded-lg shadow-sm p-4"
            />
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Current;