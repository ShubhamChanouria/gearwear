'use client';

import Image from 'next/image';

const sportsImages = [
  { src: '/act1.jpg', alt: 'Surfer at Sunset' },
  { src: '/act2.jpg', alt: 'Snowboarder on Mountain' },
  { src: '/act3.jpg', alt: 'Surfer in Action' },
  { src: '/act4.jpg', alt: 'Stacked Surfboards' },
];

export default function OutdoorSportsShowcase() {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
      {sportsImages.map((img, idx) => (
        <div key={idx} className="relative h-[400px] md:h-[400px] w-full overflow-hidden">
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
            priority={idx === 0}
          />
          <div className="absolute inset-0  bg-opacity-0 hover:bg-opacity-10 transition duration-300" />
        </div>
      ))}
    </div>
  );
}
