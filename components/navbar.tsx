import Link from "next/link";

export default function navbar() {
  return (
    <header className="border-b border-red-100 bg-white">
      <nav className="mx-auto flex h-20 max-w-7-xl items-center justify-between px-6">
        <div>
          <span className="text-2xl font-blod text-red-600">Come</span>
          <span className="ml-1 text-sm tracking-[0.25rem] text-zinc-500">
            cafe
          </span>
        </div>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#" className="text-red-600">
            Home
          </a>

          <Link
            href="/menu"
            className="text-zinc-700 transition hover:text-red-600"
          >
            menu
          </Link>

          <a href="#" className="text-zinc-700 transition hover:text-red-600">
            About
          </a>

          <a href="#" className="text-zinc-700 transition hover:text-red-600">
            Gallery
          </a>
          <a href="#" className="text-zinc-700 transition hover:text-red-600">
            Contact
          </a>
        </div>
        <button className="hidden rounded-full bg-red-600 px-6 py-3 font-medium text-white transition hover:bg-red-700 md:block">
          Order Now
        </button>
      </nav>
    </header>
  );
}
