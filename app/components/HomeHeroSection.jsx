// components/HomeHeroSection.jsx
import Navbar from './Navbar';

export default function HomeHeroSection() {
  return (
    <section className="text-white">
      {/* Hero Background Container */}
      <div 
        className="relative h-[80vh] bg-center"
        style={{ 
          backgroundImage: "url('/waves.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >

        
        {/* Navbar */}
        <Navbar />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col justify-center h-full px-6 max-w-6xl mx-auto">
          <p className="uppercase text-sm tracking-wide text-gray-300 mb-2">Explore the new season</p>
          <h1 className="text-4xl md:text-5xl font-normal leading-tight">
            The Ultimate Place <br />
            for <span className="font-semibold">Adventure & <br/> Outdoor Gear</span>
          </h1>
         <p className='uppercase mt-6 text-[15px] cursor-pointer'>Read our story</p>
        </div>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-4">
        {/* Surf Gear */}
        <div className="relative group">
          <img src="/surf1.jpg" alt="Surf Gear" className="w-full h-[400px] object-cover" />
          <div className="absolute inset-0  group-hover:bg-opacity-30 transition duration-300"></div>
          <div className="absolute inset-0 flex flex-col justify-end pb-8 px-8 text-white z-10 bg-[#00000078]">
            <div className='ml-[10rem]'>
            <p className="uppercase text-sm font-medium mb-2">Shop</p>
            <h3 className="text-4xl font-bold mb-6" >Surf Gear</h3>
            <button className="group border border-white px-6 py-3 hover:bg-white hover:text-black transition flex items-center space-x-2 w-max cursor-pointer">
  <span className="uppercase font-medium">Shop Now</span>
  <svg
    className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
</button>

            </div>
          </div>
        </div>

        {/* Snow Gear */}
        <div className="relative group">
          <img src="/surf2.jpg" alt="Snow Gear" className="w-full h-[400px] object-cover" />
          <div className="absolute inset-0  group-hover:bg-opacity-30 transition duration-300"></div>
          <div className="absolute inset-0 flex flex-col justify-end pb-8 px-8 text-white z-10 bg-[#00000078]">
            <div className='ml-[10rem]'>
            <p className="uppercase text-sm font-medium mb-2" >Shop</p>
            <h3 className="text-4xl font-bold mb-6" >Snow Gear</h3>
            <button className="group border border-white px-6 py-3 hover:bg-white hover:text-black transition flex items-center space-x-2 w-max cursor-pointer">
  <span className="uppercase font-medium">Shop Now</span>
  <svg
    className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
</button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
