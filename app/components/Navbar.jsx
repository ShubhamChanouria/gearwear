// components/Navbar.jsx
export default function Navbar() {
  return (
    <nav className="relative z-20 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <img src="/logo.png" alt="TRUE WONDER" className="h-18 w-auto" />
          </div>
          <div className="w-px h-6 bg-white opacity-50"></div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="group relative">
            <button className="text-white uppercase text-sm font-medium flex items-center space-x-1 hover:text-gray-300 transition">
              <span>SURF</span>
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="group relative">
            <button className="text-white uppercase text-sm font-medium flex items-center space-x-1 hover:text-gray-300 transition">
              <span>SNOW</span>
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <a href="#" className="text-white uppercase text-sm font-medium hover:text-gray-300 transition">ABOUT</a>
          <a href="#" className="text-white uppercase text-sm font-medium hover:text-gray-300 transition">NEWS</a>
          <a href="#" className="text-white uppercase text-sm font-medium hover:text-gray-300 transition">CONTACT</a>
        </div>

        {/* Search and Icons */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative">
            <div className="flex items-center bg-black bg-opacity-30 rounded-full px-4 py-2 backdrop-blur-sm">
              <svg className="w-4 h-4 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input 
                type="text" 
                placeholder="SEARCH" 
                className="bg-transparent text-white placeholder-white uppercase text-sm outline-none w-24"
              />
            </div>
          </div>

          {/* Icons */}
          <button className="text-white hover:text-gray-300 transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
          <button className="text-white hover:text-gray-300 transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
} 