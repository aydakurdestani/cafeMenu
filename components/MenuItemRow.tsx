"use client";

import { useState } from "react";
import type { MenuItem } from "@/data/menu";

type Props = {
  item: MenuItem;
};

export default function MenuItemRow({ item }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Product Row */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        dir="rtl"
        className="flex w-full items-center gap-3 border-b border-red-100 py-4 text-right"
      >
        <span className="font-medium text-zinc-800">{item.name}</span>

        <span className="flex-1 border-b border-dotted border-red-300" />

        <span className="font-bold text-red-700">{item.price}T</span>
      </button>

      {/* Popup */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-5"
          onClick={() => setIsOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={`item-title-${item.id}`}
            onClick={(e) => e.stopPropagation()}
            dir="rtl"
            className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute left-4 top-4 text-xl text-zinc-400 hover:text-red-600"
              aria-label="بستن"
            >
              ×
            </button>

            {/* Product Name */}
            <h2
              id={`item-title-${item.id}`}
              className="mb-4 pl-8 text-xl font-bold text-red-700"
            >
              {item.name}
            </h2>

            {/* Description */}
            <p className="text-sm leading-8 text-zinc-600">
              {item.description}
            </p>

            {/* Price */}
            <div className="mt-6 border-t border-red-100 pt-4 text-left">
              <span className="font-bold text-red-700">{item.price}T</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
