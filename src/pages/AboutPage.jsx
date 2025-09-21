import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
    <div className="bg-gray-50 py-16 px-6">
  <div className="max-w-4xl mx-auto text-center">
    {/* Heading */}

    <h2 className="text-3xl font-semibold text-gray-800 mb-4">
      Welcome to <span className="text-blue-600">TechCart</span>
    </h2>
    <p className="text-gray-600 mb-12">
      Shopping made simple, secure, and enjoyable. At TechCart, we bring you the latest electronics and tech gadgets 
      at the best prices while ensuring a seamless, user-friendly experience.
    </p>

    {/* Cards */}
    <div className="flex flex-col gap-8">
      {/* Why Choose Us */}
      <div className="bg-white p-8 rounded-xl shadow-lg text-left">
        <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">✨ Why Choose Us?</h3>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li><strong>Quality Products:</strong> Carefully selected from trusted brands.</li>
          <li><strong>Affordable Pricing:</strong> Budget-friendly without compromising quality.</li>
          <li><strong>Secure Checkout:</strong> Your privacy and security are top priority.</li>
          <li><strong>Customer Support:</strong> Always here to help you anytime.</li>
        </ul>
      </div>

      {/* Our Vision */}
      <div className="bg-white p-8 rounded-xl shadow-lg text-left">
        <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">💡 Our Vision</h3>
        <p className="text-gray-700">
          Making technology accessible and convenient for everyone. Whether you’re a student, professional, or tech enthusiast, 
          we strive to be your go-to online store.
        </p>
      </div>

      {/* Our Promise */}
      <div className="bg-white p-8 rounded-xl shadow-lg text-left">
        <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">🌍 Our Promise</h3>
        <p className="text-gray-700">
          We deliver not just products, but trust, reliability, and satisfaction. Every purchase strengthens our relationship 
          with you, our valued customer.
        </p>
      </div>
    </div>

    {/* Footer */}
    <p className="text-gray-500 mt-8 text-sm">Developed with ❤️ by Abhinav</p>
  </div>
</div>


        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Mens's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Women's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Jewelery</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Electronics</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage