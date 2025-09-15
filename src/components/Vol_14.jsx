import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Search from "./Search";

const articlesData = [
  {
    title:
      "Effectiveness of Central Bank Swap Lines in Alleviating the Mispricing of FX Swaps at the Start of the COVID-19 Pandemic",
    authors: "Patty Duijm, Kai Schellekens",
    pages: "1-20",
    pdfUrl: "/1.pdf",
  },
  {
    title:
      "ETF flows on volatility of NAV returns: Evidence from Chinese markets",
    authors: "Jiayuan Tian, Seungho Shin, Atsuyuki Naka",
    pages: "21-32",
    pdfUrl: "/2.pdf",
  },
  {
    title:
      "Term Premium Estimates for Brazil in a Model with Survey Expectations",
    authors: "Adonias Evarusto da Costa Filho",
    pages: "33-45",
    pdfUrl: "/3.pdf",
  },
  {
    title:
      "Market Sentiment and Stock Splits Differential Impacts in High and Low Sentiment Regimes",
    authors: "Jitka Hilliard, Haoran Zhang",
    pages: "46-57",
    pdfUrl: "/4.pdf",
  },
  {
    title:
      "Impacts of Financial Knowledge and Health on Household Savings Behavior:  Evidence from the U.S. Survey of Consumer Finances",
    authors: "Lena Gan, Sara Kay",
    pages: "58-79",
    pdfUrl: "/5.pdf",
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
      <main className="py-8">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold">Vol. 14 (2025)</h1>
            <p className="mt-2 text-sm">
              <span className="font-semibold">Published:</span> 2025-05-21
            </p>

            <div className="mt-8">
              <div className="flex items-center gap-4">
                <h2 className="text-lg font-semibold">
                  Articles submitted to regular issue
                </h2>
                <div className="flex-1 border-t" />
              </div>

              <ul className="mt-6 divide-y">
                {filteredArticles.length > 0 ? (
                  filteredArticles.map((a, i) => (
                    <li key={i} className="py-6">
                      <a
                        href="#"
                        className="block text-[#344d85] font-semibold hover:underline"
                      >
                        {a.title}
                      </a>
                      <p className="text-sm text-gray-700 mt-1">{a.authors}</p>
                      <div className="mt-3 flex items-center justify-between">
                        <a
                          href={a.pdfUrl}
                          className="inline-flex items-center px-4 py-2 rounded bg-[#344d85] text-white text-sm"
                        >
                          PDF
                        </a>
                        <span className="text-gray-600 text-sm">{a.pages}</span>
                      </div>
                    </li>
                  ))
                ) : (
                  <p className="py-6 text-gray-500">No articles found</p>
                )}
              </ul>
            </div>
          </div>

          <aside className="lg:col-span-1 space-y-6">
            {/* Pass handleSearch to Search */}
            <Search onSearch={handleSearch} />
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Vol_14;
