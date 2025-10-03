import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Search from './Search';

const articlesData = [
  {
    title: 'Sustainable Housing And Social Equity In Rapidly Urbanizing Regions',
    authors:
      'Dr. Franklin John Selvaraj, Dr. Rishi, Dr. Sunanda I. Kittali, Dr. Saurabh Chandra, Sreedevi, Akansh Garg (Author)',
    pages: '1-10',
    pdfUrl: '/vol-14/1.pdf',
  },
  {
    title: 'Finite Element Analysis And Experimental Validation Of Fiber-Reinforced Polymer Composites Under Flexural Loading',
    authors: 'Dr. Devendra Pratap Singh1, Dr. Pradeep A R2, Laxman Baburao Abhang3, Dr. Brijesh Shankarrao Deshmukh4, Anil Kumar5, Nilesh Baburao Landge6',
    pages: '1312-1328',
    pdfUrl: '/vol-14/2.pdf',
  },
  {
    title:
      'AI-Enhanced Blockchain Frameworks For Circular Economy: Driving Transparency In Waste Management And Resource Recovery ',
    authors:
      'Dr.Gumpina Babu Rao1, Dr.C.John Paul2, Rahul Laxman Pawar3, Dr.Roopa Jayasingh.J4, Dr.Sumit Kushwaha',
    pages: '1329-1341',
    pdfUrl: '/vol-14/3.pdf',
  },
  {
    title: 'Hooked on Hearts: The Role of Social Media Validation in Behavioral Addiction',
    authors: 'Payal Jain, Tehseen Saleem (Author)',
    pages: '1342-1348',
    pdfUrl: '/vol-14/4.pdf',
  },
  {
    title: 'A Study On The Effects Of Social Pressure And Personal Control On E-Commerce Adoption',
    authors: 'Ms. Shakti Shukla, Deepti Mehlawat, Dr Anita Singh, Dr Anubha Vashisht, Dr Uma (Author)',
    pages: '1349-1357',
    pdfUrl: '/vol-14/5.pdf',
  },
  {
    title:
      'A Prospective Comparative Study Of Proximal Femoral Nailing And Bipolar Hemiarthroplasty In Comminuted Intertrochanteric Fractures',
    authors: 'Dr. Chethan Gowda M, Dr. Mahesh D V, Dr.Rajeevratna Suresh Naik, Dr. Vineeth K S (Author)',
    pages: '1358-1363',
    pdfUrl: '/vol-14/6.pdf',
  },
  {
    title: 'Study The Efficacy of Chatuhsama Yoga in Ama Atisara in Children',
    authors: 'Dr. Sneha Solapure, Dr. Preetham pai (Author)',
    pages: '1358-1363',
    pdfUrl: '/vol-14/7.pdf',
  },
  {
    title:
      'An Observational Study on the Therapeutic Application of Raktamokshana by Ayurvedic Practitioners in Pune City',
    authors: 'Dr. Shrutee Diliprao Lad, Dr. Madhuri P. Bhide, Dr. Swapnil J. Biradar Patil (Author)',
    pages: '1364-1369',
    pdfUrl: '/vol-14/8.pdf',
  },
];

const Vol_14 = () => {
  const [filteredArticles, setFilteredArticles] = useState(articlesData);

  const handleSearch = (query) => {
    const results = articlesData.filter((a) =>
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

export default Vol_14;