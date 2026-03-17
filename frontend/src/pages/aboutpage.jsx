import { Navbar } from "../components/navbar.jsx"
import { Footer } from "../components/footer.jsx"

import { Link } from "react-router-dom"

export const AboutPage = () => {
  return (
    <div className="text-white min-h-screen bg-black">
      <Navbar />

      {/* Hero */}
      <div className="max-w-screen-md m-auto px-4 py-20 text-center">
        <p className="text-zinc-500 text-sm tracking-widest uppercase mb-4">About CryptoLens</p>
        <h1 className="text-5xl sm:text-7xl font-bold leading-tight mb-6">
          See the market.<br/>
          <span className="text-zinc-500">Clearly.</span>
        </h1>
        <p className="text-zinc-400 text-lg w-full sm:w-8/12 m-auto">
          CryptoLens is a real-time crypto monitoring tool built to give you clean, 
          fast, and reliable market data — no noise, no clutter.
        </p>
      </div>

      {/* Stats */}
      <div className="max-w-screen-md m-auto px-4 mb-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {[
            { value: '100+', label: 'Coins Tracked' },
            { value: 'Live', label: 'Price Updates' },
            { value: 'Free', label: 'Forever' },
          ].map((stat) => (
            <div key={stat.label} className="bg-zinc-900/70 rounded-lg p-6 text-center">
              <p className="text-4xl font-bold mb-1">{stat.value}</p>
              <p className="text-zinc-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="max-w-screen-md m-auto px-4 mb-16">
        <p className="text-zinc-500 text-sm tracking-widest uppercase mb-8 text-center">What we offer</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { icon: '📈', title: 'Live Prices', desc: 'Real-time price data for the top 30 cryptocurrencies powered by CoinGecko.' },
            { icon: '🔍', title: 'Search Any Coin', desc: 'Search across thousands of coins instantly and jump straight to their details.' },
            { icon: '📊', title: '24H Charts', desc: 'Beautiful line charts showing price movement over the last 24 hours.' },
            { icon: '🔐', title: 'Secure Auth', desc: 'Create an account to save your preferences and access your dashboard.' },
          ].map((feature) => (
            <div key={feature.title} className="bg-zinc-900/70 rounded-lg p-6 border border-zinc-800 hover:border-zinc-600 transition-colors">
              <p className="text-3xl mb-3">{feature.icon}</p>
              <p className="font-bold text-lg mb-2">{feature.title}</p>
              <p className="text-zinc-400 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Built with */}
      <div className="max-w-screen-md m-auto px-4 mb-16">
        <p className="text-zinc-500 text-sm tracking-widest uppercase mb-8 text-center">Built with</p>
        <div className="flex flex-wrap justify-center gap-3">
          {['React', 'Node.js', 'Express', 'MongoDB', 'Zustand', 'Tailwind CSS', 'CoinGecko API', 'Recharts'].map((tech) => (
            <span key={tech} className="px-4 py-2 bg-zinc-900/70 border border-zinc-800 rounded-full text-sm text-zinc-300">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-screen-md m-auto px-4 pb-20 text-center">
        <div className="bg-zinc-900/70 rounded-lg p-10 border border-zinc-800">
          <h2 className="text-3xl font-bold mb-3">Start monitoring now</h2>
          <p className="text-zinc-400 mb-6">Track your favorite coins and stay ahead of the market.</p>
          <Link to="/" className="px-8 py-3 bg-white text-black font-bold rounded-md hover:bg-zinc-200 transition-colors">
            View Markets
          </Link>
        </div>
      </div>
      <Footer/>
    </div>
  )
}