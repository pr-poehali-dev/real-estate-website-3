import { useEffect, useState } from "react";

const images = [
  "https://cdn.poehali.dev/projects/de278397-5198-423b-b8af-d32fe71d005f/files/d33c0c40-b2d7-4341-8c97-a079f34d1e53.jpg",
  "https://cdn.poehali.dev/projects/de278397-5198-423b-b8af-d32fe71d005f/files/a781ebba-822b-44c4-abda-0ba2c24eb070.jpg",
  "https://cdn.poehali.dev/projects/de278397-5198-423b-b8af-d32fe71d005f/files/288cf2e8-404a-482c-bb4f-acc89e4b0d4a.jpg"
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden bg-muted">
      <div className="relative w-full h-full">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              idx === currentIndex 
                ? "opacity-100 scale-100" 
                : "opacity-0 scale-105"
            }`}
          >
            <img
              src={img}
              alt={`Project ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      
      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">
          Строим будущее вместе
        </h1>
        <p className="text-lg md:text-xl max-w-2xl animate-fade-in">
          Профессиональное строительство домов, качественный ремонт и премиальная плитка
        </p>
      </div>

      <div className="absolute bottom-8 right-8 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === currentIndex 
                ? "bg-white w-8" 
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
