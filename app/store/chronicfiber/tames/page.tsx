import BuyButton from "../../../components/BuyButton";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#1a0000] to-black text-white px-4 py-20">

      <h1 className="text-4xl md:text-5xl font-bold text-red-600 text-center">
        Tames
      </h1>

      <p className="mt-4 text-gray-400 text-center">
        Capped and full mutation dinos.
      </p>

      <div className="mt-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-red-500 mb-8">
          🦖 Capped Tames
        </h2>

        <p className="text-gray-400 mb-8">
          (255 Base Stats)
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-black/60 border border-red-900 rounded-xl p-6">
            1 Dino — $10
            <BuyButton itemName="1 Dino" price="$10" />
          </div>
          <div className="bg-black/60 border border-red-900 rounded-xl p-6">
            3 Dinos — $20
            <BuyButton itemName="3 Dinos" price="$20" />
          </div>
          <div className="bg-black/60 border border-red-900 rounded-xl p-6">
            5 Dinos — $30
            <BuyButton itemName="5 Dinos" price="$30" />
          </div>
          <div className="bg-black/60 border border-red-900 rounded-xl p-6">
            10 Dinos — $50
            <BuyButton itemName="10 Dinos" price="$50" />
          </div>
          <div className="bg-black/60 border border-red-900 rounded-xl p-6">
            30 Dinos — $100
            <BuyButton itemName="30 Dinos" price="$100" />
          </div>
          <div className="bg-black/60 border border-red-900 rounded-xl p-6">
            60 Dinos + 4 ARB Dedis — $150
            <BuyButton itemName="60 Dinos" price="$150" />
          </div>
        </div>
      </div>

      <div className="mt-24 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-red-500 mb-8">
          🧬 Full Stat + Mutations
        </h2>

        <p className="text-gray-400 mb-6">
          (255 Base + 255 Mutations on ALL stats)
        </p>

        <div className="bg-black/60 border border-red-900 rounded-xl p-8">
          <p className="text-xl font-semibold mb-4">
            $15 per Dino
            <BuyButton itemName="Max lvl dino" price="$15" />
          </p>

          <ul className="text-gray-400 space-y-2">
            <li>• Can be added to any bundle</li>
            <li>• Bulk discounts available</li>
          </ul>
        </div>
      </div>

    </main>
  );
}