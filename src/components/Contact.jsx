import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Search from './Search'

const Contact = () => {
  return (
    <>
      <Header />
      <main className="py-8">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <nav className="text-sm text-gray-600 mb-4">
              <span>Home / </span>
              <span className="text-blue-700">Contact</span>
            </nav>
            
            <h1 className="text-3xl font-bold mb-6">Contact</h1>

            <div className="space-y-8">
              <section>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h2 className="text-lg font-semibold mb-4">Auckland Centre for Financial Research</h2>
                  <div className="text-gray-700 space-y-1">
                    <p>Auckland University of Technology</p>
                    <p>Private Bag 92006</p>
                    <p>Auckland</p>
                    <p>1142, New Zealand</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Principal Contact</h2>
                <div className="bg-white border rounded-lg p-6">
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Olga Dodd</h3>
                    </div>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Editor in Chief</strong></p>
                      <p><strong>Director, ACFR</strong></p>
                      <div className="mt-4 space-y-2">
                        <p><strong>Phone:</strong> 099219999</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Support Contact</h2>
                <div className="bg-white border rounded-lg p-6">
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Tuwhera Publishing</h3>
                    </div>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Email:</strong> <a href="mailto:tuwhera@aut.ac.nz" className="text-blue-700 hover:underline">olga.dodd.aut.ac.nz@gmail.com</a></p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <aside className="lg:col-span-1 space-y-6">
            <Search/>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Contact
