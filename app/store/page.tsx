import Link from "next/link";

export default function Store() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#1a0000] to-black text-white flex flex-col items-center px-4 py-20">

      <h1 className="text-5xl font-bold text-red-600 text-center">
        Store
      </h1>

      <p className="mt-4 text-gray-400 text-center max-w-xl">
        Select the cluster you want to shop for.
      </p>

      <div className="mt-16 w-full max-w-3xl">

        <Link
          href="/store/chronicfiber"
          className="block bg-black/60 border border-red-900 rounded-xl p-12 hover:border-red-600 hover:scale-105 transition duration-300 text-center"
        >
          <h2 className="text-3xl font-semibold text-red-500">
            ChronicFiber 1000x PvP
          </h2>

          <p className="mt-4 text-gray-400">
            High-rate competitive PvP cluster. Instant action. All fun.
          </p>
        </Link>

      </div>

    </main>
  );
}
