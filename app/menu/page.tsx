"use client";
import MenuCard from "@/components/menuCards";
import { menuItems, categories } from "@/data/menu";
import { useState } from "react";

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const filteredItem =
    selectedCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category == selectedCategory);
  return (
    <main className="min-h-screen bg-[#fffdfb] px-6 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
            Our Menu
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl">
            Something delicious
            <span className="text-red-600"> for everyone.</span>
          </h1>

          <p className="mt-5 text-zinc-500">
            Fresh coffee, refreshing drinks and delicious pastries made with
            love.
          </p>
        </div>

        {/* Categories */}
        <div className="mt-12 flex justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`rounded-full px-6 py-3 text-sm font-medium transition ${
                selectedCategory === category.id
                  ? "bg-red-600 text-white"
                  : "border border-zinc-200 bg-white text-zinc-700 hover:border-red-600 hover:text-red-600"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItem.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </main>
  );
}
