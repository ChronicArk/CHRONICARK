"use client";

import BuyButton from "../../../components/BuyButton";
export default function MaxLevelPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#1a0000] to-black text-white px-4 py-20">

      <h1 className="text-4xl font-bold text-red-600 text-center">
        Max Level Survivor
      </h1>

      <div className="mt-16 max-w-4xl mx-auto space-y-10">

        <div className="bg-black/60 border border-red-900 p-8 rounded-xl">
          <h2 className="text-2xl text-red-500 font-semibold">
            MAX ASCENSION / ALL BOSSES Lvl 196
          </h2>
          <p className="mt-4">$10 per person</p>
          <p className="text-gray-400">Tribe discounts available</p>
          <BuyButton itemName="Max Ascension" price="$10" />
        </div>

        <div className="bg-black/60 border border-red-900 p-8 rounded-xl">
          <h2 className="text-2xl text-red-500 font-semibold">
            EXPLORER NOTES
          </h2>
          <p className="mt-4">$15 All Explorer Notes Unlocked</p>
          <p className="text-gray-400">Tribe discounts available</p>
          <BuyButton itemName="Explorer Notes" price="$15" />
        </div>

      </div>

    </main>
  );
}
