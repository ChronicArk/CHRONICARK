import BuyButton from "../../../components/BuyButton";
export default function CustomBuildsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#1a0000] to-black text-white px-4 py-20">

      <h1 className="text-4xl font-bold text-red-600 text-center">
        Custom Builds
      </h1>

      <div className="mt-16 max-w-4xl mx-auto space-y-8">

        <div className="bg-black/60 border border-red-900 p-8 rounded-xl">
          <h2 className="text-xl text-red-500 font-semibold">
            Custom Cave / Base
          </h2>
          <p className="mt-3">
            Price varies normally is around $40-$60
          </p>
          <p className="text-gray-400">
            Make donation ticket in Discord to review custom cave with admin
          </p>
        </div>

        <div className="bg-black/60 border border-red-900 p-8 rounded-xl">
          <p>Stego Entrance — $10</p>
          <BuyButton itemName="Stego Size Entrance" price="$10" />
          <p>Carbo Entrance — $20</p>
          <BuyButton itemName="Carbo Sized Entrance" price="$20" />
          <p>Crouch Entrance — $30</p>
          <BuyButton itemName="Crouch Entrance" price="$30" />
        </div>

      </div>

    </main>
  );
}
