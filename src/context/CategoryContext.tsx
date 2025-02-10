"use client";
import { createContext, useState, useContext, ReactNode } from "react";

interface CategoryContextProps {
  category: string | null;
  setCategory: (category: string) => void;
}

const CategoryContext = createContext<CategoryContextProps | undefined>(
  undefined
);

export const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const [category, setCategory] = useState<string | null>(null);

  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategory must be used within a CategoryProvider");
  }
  return context;
};
