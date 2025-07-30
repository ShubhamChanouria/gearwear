'use client';
import { useEffect, useRef } from 'react';

const snowboards = [
  { id: 1, brand: 'BURTON', name: 'Skeleton Key Snowboard 2021', price: '$625.00', image: '/glove1.png' },
  { id: 2, brand: 'SALOMON', name: 'Craft Snowboard 2021', price: '$625.00', image: '/glove2.png' },
  { id: 3, brand: 'JONES', name: 'Mountain Twin Snowboard 2021', price: '$625.00', image: '/glove3.png' },
  { id: 4, brand: 'BURTON', name: 'Flight Attendant 2021', price: '$599.00', image: '/glove4.png' },
];

export default function ReversedProductCarousel() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || container.children.length === 0) return;

    const card = container.children[0];
    const cardWidth = card.getBoundingClientRect().width + 24;
    let index = 0;
    const maxIndex = snowboards.length - 3;

    const interval = setInterval(() => {
      index = index >= maxIndex ? 0 : index + 1;
      container.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth',
      });
    }, 2300);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full bg-[#f5f7fa] overflow-hidden mt-4">
      {/* Background image on the left */}
      <div className="absolute top-0 left-0 w-[35%] h-full z-0 hidden md:block">
        <img
          src="/g.jpg"
          alt="Surfing"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Foreground content aligned right */}
      <div className="relative z-10 px-6 md:px-20 py-16 flex justify-end">
        <div className="w-full md:w-[65%] ml-auto">
          {/* Tabs and Arrows */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex gap-6 items-center">
              <h2 className="text-3xl font-bold cursor-pointer">Surfboards</h2>
              <h2 className="text-sm text-gray-500 cursor-pointer font-semibold">Wetsuits</h2>
              <h2 className="text-sm text-gray-500 cursor-pointer font-semibold">Fins</h2>
              <h2 className="text-sm text-gray-500 cursor-pointer font-semibold">Accessories</h2>
            </div>
            <div className="hidden md:flex gap-3">
              <button className="w-8 h-8 rounded-full border flex items-center justify-center">&#8592;</button>
              <button className="w-8 h-8 rounded-full border flex items-center justify-center">&#8594;</button>
            </div>
          </div>

          {/* Carousel */}
          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pr-10"
          >
            {snowboards.map((item) => (
              <div
                key={item.id}
                className="min-w-[calc(100%/3)] max-w-[calc(100%/3)] bg-[#ffffffcc] p-6 rounded shadow snap-start"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="mb-4 h-80 object-contain mx-auto"
                />
                <p className="text-xs text-gray-400 uppercase mb-1">{item.brand}</p>
                <h4 className="text-sm font-medium mb-2">{item.name}</h4>
                <p className="text-blue-600 font-semibold">{item.price}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-6 flex justify-end">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 text-sm rounded hidden md:block">
              Shop All
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
