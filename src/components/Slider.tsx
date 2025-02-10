"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CategoryCard from "./CategoryCard";

export const categories = [
  {
    name: "Wiedza",
    path: "wiedza",
    color: "bg-knowledge",
    image: "books",
    ico: "/ico_book.png",
  },
  {
    name: "Inspiracje",
    path: "inspiracje",
    color: "bg-inspirations",
    image: "art",
    ico: "/ico_head.png",
  },
  {
    name: "Interpretacje",
    path: "interpretacje",
    color: "bg-interpretations",
    image: "science",
    ico: "/ico_paint.png",
  },
  {
    name: "Dostępne",
    path: "dostepne",
    color: "bg-accessible",
    image: "city",
    ico: "/ico_glass.png",
  },
];

export default function Slider() {
  const [index, setIndex] = useState(0);

  // Obsługa przesuwania slajdów
  const nextSlide = () => setIndex((prev) => (prev + 1) % categories.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + categories.length) % categories.length);

  return (
    <div className="relative w-full max-w-md mx-auto overflow-hidden rounded-lg md:hidden">
      <motion.div
        className="flex"
        animate={{ translateX: `-${index * 100}%` }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {categories.map((category, i) => (
          <div key={i} className="w-full flex-shrink-0">
            <CategoryCard
              key={category.path}
              name={category.name}
              path={category.path}
              image={category.image}
              color={category.color}
              ico={category.ico}
              type="slider"
            />
          </div>
        ))}
      </motion.div>

      {/* Przyciski nawigacji */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        <ChevronRight />
      </button>

      {/* Kropki nawigacyjne */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
        {categories.map((_, i) => (
          <span
            key={i}
            className={`w-2 h-2 rounded-full ${
              index === i ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
