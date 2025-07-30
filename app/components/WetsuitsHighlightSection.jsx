'use client';

import React from 'react';
import Link from 'next/link';

export default function WetsuitsHighlightSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
      {/* Men's Wetsuits */}
      <div className="relative h-[400px] group">
        <img
          src="/boy.jpg" // replace with your actual image path
          alt="Men's Wetsuits"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#00000087] bg-opacity-30 group-hover:bg-opacity-40 transition duration-300" />
        <div className="absolute bottom-10 left-10 text-white z-10">
          <p className="text-xs tracking-wide uppercase mb-2">Surf</p>
          <h2 className="text-3xl font-bold mb-4">Men’s Wetsuits</h2>
          <Link
            href="/mens-wetsuits"
            className="border border-white text-white px-6 py-2 text-sm font-medium inline-block transition duration-200 hover:bg-white hover:text-black"
          >
            Shop Now →
          </Link>
        </div>
      </div>

      {/* Women's Wetsuits */}
      <div className="relative h-[400px] group">
        <img
          src="/girl.jpg" // replace with your actual image path
          alt="Women's Wetsuits"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#00000087] bg-opacity-20 group-hover:bg-opacity-30 transition duration-300" />
        <div className="absolute bottom-10 left-10 text-white z-10">
          <p className="text-xs tracking-wide uppercase mb-2">Surf</p>
          <h2 className="text-3xl font-bold mb-4">Women’s Wetsuits</h2>
          <Link
            href="/womens-wetsuits"
            className="border border-white text-white px-6 py-2 text-sm font-medium inline-block transition duration-200 hover:bg-white hover:text-black"
          >
            Shop Now →
          </Link>
        </div>
      </div>
    </section>
  );
}
