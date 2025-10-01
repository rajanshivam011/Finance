import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Search from "./Search";

const articlesData = [
  {
    title:
      "The Impact Of Digital Transformation On The Development Of Logistic Service: A Case Study Of Pt Sindu Wahana Berkah",
    authors: "Bagas Muhammad Habibie, Ratih Hendayani (Author)",
    pages: "1-14",
    pdfUrl: "/vol-12/1.pdf",
  },
  {
    title:
      "A Measurement Tool For Purchase Intention And Its Factors In Environmental And Marketing Contexts",
    authors: "Saskia Tami Auziawati, Indrawati (Author)",
    pages: "15-21",
    pdfUrl: "/vol-12/2.pdf",
  },
  {
    title:
      "A NOVEL HYBRID CNN-LSTM FRAMEWORK FOR PREDICTING ALZHEIMER’S PROGRESSION USING SMART IOT SENSORS",
    authors: "MANOJ KUMAR BEURIA, DR JITENDER TANWAR, ALOK KAPIL, VALIVETI DATTATREYA, MRS. THOKALA SRIVALLI, DR. KRITI SRIVASTAVA (Author)",
    pages: "34-43",
    pdfUrl: "/vol-12/3.pdf",
  },
  {
    title:
      "A Study To Assess Level of Visual Acuity(VA) among patients with Type-II Diabetes Mellitus in selected villages under Rural Heath and Training Centre, Vayalanallur",
    authors: "Dr. Poongodi Ramalingam, M. Sumathi, Dr. Aruna Subramaniam (Author)",
    pages: "44-49",
    pdfUrl: "/vol-12/4.pdf",
  },
  {
    title:
      "Audit Quality and Financial Reporting Fraud: The Interaction of Standards, Governance, and Managerial Integrity",
    authors: "Payamta, Agus Dwianto, Gehad Mohammed Sultan Saif (Author)",
    pages: "50-64",
    pdfUrl: "/vol-12/5.pdf",
  },
  {
    title:
      "Green Computing: Advancing Energy-Efficient Data Centers With AI",
    authors: "M Rambabu, Dr. Kunchanapalli Rama Krishna, Dr Mano Ashish Tripathi, Jyoti Kataria, Priyanka Srivastava, Ajay Dixit (Author)",
    pages: "65-74",
    pdfUrl: "/vol-12/6.pdf",
  },
   {
    title:
      "Federated Learning and Cryptography: A Secure Framework for IoT Data Privacy",
    authors: "Shashi Raj K, Dr. M.Manicka Raja, Ch G V N Prasad, Mallareddy Adudhodla, Shashank Shekhar Tiwari, Dr.Gaganjot Kaur (Author)",
    pages: "75-81",
    pdfUrl: "/vol-12/7.pdf",
  },
   {
    title:
      "Performance Study On Inverted Anaerobic Sludge Blanket Reactor For High Fat Content Wastewater",
    authors: "Mr. V. Karthikeyan, Dr. N. Ashokkumar (Author)",
    pages: "82-91",
    pdfUrl: "/vol-12/8.pdf",
  },
  {
    title:
      "Surviving Through Identity Shift: An Expression Of Complicated Grief In Colson Whitehead’s The Nickel Boys",
    authors: "Ms. Jemima Joshuin T, Dr. G. Arul Selvi Mariya (Author)",
    pages: "92-97",
    pdfUrl: "/vol-12/9.pdf",
  },
  {
    title:
      "Synergistic Effect of Cacao Extract and Pregabalin on TNF-α and ERK MAPK Expression in a Rat Model of Neuropathic Pain",
    authors: "Mario Alexander Suyadi, Herdiani Sulistyo Putri, Prananda Surya Airlangga, Maulydia, Christrijogo Sumartono W., Mahmudah (Author)",
    pages: "98-114",
    pdfUrl: "/vol-12/10.pdf",
  },
  {
    title:
      "Reviewing the socioeconomic status of women collective groups",
    authors: "Pushp Gautam, Simran Malik, Sanjay Bhayana (Author)",
    pages: "115-122",
    pdfUrl: "/vol-12/11.pdf",
  },
  // {
  //   title:
  //     "PRICE CLUSTERING BEHAVIOR IN VIRTUAL REAL ESTATE MARKETS",
  //   authors: "Bill Hu",
  //   pages: "131-139",
  //   pdfUrl: "/vol-12/12.pdf",
  // },
  // {
  //   title:
  //     "THE COMPETING-RISK ANALYSIS OF POST-IPO DELISTINGS",
  //   authors: "Jun Chen, Ronald Rutherford, Peiming Wang",
  //   pages: "140-158",
  //   pdfUrl: "/vol-12/13.pdf",
  // },
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
            <h1 className="text-3xl font-bold">Vol. 12 (2025)</h1>
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
