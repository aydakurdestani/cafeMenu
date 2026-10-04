import type { MenuItem } from "@/data/menu";

type menucardsProps = {
  item: MenuItem;
};

export default function MenuCard({ item }: menucardsProps) {
  return (
    <div className="group rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-5 flex h-48 items-center justify-center rounded-xl bg-red-50">
        <span className="text-6xl">☕</span>
      </div>

      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-zinc-900">{item.name}</h3>

          <p className="mt-2 text-sm leading-6 text-zinc-500">
            {item.description}
          </p>
        </div>

        <span className="whitespace-nowrap font-semibold text-red-600">
          {item.price.toFixed(2)}T
        </span>
      </div>

      <button className="mt-5 w-full rounded-xl border border-red-600 py-2.5 font-medium text-red-600 transition hover:bg-red-600 hover:text-white">
        Add to order
      </button>
    </div>
  );
}
