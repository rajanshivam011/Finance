import React from 'react';
import { useNavigate } from 'react-router-dom';

const articles = [
  {
    title: 'Sustainable Housing And Social Equity In Rapidly Urbanizing Regions',
    authors: 'Dr. Franklin John Selvaraj1, Dr. Rishi2, Dr. Sunanda I. Kittali3, Dr. Saurabh Chandra4, Sreedevi5,Akansh Garg6',
    pages: '1-11',
    pdfUrl: '/Env/1.pdf',
  },
  {
    title: 'Progressive Bilateral Visual Loss Due To Vincristine Induced Optic Neuropathy ',
    authors: 'Dr Nila C A1, Dr Latha M Sneha2, Dr Roja Raj3, Mr Selvaseelan ',
    pages: '12-17',
    pdfUrl: '/Env/2.pdf',
  },
  {
    title: 'The Role Of GST Reforms In Promoting Efficient Tax Administration And Public Policy Outcomes ',
    authors: '1Rakesh Kumar Jain, * Dr. Anjali Gokhru2',
    pages: '18-35',
    pdfUrl: '/Env/3.pdf',
  },
  {
    title: 'How Do Occupational Therapists in Israel Perceive the Impact of Health Systems Management on their Profession ',
    authors: 'Fatemah Ehaj Akariya',
    pages: '36-44',
    pdfUrl: '/Env/4.pdf',
  },
  {
    title: 'Life Cycle Assessment Of Electric Vehicles: A Comparative Study On Environmental Impact With Conventional Automobiles',
    authors: 'Dr. Pareshkumar D. Patel1, Dr. Sanjay Maganlal Patel2* ,Dr. Samarth Jayeshbhai Shelat3, Dr. NimitM. Patel4 , Dr. Vipul R. Bhatt5 ',
    pages: '41-52',
    pdfUrl: '/Env/5.pdf',
  },
  {
    title: 'Organic Fermented Liquids, Eco-Friendly Approach For Sustainable Agriculture: A Review ',
    authors: 'Pooja Singh Sikarwar1, Sangeeta Tomar2, Pankaj Kumar Sahu',
    pages: '53-63',
    pdfUrl: '/Env/6.pdf',
  },
];

const CurrentIssue = () => {
  const navigate = useNavigate();

  return (
    <section className="py-12 border-t border-gray-200 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between">
          <h2 className="text-3xl font-bold text-purple-900">Current Issue</h2>
          <span className="text-base text-gray-600">Vol. 14 (2025) · Published: 2025-05-21</span>
        </div>
        <ul className="mt-6 space-y-6">
          {articles.map((article, index) => (
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
          ))}
        </ul>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button
            className="px-4 cursor-pointer py-3 rounded-full border border-gray-300 bg-white text-gray-900 text-base font-bold hover:bg-gray-50 active:bg-gray-100 transition-all duration-200 transform hover:scale-105"
            onClick={() => navigate('/current')}
          >
            View All Issues
          </button>
          <button
            className="px-4 py-3 cursor-pointer rounded-full bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 text-gray-900 text-base font-bold transition-all duration-200 transform hover:scale-105"
            onClick={() => navigate('/submissions')}
          >
            Make a Submission
          </button>
        </div>
      </div>
    </section>
  );
};

export default CurrentIssue;