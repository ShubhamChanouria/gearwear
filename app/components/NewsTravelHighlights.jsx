'use client';

import Image from 'next/image';

const articles = [
  {
    title: 'Searching for Perfect Barrels in Indoneisa',
    image: '/goa1.jpg',
  },
  {
    title: 'Snowboarding and Surfing in California',
    image: '/goa2.jpg',
  },
];

export default function NewsTravelHighlights() {
  return (
    <div className="w-full  py-12 bg-white flex flex-col lg:flex-row gap-10 mt-4">
      {/* Left Section */}
      <div className="lg:w-1/2 space-y-6 p-[4rem]">
        <div className="text-sm tracking-widest text-gray-500 font-semibold">GET INSPIRED</div>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900">
          Latest News & <br />
          Travel Adventures
        </h2>

        {/* Small Articles */}
        <div className="space-y-4">
          {articles.map((article, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <div className="w-16 h-16 relative">
                <Image src={article.image} alt={article.title} fill className="object-cover rounded-sm" />
              </div>
              <p className="text-gray-800 font-medium text-sm">{article.title}</p>
            </div>
          ))}
        </div>

        {/* More Articles Link */}
        <button className="flex items-center text-sm font-semibold text-blue-600 mt-4 hover:underline">
          <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center mr-2">
            →
          </span>
          MORE ARTICLES
        </button>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 relative h-[400px] md:h-[500px] overflow-hidden ">
        <Image
          src="/goa.jpg"
          alt="A Month in Sri Lanka"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#00000078] bg-opacity-40 flex flex-col justify-end p-6 text-white">
          <h3 className="text-2xl md:text-3xl font-semibold mb-2">A Month in Sri Lanka</h3>
          <p className="text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="flex items-center text-sm font-semibold hover:underline">
            {/* <span className="w-6 h-6 rounded-full bg-cyan-500 text-white flex items-center justify-center mr-2">
              →
            </span> */}
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
}
