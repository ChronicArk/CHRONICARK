import BuyButton from "../../../components/BuyButton";
export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#1a0000] to-black text-white px-4 py-20">

      <h1 className="text-4xl md:text-5xl font-bold text-red-600 text-center">
        Private Server Network
      </h1>

      <p className="mt-4 text-gray-400 text-center max-w-3xl mx-auto">
        Elite Private PvP Instances. Built for organized squads that want controlled environments.
        Password protected and linked to the main cluster.
      </p>

      {/* STANDARD SETTINGS */}
      <div className="mt-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-red-500 mb-6">
          ⚙ Standard Settings (All Tiers)
        </h2>

        <div className="bg-black/60 border border-red-900 rounded-xl p-8">
          <ul className="space-y-2 text-gray-300">
            <li>• Your choice of map</li>
            <li>• Password Protected</li>
            <li>• Insta Heal Enabled</li>
            <li>• No Cryotimer</li>
            <li>• 24/7 Protection Enabled</li>
            <li>• Insta Raise</li>
          </ul>

          <p className="mt-6 text-gray-400">
            No tribe cap adjustments.
          </p>

          <p className="mt-2 text-gray-500">
            All private servers follow Chronic Ark enforcement policies.
          </p>
        </div>
      </div>

      {/* MONTHLY COST */}
      <div className="mt-16 max-w-6xl mx-auto">
        <div className="bg-black/60 border border-red-900 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-semibold text-red-500 mb-4">
            💰 Monthly Cost
          </h2>
          <p className="text-3xl font-bold">
            $45 Per Month (All Tiers)
          </p>
          <p className="mt-2 text-gray-400">
            Non-payment results in suspension.
          </p>
        </div>
      </div>

      {/* TIERS */}
      <div className="mt-20 max-w-6xl mx-auto grid gap-8 md:grid-cols-3">

        {/* TIER 1 */}
        <div className="bg-black/60 border border-red-900 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-red-500 mb-4">
            🥉 Tier 1 – Private Core
          </h3>

          <p className="text-xl font-semibold mb-6">
            $50 Setup
           <BuyButton itemName="Tier 1 priv" price="$50" /> 
          </p>

          <ul className="space-y-2 text-gray-300">
            <li>• 1 Private Server</li>
            <li>• 2 Dedicated Storage (your choice)</li>
            <li>• 2 Fully-Capped Tames (your choice)</li>
            <li>• Standard Admin Support</li>
          </ul>

          <p className="mt-6 text-gray-400">
            Entry tier for organized squads.
          </p>
        </div>

        {/* TIER 2 */}
        <div className="bg-black/60 border border-red-900 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-red-500 mb-4">
            🥈 Tier 2 – Private Warzone
          </h3>

          <p className="text-xl font-semibold mb-6">
            $75 Setup
            <BuyButton itemName="Tier 2 priv" price="$75" />
          </p>

          <ul className="space-y-2 text-gray-300">
            <li>• 1 Private Server</li>
            <li>• 4 Dedicated Storages (your choice)</li>
            <li>• 4 Fully-Capped Tames (your choice)</li>
          </ul>

          <p className="mt-6 text-gray-400">
            Structured for competitive tribe deployment.
          </p>
        </div>

        {/* TIER 3 */}
        <div className="bg-black/60 border border-red-900 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-red-500 mb-4">
            👑 Tier 3 – Private Elite
          </h3>

          <p className="text-xl font-semibold mb-6">
            $100 Setup
            <BuyButton itemName="Tier 3 priv" price="$100" />
          </p>

          <ul className="space-y-2 text-gray-300">
            <li>• 1 Private Server</li>
            <li>• 6 Dedicated Storages (your choice)</li>
            <li>• 6 Fully-Capped Tames (your choice)</li>
            <li>• Priority Support Response</li>
            <li>• Custom Server Name Display</li>
          </ul>

          <p className="mt-6 text-gray-400">
            Full launch-ready package for serious squads.
          </p>
        </div>

      </div>

      {/* POLICY */}
      <div className="mt-24 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-red-500 mb-6">
          🛑 Policy
        </h2>

        <div className="bg-black/60 border border-red-900 rounded-xl p-8">
          <ul className="space-y-2 text-gray-300">
            <li>• Startup bonuses are one-time</li>
            <li>• No replacing lost tames</li>
            <li>• No stat manipulation beyond cluster caps</li>
            <li>• No admin raid interference</li>
            <li>• All exploit bans apply</li>
          </ul>

          <p className="mt-6 text-gray-400">
            You are renting server access.
          </p>
          <p className="text-gray-400">
            You do not own hardware or cluster rights.
          </p>
          <p className="text-gray-400">
            All payments are final.
          </p>
        </div>
      </div>

    </main>
  );
}