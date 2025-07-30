'use client';
import { useEffect, useRef, useState } from 'react';

export default function SurfVideoSection() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  // Observe when the section is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  // Autoplay when in view
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isInView) {
      video.play().catch((err) => {
        console.error('Autoplay failed:', err);
      });
    } else {
      video.pause();
    }
  }, [isInView]);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[70vh] overflow-hidden bg-black mt-4"
    >
      {/* Video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/surfVideo.mp4"
        poster="/surfVideoPreview.jpg" // <-- Preview image
        muted
        playsInline
        preload="auto"
      />

      {/* Overlay content */}
      <div className="absolute inset-0 bg-[#0000005c] bg-opacity-10 flex flex-col justify-center items-center text-white text-center px-4 z-10">
        <p className="text-sm tracking-widest mb-2 uppercase">GearWear Adventures</p>
        <h1 className="text-3xl md:text-5xl font-semibold mb-6">
          From Snow to Surf in One Day
        </h1>
        <div className="w-16 h-16 border-4 border-white rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </section>
  );
}
