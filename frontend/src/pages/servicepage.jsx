import { Navbar } from "../components/navbar.jsx"
import { Link } from "react-router-dom"

export const ServicesPage = () => {
  return (
    <div className="text-white min-h-screen bg-black">
      <Navbar />

      {/* Hero */}
      <div className="max-w-screen-md m-auto px-4 py-20 text-center">
        <p className="text-zinc-500 text-sm tracking-widest uppercase mb-4">What We Offer</p>
        <h1 className="text-5xl sm:text-7xl font-bold leading-tight mb-6">
          Everything you need.<br/>
          <span className="text-zinc-500">Nothing you don't.</span>
        </h1>
        <p className="text-zinc-400 text-lg w-full sm:w-8/12 m-auto">
          CryptoLens gives you the tools to monitor, analyze, and stay ahead of the crypto market.
        </p>
      </div>

      {/* Portfolio Watchlist */}
      <div className="max-w-screen-md m-auto px-4 mb-10">
        <div className="bg-zinc-900/70 rounded-lg p-8 border border-zinc-800 hover:border-zinc-600 transition-colors">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">📋</span>
            <div>
              <p className="text-xs text-zinc-500 tracking-widest uppercase">Service 01</p>
              <h2 className="text-2xl font-bold">Portfolio Watchlist</h2>
            </div>
          </div>
          <p className="text-zinc-400 leading-relaxed mb-6">
            Save and track your favorite coins in one place. Build a personal watchlist 
            so you never lose sight of the coins that matter most to you. Login to sync 
            your watchlist across devices.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {['Save favorite coins', 'Synced to your account', 'One click access', 'Live price updates', 'Quick remove', 'Mobile friendly'].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-zinc-300">
                <span className="text-green-400">✓</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Price Alerts */}
      <div className="max-w-screen-md m-auto px-4 mb-10">
        <div className="bg-zinc-900/70 rounded-lg p-8 border border-zinc-800 hover:border-zinc-600 transition-colors">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">🔔</span>
            <div>
              <p className="text-xs text-zinc-500 tracking-widest uppercase">Service 02</p>
              <h2 className="text-2xl font-bold">Price Alerts</h2>
            </div>
          </div>
          <p className="text-zinc-400 leading-relaxed mb-6">
            Set custom price targets and get notified the moment a coin hits your mark. 
            Never miss a buying opportunity or fail to protect your gains again.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {['Set price targets', 'Above & below alerts', 'Instant notifications', 'Multiple coins', 'Easy to manage', 'No spam'].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-zinc-300">
                <span className="text-green-400">✓</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Market Analysis */}
      <div className="max-w-screen-md m-auto px-4 mb-16">
        <div className="bg-zinc-900/70 rounded-lg p-8 border border-zinc-800 hover:border-zinc-600 transition-colors">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">📊</span>
            <div>
              <p className="text-xs text-zinc-500 tracking-widest uppercase">Service 03</p>
              <h2 className="text-2xl font-bold">Market Analysis</h2>
            </div>
          </div>
          <p className="text-zinc-400 leading-relaxed mb-6">
            Deep dive into any coin with 24H price charts, market cap rankings, volume data, 
            and price change indicators. All the data you need to make informed decisions.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {['24H line charts', 'Market cap data', 'Volume tracking', 'Price change %', 'ATH & ATL data', 'Top 30 coins'].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-zinc-300">
                <span className="text-green-400">✓</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-screen-md m-auto px-4 pb-20 text-center">
        <div className="bg-zinc-900/70 rounded-lg p-10 border border-zinc-800">
          <h2 className="text-3xl font-bold mb-3">Ready to get started?</h2>
          <p className="text-zinc-400 mb-6">Create a free account and access all features today.</p>
          <div className="flex justify-center gap-3">
            <Link to="/signup" className="px-8 py-3 bg-white text-black font-bold rounded-md hover:bg-zinc-200 transition-colors">
              Sign Up Free
            </Link>
            <Link to="/" className="px-8 py-3 bg-zinc-800 text-white font-bold rounded-md hover:bg-zinc-700 transition-colors">
              View Markets
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}