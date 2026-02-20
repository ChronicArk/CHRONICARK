"use client";

import Link from "next/link";

export default function ChronicFiberStore() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#1a0000] to-black text-white px-4 py-20 flex flex-col items-center">

      <h1 className="text-4xl md:text-5xl font-bold text-red-600 text-center">
        ChronicFiber 1000x PvP
      </h1>

      <p className="mt-4 text-gray-400 text-center max-w-xl">
        Select a category to begin shopping.
      </p>

  <div className="mt-16 grid gap-8 md:grid-cols-2 w-full max-w-4xl">

  {/* Max Level Survivor */}
  <Link
    href="/store/chronicfiber/maxlevel"
    className="bg-black/60 border border-red-900 rounded-xl p-10 hover:border-red-600 hover:scale-105 transition duration-300"
  >
    <h2 className="text-2xl font-semibold text-red-500">
      Max Level Survivor
    </h2>
    <p className="mt-3 text-gray-400">
      Ascension & Explorer unlocks.
    </p>
  </Link>

  {/* Tames */}
  <Link
    href="/store/chronicfiber/tames"
    className="bg-black/60 border border-red-900 rounded-xl p-10 hover:border-red-600 hover:scale-105 transition duration-300"
  >
    <h2 className="text-2xl font-semibold text-red-500">
      Tames
    </h2>
    <p className="mt-3 text-gray-400">
      Capped and full mutation dinos.
    </p>
  </Link>

  {/* Resources */}
  <Link
    href="/store/chronicfiber/resources"
    className="bg-black/60 border border-red-900 rounded-xl p-10 hover:border-red-600 hover:scale-105 transition duration-300"
  >
    <h2 className="text-2xl font-semibold text-red-500">
      Resources
    </h2>
    <p className="mt-3 text-gray-400">
      Dedis & crafting blueprints.
    </p>
  </Link>

  {/* Custom Builds */}
  <Link
    href="/store/chronicfiber/custom"
    className="bg-black/60 border border-red-900 rounded-xl p-10 hover:border-red-600 hover:scale-105 transition duration-300"
  >
    <h2 className="text-2xl font-semibold text-red-500">
      Custom Builds
    </h2>
    <p className="mt-3 text-gray-400">
      Custom caves and entrances.
    </p>
  </Link>

<Link
  href="/store/chronicfiber/private-servers"
  className="bg-black/60 border border-red-900 rounded-xl p-10 hover:border-red-600 hover:scale-105 transition duration-300"
  >
  <h2 className="text-xl font-semibold">
    🏰 Private Servers
  </h2>
  <p className="text-gray-400 mt-2 text-sm">
    Safe private servers for serious tribes.
  </p>
</Link>

  {/* Currency (Leave Alone For Later) */}
  <Link
    href="/store/chronicfiber/currency"
    className="bg-black/60 border border-red-900 rounded-xl p-10 hover:border-red-600 hover:scale-105 transition duration-300"
  >
    <h2 className="text-2xl font-semibold text-red-500">
      Currency
    </h2>
    <p className="mt-3 text-gray-400">
      Coming soon.
    </p>
  </Link>

</div>

    </main>
  );
}