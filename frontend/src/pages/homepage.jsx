import { useEffect } from "react"
import { Navbar } from "../components/navbar.jsx"
import { useCoinStore } from "../store/coinstore.js"
import { Link } from "react-router-dom"
import { Footer } from "../components/footer.jsx"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuthStore } from "../store/authstore.js"



export const HomePage = () => {
  const { coins, isLoading, fetchCoins } = useCoinStore()
  const { searchCoins, searchResults, isSearching } = useCoinStore()
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

const handleSearch = async (e) => {
  e.preventDefault()
  if (!query.trim()) return
  await searchCoins(query)
}

  useEffect(() => {
    fetchCoins()
  }, [])

  return <>
    <div className="text-white">
      <Navbar/>
      <div className="flex items-center justify-center flex-col py-20 text-center px-4">
        <h1 className="text-4xl sm:text-6xl leading-tight font-bold">Smart<br/><span className="text-zinc-500">Crypto Monitoring</span></h1>
        <p className="w-10/12 sm:w-7/12 md:w-5/12 text-center py-5">
          Follow the crypto market with live price updates and easy-to-read data.
        </p>
        <form onSubmit={handleSearch} className="flex gap-2 w-full sm:w-auto relative">
        <input
          className="flex-1 sm:flex-none sm:w-80 md:w-96 px-7 py-3 sm:py-4 rounded-md text-black"
          type="text"
          placeholder="Search Bitcoin, Ethereum..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="px-5 py-3 bg-zinc-700 rounded-md font-bold" type="submit">
          {isSearching ? 'Searching...' : 'Search'}
        </button>

          {/* Dropdown results */}
          {searchResults.length > 0 && (
            <div className="absolute top-14 left-0 w-full bg-zinc-800 rounded-lg shadow-lg z-10 max-h-72 overflow-y-auto">
              {searchResults.slice(0, 10).map((coin) => (
                <div
                  key={coin.id}
                  onClick={() => {
                    navigate(`/coin/${coin.id}`)
                    setQuery('')
                  }}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-zinc-700 cursor-pointer"
                >
                  <img src={coin.thumb} alt={coin.name} className="w-6 h-6"/>
                  <p className="font-semibold">{coin.name}</p>
                  <p className="text-zinc-400 text-sm">{coin.symbol}</p>
                </div>
              ))}
            </div>
          )}
        </form>
       
      </div>

      <div className="max-w-screen-md m-auto rounded-lg bg-zinc-900/70 mb-10 mx-4 sm:mx-auto">
        
        {/* Header */}
        <div className="grid items-center border-b border-zinc-800 py-[15px] px-[20px]
          grid-cols-[0.5fr_2fr_1fr_1fr] sm:grid-cols-[0.5fr_2fr_1fr_1fr_1.5fr]">
          <p>#</p>
          <p>Coin</p>
          <p>Price</p>
          <p>24H</p>
          <p className="hidden sm:block">Market Cap</p>
        </div>

        {/* Rows */}
        {isLoading ? (
          <p className="text-center py-10 text-zinc-400">Loading...</p>
        ) : (
          coins.map((coin) => {
            const isPositive = coin.price_change_percentage_24h > 0
            return (
              <Link to={`/coin/${coin.id}`} key={coin.id}>
                <div className="grid items-center border-b border-zinc-800 hover:bg-zinc-800/50 py-[15px] px-[20px]
                  grid-cols-[0.5fr_2fr_1fr_1fr] sm:grid-cols-[0.5fr_2fr_1fr_1fr_1.5fr]">
                  <p className="text-zinc-400 text-sm">{coin.market_cap_rank}</p>
                  <div className="flex items-center gap-2">
                    <img src={coin.image} alt={coin.name} className="w-6 h-6 sm:w-7 sm:h-7"/>
                    <div>
                      <p className="font-semibold text-sm sm:text-base">{coin.name}</p>
                      <p className="text-zinc-400 text-xs">{coin.symbol.toUpperCase()}</p>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base">${coin.current_price.toLocaleString()}</p>
                  <p className={`text-sm sm:text-base ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
                    {isPositive ? '+' : ''}{coin.price_change_percentage_24h.toFixed(2)}%
                  </p>
                  <p className="hidden sm:block text-sm">${coin.market_cap.toLocaleString()}</p>
                </div>
              </Link>
            )
          })
        )}
      </div>
      <Footer/>
    </div>
  </>
}