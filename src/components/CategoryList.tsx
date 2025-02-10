import CategoryCard from "./CategoryCard";
import Slider from "./Slider";
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

export default function CategoryList() {
  return (
    <>
      <div className="hidden md:flex">
        <div className="flex justify-between w-full">
          {categories.map((category) => (
            <CategoryCard
              key={category.path}
              name={category.name}
              path={category.path}
              image={category.image}
              color={category.color}
              ico={category.ico}
            />
          ))}
        </div>
      </div>
      <Slider />
    </>
  );
}
