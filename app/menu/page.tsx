"use client";

import { menuItems, categories } from "@/data/menu";
import { useState } from "react";
import MenuItemRow from "@/components/MenuItemRow";
import logo from "@/public/img/logo.jpeg";
import Image from "next/image";

export default function MenuPage() {
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const groups = [
    { id: "cafe", name: "کافه" },
    { id: "restaurant", name: "رستوران" },
    { id: "breakfast", name: "صبحانه" },
  ];

  const filteredCategories = categories.filter(
    (category) => category.group === selectedGroup,
  );

  const filteredItems =
    selectedCategory === "all"
      ? menuItems.filter((item) =>
          filteredCategories.some((category) => category.id === item.category),
        )
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#fffdfb] px-4 py-12 md:px-6 md:py-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
            Our Menu
          </p>
          <h1
            dir="ltr"
            className="text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl"
          >
            Something delicious
            <span className="text-red-600"> for everyone.</span>
          </h1>
          <p className="mt-5 text-zinc-500" dir="ltr">
            Fresh coffee, refreshing drinks and delicious pastries made with
            love.{" "}
          </p>
        </div>

        {/* Main Sections */}
        <div className="mt-10 grid grid-cols-3 gap-2 md:gap-4">
          {groups.map((group) => (
            <button
              key={group.id}
              onClick={() => {
                setSelectedGroup(group.id);
                setSelectedCategory("all");
              }}
              className={`rounded-xl py-4 text-sm font-bold transition md:py-5 md:text-base ${
                selectedGroup === group.id
                  ? "bg-red-700 text-white shadow-md"
                  : "border border-red-100 bg-white text-zinc-700 hover:border-red-400"
              }`}
            >
              {group.name}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="mt-6">
          {!selectedGroup ? (
            // Default Image
            <div className="overflow-hidden rounded-2xl">
              <Image
                loading="eager"
                src={logo}
                alt="Our Menu"
                width={300}
                height={300}
                className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full object-cover mx-auto border-4 border-red-700"
              />
            </div>
          ) : (
            <>
              {/* Sub Categories */}
              <div className="w-full min-w-0">
                <div className="overflow-x-auto overscroll-x-contain">
                  <div className="flex w-max min-w-full gap-2 pb-3">
                    <button
                      onClick={() => setSelectedCategory("all")}
                      className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-medium ${
                        selectedCategory === "all"
                          ? "bg-red-700 text-white"
                          : "border border-red-100 bg-white text-zinc-700"
                      }`}
                    >
                      همه
                    </button>

                    {filteredCategories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`shrink-0 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition ${
                          selectedCategory === category.id
                            ? "bg-red-700 text-white"
                            : "border border-red-100 bg-white text-zinc-700 hover:border-red-400"
                        }`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Products */}
              <div className="mt-8">
                {filteredItems.length > 0 ? (
                  filteredItems.map((item) => (
                    <MenuItemRow key={item.id} item={item} />
                  ))
                ) : (
                  <p className="py-10 text-center text-zinc-400">
                    محصولی در این دسته وجود ندارد.
                  </p>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
