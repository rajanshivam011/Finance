import React, { useState } from 'react'
import Header from './Header';
import Footer from './Footer';
import Search from "./Search";
const articlesData = [
  {
    title:
      "Building Organizational Capacity For Rural Enterprise Management: A Study Of Government Agency Performance In Indonesia",
    authors: "Sitti Hadijah, Nurdin Nara (Author)",
    pages: "697-704",
    pdfUrl: "/vol-13/1.pdf",
  },
  {
    title:
      "The Impact Of Air And Noise Pollution On Honeybee (Apis Mellifera L.) Productivity Across Multiple Habitats",
    authors: "Maryam Ahmed Hussein, Dereen Jaladat Mustafa, Bayan Hazim Ahmed (Author)",
    pages: "705-710",
    pdfUrl: "/vol-13/2.pdf",
  },
  {
    title:
      "Do Green Practices Drive Firm Value In The Energy And Mining Sector",
    authors: "Rasyid Ridha Kurniawan, Rahmawati, Siti Rochmah Ika, Nindyo Cahyo Kresnanto, Ari Kuncara Widagdo, Junaid M. Shaikh, Agus Dwianto (Author)",
    pages: "711-714",
    pdfUrl: "/vol-13/3.pdf",
  },
  {
    title:
      "A Review of Accident Prevention Strategies in Hazardous Industrial Operations",
    authors: "Dr Mohd Zafar shaikh (Author)",
    pages: "715-721",
    pdfUrl: "/vol-13/4.pdf",
  },
  {
    title:
      "Assessment Of Fetal Lung Maturity Using Pulmonary Artery Doppler Indices: A Review Article",
    authors: "Mohamad Abdelrahman Mohamad, Ahmed Abdelrady Ali, Ahmed Hashem Abdellah, Mahmoud Ibraheem Elmolakab bel Elrashidy, Nagwan ibrahim Rashwan (Author)",
    pages: "722-735",
    pdfUrl: "/vol-13/5.pdf",
  },
  {
    title:
      "Quality By Design Driven, Development And Assessment Of A Nanoemulsion Based Gel Comprising Of Fenticonazole Nitrate And Clary Sage Oil Loaded For The Effective Treatment Of Fungal Infections",
    authors: "Het Solanki, Punit B. Parejiya, Sainika Rathod, Kanti Paregi, Lata Panchal, Divyang Dave (Author)",
    pages: "736-749",
    pdfUrl: "/vol-13/6.pdf",
  },
  {
    title:
      "Development And Optimization Of Gold Nanoparticle Synthesis From Bauhinia Purpurea Extracts",
    authors: "A. Meena, R. Senthilraj (Author)",
    pages: "750-764",
    pdfUrl: "/vol-13/7.pdf",
  },
  {
    title:
      "Structural Health Monitoring Of RCC Structure By Internet Of Things",
    authors: "Malay Dipak bhai Shukla (Translator); Dr. Sanjay Joshi (Author)",
    pages: "765-774",
    pdfUrl: "/vol-13/8.pdf",
  },
  {
    title:
      "Emerging Therapeutic Approach For The Prevention And Reversal Of Muscle Atrophy",
    authors: "Priyanka Prajapati (Author)",
    pages: "778-787",
    pdfUrl: "/vol-13/9.pdf",
  },
   {
    title:
      "Impact OF Lifestyle Modifications ON Menstrual Irregularities",
    authors: "Gagandeep Kaur, Dr. Ashwini Ramchandra Metangale, Saumya Srivastava, Dr. Mamellapalli Radhika, Basavaraj Mudhol, Gangadhar Bareddy, Lazar Veparala (Author)",
    pages: "788-798",
    pdfUrl: "/vol-13/10.pdf",
  },
   {
    title:
      "MSME Finance: An Empirical Study On Policy Reforms, Cash Flow Based Lending, And Digital Solutions",
    authors: "Mr. Praveen Sharma, Dr. Rashmi Sharma (Author)",
    pages: "799-810",
    pdfUrl: "/vol-13/11.pdf",
  },
   {
    title:
      "The Use Of Advanced Imaging Techniques In Diagnosing Equine Musculoskeletal Disorders",
    authors: "Dr. Souvik Sur, Dr. Pradeep Kumar Dohare, Dr. Kalyani Tiwari, Dr. S. Padmavathi, Dr Sukanta Bandyopadhyay, Aryantika Sharma (Author)",
    pages: "811-817",
    pdfUrl: "/vol-13/12.pdf",
  },
  // {
  //   title:
  //     "INDEPENDENT DIRECTORS AND FIRM VALUE: NEW EVIDENCE FROM THE 2023 REGULATORY REFORM IN CHINA",
  //   authors: "Anqi Jiao, Ran Sun, Juntai Lu",
  //   pages: "186-200",
  //   pdfUrl: "/vol-13/13.pdf",
  // },
  // {
  //   title:
  //     "CEO GENDER AND FIRM PERFORMANCE: EVIDENCE FROM THE COVID-19 PANDEMIC",
  //   authors: "Georgios Koimisis, Christos Giannikos, Jun Lou",
  //   pages: "201-212",
  //   pdfUrl: "/vol-13/14.pdf",
  // },
  // {
  //   title:
  //     "DRIVERS OF PROFIT CONVERGENCE IN EURO AREA BANKS",
  //   authors: "Hélène Bruffaerts, Rudi Vander Vennet",
  //   pages: "213-222",
  //   pdfUrl: "/vol-13/15.pdf",
  // },
  // {
  //   title:
  //     "OIL VOLATILITY-OF-VOLATILITY AND TAIL RISK OF COMMODITIES",
  //   authors: "Yahua Xu, Alireza Tourani-Rad, Tai-Yong Roh",
  //   pages: "223-236",
  //   pdfUrl: "/vol-13/16.pdf",
  // },
  // {
  //   title:
  //     "INTEREST RATE HIKE AND THE INSTABILITY IN THE U.S. BANKING INDUSTRY",
  //   authors: "Huong Le, Lai Vo",
  //   pages: "237-250",
  //   pdfUrl: "/vol-13/17.pdf",
  // },
  // {
  //   title:
  //     "CLIMATE RISK AND THE PREDICTABILITY OF JUMPS IN GREEN ASSETS",
  //   authors: "Riza Demirer, Tina Prodromou",
  //   pages: "251-266",
  //   pdfUrl: "/vol-13/18.pdf",
  // },
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