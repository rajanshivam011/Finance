import React, { useState } from 'react'
import Header from './Header';
import Footer from './Footer';
import Search from "./Search";
const articlesData = [
  {
    title:
      "IMPACTS OF RISK PREFERENCE AND SOCIAL INSURANCE ON HOUSEHOLD FINANCIAL MARKET PARTICIPATION IN CHINA: ARE THERE DIFFERENCES BETWEEN URBAN AND RURAL RESIDENTS?",
    authors: "Wei Yang, Zhaohua Li, Le Wang",
    pages: "2-13",
    pdfUrl: "/vol-13/1.pdf",
  },
  {
    title:
      "The INVESTIGATION OF ASYMMETRIC DYNAMICS OF BORSA ISTANBUL INDEX WITH QUANTILE UNIT ROOT TEST",
    authors: "Müge Özdemir",
    pages: "14-27",
    pdfUrl: "/vol-13/2.pdf",
  },
  {
    title:
      "FUNDING AND OVERFUNDING PHENOMENA IN CROWDFUNDING: RELEVANCE OF PLATFORM CHOICE AND VARYING INDUSTRY DYNAMICS",
    authors: "Dominika Galkiewicz, Michal Galkiewicz",
    pages: "28-47",
    pdfUrl: "/vol-13/3.pdf",
  },
  {
    title:
      "GEOPOLITICS, UNCERTAINTY, AND CRYPTOCURRENCY: A LOVE TRIANGLE GONE WRONG",
    authors: "Leila Dagher, Amar Rao, Dagar Vishal, Olatunji Shobande",
    pages: "48-62",
    pdfUrl: "/vol-13/4.pdf",
  },
  {
    title:
      "THE INFORMATIONAL ROLE OF THE LOAN ONLY CREDIT DEFAULT INDEX (LCDX) ON THE PRICING OF SYNDICATED LOANS",
    authors: "Zagdbazar Davaadorj, Jorge Brusa",
    pages: "63-76",
    pdfUrl: "/vol-13/5.pdf",
  },
  {
    title:
      "INFECTIOUS DISEASE AND ASYMMETRIC INDUSTRIAL VOLATILITY",
    authors: "Muhammad Tahir Suleman Suleman, Burcu Kapar, Faisal Rana",
    pages: "77-97",
    pdfUrl: "/vol-13/6.pdf",
  },
  {
    title:
      "PERFORMANCE AND TRACKING EFFICIENCY OF COMMODITY ETFS IN THE UK",
    authors: "GERASIMOS ROMPOTIS",
    pages: "98-109",
    pdfUrl: "/vol-13/7.pdf",
  },
  {
    title:
      "RESILIENCE OF ORGANISATION CAPITAL ON FIRMS’ PERFORMANCE AMID CRISIS",
    authors: "Li Xian Liu, Zhiyue Sun",
    pages: "110-127",
    pdfUrl: "/vol-13/8.pdf",
  },
  {
    title:
      "THE EFFECTS OF LOCAL SHAREHOLDERS ON FIRM PERFORMANCE: EVIDENCE FROM CORPORATE SOCIAL RESPONSIBILITY",
    authors: "Hyoseok (David) Hwang, Hyun Gon Kim",
    pages: "128-143",
    pdfUrl: "/vol-13/9.pdf",
  },
   {
    title:
      "THE IMPACT OF SOCIAL MEDIA PRESENCE, RESPONSE TIME, CORPORATE ACTIONS ON THE STOCK MARKET: EVIDENCE FROM THE RUSSIA–UKRAINE WAR",
    authors: "Vinayaka Gude, Daniel Hsiao",
    pages: "144-157",
    pdfUrl: "/vol-13/10.pdf",
  },
   {
    title:
      "POWER OF CSAD-BASED TEST ON HERDING BEHAVIOR",
    authors: "Haoran Zhang",
    pages: "158-167",
    pdfUrl: "/vol-13/11.pdf",
  },
   {
    title:
      "EVALUATING STOCK SELECTION IN THE SAAS INDUSTRY: THE EFFECTIVENESS OF THE RULE OF 40",
    authors: "King Fuei Lee",
    pages: "168-185",
    pdfUrl: "/vol-13/12.pdf",
  },
  {
    title:
      "INDEPENDENT DIRECTORS AND FIRM VALUE: NEW EVIDENCE FROM THE 2023 REGULATORY REFORM IN CHINA",
    authors: "Anqi Jiao, Ran Sun, Juntai Lu",
    pages: "186-200",
    pdfUrl: "/vol-13/13.pdf",
  },
  {
    title:
      "CEO GENDER AND FIRM PERFORMANCE: EVIDENCE FROM THE COVID-19 PANDEMIC",
    authors: "Georgios Koimisis, Christos Giannikos, Jun Lou",
    pages: "201-212",
    pdfUrl: "/vol-13/14.pdf",
  },
  {
    title:
      "DRIVERS OF PROFIT CONVERGENCE IN EURO AREA BANKS",
    authors: "Hélène Bruffaerts, Rudi Vander Vennet",
    pages: "213-222",
    pdfUrl: "/vol-13/15.pdf",
  },
  {
    title:
      "OIL VOLATILITY-OF-VOLATILITY AND TAIL RISK OF COMMODITIES",
    authors: "Yahua Xu, Alireza Tourani-Rad, Tai-Yong Roh",
    pages: "223-236",
    pdfUrl: "/vol-13/16.pdf",
  },
  {
    title:
      "INTEREST RATE HIKE AND THE INSTABILITY IN THE U.S. BANKING INDUSTRY",
    authors: "Huong Le, Lai Vo",
    pages: "237-250",
    pdfUrl: "/vol-13/17.pdf",
  },
  {
    title:
      "CLIMATE RISK AND THE PREDICTABILITY OF JUMPS IN GREEN ASSETS",
    authors: "Riza Demirer, Tina Prodromou",
    pages: "251-266",
    pdfUrl: "/vol-13/18.pdf",
  },
];
const Vol_13 = () => {
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
            <h1 className="text-3xl font-bold">Vol. 13 (2024)</h1>
            <p className="mt-2 text-sm">
              <span className="font-semibold">Published:</span> 2024-02-02
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
                        href="{a.pdfUrl}"
                        className="block text-[#344d85] font-semibold hover:underline"
                      >
                        {a.title}
                      </a>
                      <p className="text-sm text-gray-700 mt-1">{a.authors}</p>
                      <div className="mt-3 flex items-center justify-between">
                        <a
                          href={a.pdfUrl}
                          className="inline-flex items-center px-4 py-2 rounded bg-[#344d85] text-white text-sm"
                          target='_blank'
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
      <Footer/>
        </>
  )
}

export default Vol_13