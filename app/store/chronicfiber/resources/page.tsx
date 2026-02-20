import BuyButton from "../../../components/BuyButton";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#1a0000] to-black text-white px-4 py-20">

      <h1 className="text-4xl md:text-5xl font-bold text-red-600 text-center">
        Resources
      </h1>

      <p className="mt-4 text-gray-400 text-center">
        Dedicated storages and auto crafting blueprints.
      </p>

      {/* ARB & SHARDS */}
      <div className="mt-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-red-500 mb-8">
          🔥 ARB & Shards
        </h2>

        <div className="grid gap-6 md:grid-cols-4">
          <div className="bg-black/60 border border-red-900 rounded-xl p-6">
            1 Dedi — $10
            <BuyButton itemName="1 Dedi" price="$10" />
          </div>
          <div className="bg-black/60 border border-red-900 rounded-xl p-6">
            3 Dedis — $20
            <BuyButton itemName="3 Dedis" price="$20" />
          </div>
          <div className="bg-black/60 border border-red-900 rounded-xl p-6">
            5 Dedis — $30
            <BuyButton itemName="5 Dedis" price="$30" />
          </div>
          <div className="bg-black/60 border border-red-900 rounded-xl p-6">
            10 Dedis — $50
            <BuyButton itemName="10 Dedis" price="$50" />
          </div>
        </div>
      </div>

      {/* RESOURCES / STRUCTURES */}
      <div className="mt-24 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-red-500 mb-8">
          🏗 Resources / Structures
        </h2>

        <div className="grid gap-6 md:grid-cols-4">
          <div className="bg-black/60 border border-red-900 rounded-xl p-6">
            1 Dedi — $5
            <BuyButton itemName="1 Dedi" price="$5" />
          </div>
          <div className="bg-black/60 border border-red-900 rounded-xl p-6">
            3 Dedis — $10
            <BuyButton itemName="3 Dedis" price="$10" />
          </div>
          <div className="bg-black/60 border border-red-900 rounded-xl p-6">
            5 Dedis — $15
            <BuyButton itemName="5 Dedis" price="$15" />
          </div>
          <div className="bg-black/60 border border-red-900 rounded-xl p-6">
            10 Dedis — $25
            <BuyButton itemName="10 Dedis" price="$25" />
          </div>
        </div>
      </div>

      {/* AUTO CRAFTING BPs */}
      <div className="mt-24 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-red-500 mb-8">
          🛠 Auto Crafting BPs
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-black/60 border border-red-900 rounded-xl p-6">
            ARB Auto Crafting BP — $5
            <BuyButton itemName="Arb Auto Crafter Bp" price="$5" />
          </div>
          <div className="bg-black/60 border border-red-900 rounded-xl p-6">
            Shard Auto Crafting BP — $3
            <BuyButton itemName="Shard Auto Crafter Bp" price="$3" />
          </div>
        </div>
      </div>

    </main>
  );
}