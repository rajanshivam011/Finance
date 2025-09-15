import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Search from "./Search";

const articlesData = [
  {
    title:
      "THE JANUARY ANOMALY AND ANOMALIES IN JANUARY",
    authors: "Steven Kozlowski, Alex Lytle",
    pages: "2-10",
    pdfUrl: "/1.pdf",
  },
  {
    title:
      "MEASURING VALUATION UNCERTAINTY: A PCA APPROACH",
    authors: "John Garcia",
    pages: "12-21",
    pdfUrl: "/2.pdf",
  },
  {
    title:
      "EQUITY PLEDGE, PLEDGOR TYPE AND INVESTMENT EFFICIENCY",
    authors: "Karren Lee-Hwei Khaw, Jiaying Chen, Muhammad Awais Gulzar, Ahmad Hakimi Tajuddin",
    pages: "22-32",
    pdfUrl: "/3.pdf",
  },
  {
    title:
      "COVID-19: PERFORMANCE OF ESG ETFS AND, ESG ETFS VS. THEIR DECLARED INDEXES",
    authors: "Huong Nguyen",
    pages: "33-43",
    pdfUrl: "/4.pdf",
  },
  {
    title:
      "HIGH-FREQUENCY TRANSACTION DATA: A COMPARISON BETWEEN TWO ASYMMETRIC MODELS",
    authors: "Michael Kunkler",
    pages: "55-69",
    pdfUrl: "/5.pdf",
  },
   {
    title:
      "THE MARKET VALUE OF DECENTRALISATION",
    authors: "Matt Brigida",
    pages: "70-76",
    pdfUrl: "/5.pdf",
  },
   {
    title:
      "DOES LEVERAGE PAY OFF? THE CASE OF EQUITY-LEVERAGED MUTUAL FUNDS",
    authors: "Javier Rodriguez, Herminio Romero",
    pages: "77-86",
    pdfUrl: "/5.pdf",
  },
  {
    title:
      "PRODUCTIVITY UNCERTAINTY AND STOCK PRICE CRASH RISK",
    authors: "Huaibing Yu, Hanzhi Xu",
    pages: "87-103",
    pdfUrl: "/5.pdf",
  },
  {
    title:
      "COUNTRY-SPECIFIC INVESTOR ATTENTION AND ADR MISPRICING",
    authors: "Juan Gutierrez, Daniel Perez, Andre Vianna",
    pages: "104-118",
    pdfUrl: "/5.pdf",
  },
  {
    title:
      "FUTURES PRICES LINKAGES IN THE US SOYBEAN COMPLEX",
    authors: "Panos Fousekis",
    pages: "119-130",
    pdfUrl: "/5.pdf",
  },
  {
    title:
      "PRICE CLUSTERING BEHAVIOR IN VIRTUAL REAL ESTATE MARKETS",
    authors: "Bill Hu",
    pages: "131-139",
    pdfUrl: "/5.pdf",
  },
  {
    title:
      "THE COMPETING-RISK ANALYSIS OF POST-IPO DELISTINGS",
    authors: "Jun Chen, Ronald Rutherford, Peiming Wang",
    pages: "140-158",
    pdfUrl: "/5.pdf",
  },
];

const Vol_12 = () => {
  const [filteredArticles, setFilteredArticles] = useState(articlesData);

  const handleSearch = (query) => {
    const results = articlesData.filter((a) =>
      a.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredArticles(results);
  };

  return (
    <>
      <Header/>
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

export default Vol_12;
