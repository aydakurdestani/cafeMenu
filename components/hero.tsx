import hero from "@/public/img/hero (2).jpg";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3rem] text-red-600">
            Welcome to Come Cafe
          </p>

          <h1 className="text-5xl font-bold leading-tight text-zinc-900 md:text-6xl">
            Good Coffee.
            <br />
            <span className="text-red-600">Good Moments.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-zinc-600">
            Fresh coffee, delicious treats, and a cozy place to enjoy your
            everyday moments.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/menu"
              className="rounded-full bg-red-600 px-7 py-3 font-medium text-white transition hover:bg-red-700"
            >
              View Menu
            </Link>

            <a
              href="#about"
              className="rounded-full border border-zinc-300 px-7 py-3 font-medium text-zinc-700 transition hover:border-red-600 hover:text-red-600"
            >
              Our Story
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl bg-red-50">
            <Image
              src={hero}
              alt="Fresh coffee at Come Cafe"
              className="h-[500px] w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-5 -left-5 rounded-2xl bg-white px-6 py-4 shadow-lg">
            <p className="text-sm text-zinc-500">Freshly brewed</p>
            <p className="font-semibold text-zinc-900">Every single day ☕</p>
          </div>
        </div>
      </div>
    </section>
  );
}
