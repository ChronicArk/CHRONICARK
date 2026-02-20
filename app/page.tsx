import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden text-white bg-gradient-to-b from-black via-[#1a0000] to-black">

      <div className="relative z-10 flex flex-col items-center">

        <Image
          src="/chronic-logo.png"
          alt="ChronicArk Logo"
          width={420}
          height={420}
          className="drop-shadow-[0_0_15px_rgba(255,0,0,0.5)]"
          priority
        />

        <h1 className="mt-8 text-5xl md:text-7xl font-extrabold tracking-tight">
          Welcome to <span className="text-red-600">ChronicArk</span>
        </h1>
<p className="mt-6 text-lg text-gray-400 max-w-xl">
          The ultimate ARK PvP battlefield. Custom clusters. Competitive gameplay. No mercy.
        </p>

        <div className="mt-10">
  <Link
    href="/store"
    className="bg-red-600 hover:bg-red-700 px-10 py-4 rounded-lg font-semibold text-lg transition transform hover:scale-105 shadow-[0_0_20px_rgba(255,0,0,0.4)]"
  >
    Enter Store
  </Link>
</div>

      </div>

    </main>
  );
}
