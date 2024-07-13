import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>Dribbble</title>
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />

        <style>{`
          @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .slider {
            white-space: nowrap;
            overflow: hidden;
          }
          .slider-track {
            display: inline-flex;
            animation: slide 30s linear infinite;
          }
          .slider-item {
            flex: 0 0 auto;
            width: 200px; 
            height: 150px;
            margin-right: 20px; 
          }
          .rounded-bottom {
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
          }

           .search-container {
            position: relative;
          }
          .search-container input {
            padding-left: 2.5rem; 
          }
          .search-container .fa-search {
            position: absolute;
            left: 10px;
            top: 50%;
            transform: translateY(-50%);
            color: gray;
          }
        `}</style>
      </Head>
      
      <header className="py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)} 
                className="text-black hover:text-black focus:outline-none flex items-center"
              >
                Find designers
                <svg
                  className="ml-2 h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <a href="#" className="block px-4 py-2 text-black-700 hover:bg-gray-100" role="menuitem">Designer Search</a>
                    <a href="#" className="block px-4 py-2 text-black-700 hover:bg-gray-100" role="menuitem">Post A Job</a>
                  </div>
                </div>
              )}
            </div>
            <a href="#" className="text-black hover:text-black">Inspiration</a>
            <a href="#" className="text-black hover:text-black">Jobs</a>
            <a href="#" className="text-black hover:text-black">Go Pro</a>
          </div>

          <a href="#" className="text-2xl font-pacifico">Dribbble</a>

          <div className="flex items-center">
          <div className="search-container">
              <input
                type="text"
                placeholder="Search..."
                className="border border-gray-300 rounded-full px-3 py-2 mr-4"
              />
              <i className="fas fa-search"></i>
            </div>
            <a href="#" className="text-black hover:text-black mr-4">Log in</a>
            <a href="#" className="bg-black text-white px-4 py-2 rounded-full">Sign up</a>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto py-16 px-4">
        <section className="text-center">
          <h5 className="font-bold mb-4 bg-yellow-100 text-black p-2 rounded-full inline-block">Over 3 million ready-to-work creatives!</h5>
          <h1 className="text-7xl font-bold-300 mb-4">The world’s destination</h1>
          <h1 className="text-7xl font-bold-300 mb-4">for design</h1>
          <p className="text-black-600 mb-8">Get inspired by the work of millions of top-rated designers & agencies around the world.</p>
          <a href="#" className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-700">Get started</a>
        </section>
        
        <section className="mt-16 text-center">
          <div className="slider">
            <div className="slider-track">
              {[...Array(10)].map((_, index) => (
                <div key={index} className="slider-item relative overflow-hidden rounded-lg mx-2">
                  <img 
                    src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg" 
                    alt={`Design ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-2 text-white rounded-bottom text-left">
                    <h3 className="text-sm font-bold">UI</h3>
                    <p className="text-sm font-bold">Arthur</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="mt-16 text-center">
          <h2 className="text-7xl font-thin mb-4">Explore inspiring designs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="relative rounded-lg overflow-hidden">
                <img 
                  src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg" 
                  className="w-35 h-40 object-cover rounded-lg"
                />
                <div className="p-4">
                  <div className="flex items-center mt-2">
                    <img 
                      src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg" 
                      alt="Designer" 
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div className="ml-2 ">
                      <div className="flex items-center text-sm text-gray-500">
                        <p className="text-sm font-bold p-2">Ram</p>
                        <i className="fas fa-heart mr-1"></i> 50 likes  
                        <i className="fas fa-eye ml-2 mr-1"></i> 1.2k views
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section className="bg-yellow-200 py-16 mt-16 flex flex-col items-center justify-center text-center">
          <div className="p-5">
            <div className="mb-4">
              <h2 className="text-6xl font-bold">Find your next</h2>
              <h2 className="text-6xl font-bold">designer today</h2>
            </div>
            <div className="mb-8">
              <p className="text-2xl text-black-600">The world’s leading brands use Dribbble to hire creative talent.</p>
              <p className="text-2xl text-black-600">Browse millions of top-rated portfolios to find your perfect</p>
              <p className="text-2xl text-black-600">creative match.</p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center mb-8">
              <a href="#" className="bg-black text-white px-6 py-3 rounded-full">Get started now</a>
              <a href="#" className="bg-white text-black px-6 py-3 rounded-full">Learn about Hiring</a>
            </div>
            <div className="flex flex-col sm:flex-row justify-center">
              <a href="#" className="text-black text-2xl">Are You a Designer?</a>
              <a href="#" className="text-black text-2xl"><u>Join Dribbble</u></a>
            </div>
          </div>
        </section>

        <section className="py-16 mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg" 
                className="w-full h-40 object-cover rounded-lg"
              />
              <p className="mt-2 font-bold">Branding</p>
            </div>
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg" 
                className="w-full h-40 object-cover rounded-lg"
              />
              <p className="mt-2 font-bold">Print</p>
            </div>
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg" 
                className="w-full h-40 object-cover rounded-lg"
              />
              <p className="mt-2 font-bold">Illustration</p>
            </div>
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg" 
                className="w-full h-40 object-cover rounded-lg"
              />
              <p className="mt-2 font-bold">Animation</p>
            </div>
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg" 
                className="w-full h-40 object-cover rounded-lg"
              />
              <p className="mt-2 font-bold">Typography</p>
            </div>
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg" 
                className="w-full h-40 object-cover rounded-lg"
              />
              <p className="mt-2 font-bold">Product Design</p>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="text-black py-8">
  <div className="container mx-auto text-center">
    <div className="mb-4 ">
      <a href="#" className="font-pacifico text-2xl p-2 ">Dribbble</a>
   
      <a href="#" className="text-black mx-2">For designers</a>
      <a href="#" className="text-black mx-2">Hire talent</a>
      <a href="#" className="text-black mx-2">Inspiration</a>
      <a href="#" className="text-black mx-2">Advertising</a>
      <a href="#" className="text-black mx-2">Blog</a>
      <a href="#" className="text-black mx-2">About</a>
      <a href="#" className="text-black mx-2">Careers</a>
      <a href="#" className="text-black mx-2">Support</a>
   
      <a href="#" className="text-black mx-2"><i className="fab fa-facebook"></i></a>
      <a href="#" className="text-black mx-2"><i className="fab fa-twitter"></i></a>
      <a href="#" className="text-black mx-2"><i className="fab fa-instagram"></i></a>
      <a href="#" className="text-black mx-2"><i className="fab fa-pinterest"></i></a>
    </div>
    <div className="mb-4">
      <a href="#" className="text-grey mx-2">Terms</a>
      <a href="#" className="text-grey mx-2">Privacy</a>
      <a href="#" className="text-grey mx-2">Cookies</a>
    </div>
    <p>&copy; 2024 Dribbble</p>
  </div>
</footer>

    </div>
  );
}
