import React from 'react'
import Header from './Header'
import CurrentIssue from './CurrentIssue'
import Footer from './Footer'
import Current from './Current'
import { useNavigate } from 'react-router-dom'
import Search from './Search'

const Home = () => {
  const navigator=useNavigate();
  return (
    <>
      <Header />
      <main>
        <section className="py-8">
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-3xl font-bold">Applied Finance Letters</h1>
              <p className="mt-3 max-w-3xl text-sm md:text-base leading-relaxed">
                Applied Finance Letters is an open-access journal publishing mainly empirical research with implications and relevance for academia and the finance industry. The aim is to encourage high-quality contributions that foster discussions among academics, policymakers and financial practitioners. The Journal welcomes submissions from all fields of finance and is especially interested in innovative and original contributions. Applied Finance Letters is B-ranked on the 2022 ABDC Journal Ranking List, is indexed by EconLit and DOAJ, and has a self-computed 2023 Impact Factor of 0.72
              </p>
              <p className="mt-6 text-sm text-[#344d85] cursor-pointer" onClick={()=>{navigator('/editorial-team')}}>Please see our Editorial Board Here.</p>

              <div className="mt-10">
                <h2 className="text-2xl font-bold">Current Issue</h2>
              </div>
              <CurrentIssue />
            </div>

            <aside className="lg:col-span-1 space-y-6">
              <Search/>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Home