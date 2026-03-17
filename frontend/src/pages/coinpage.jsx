import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { Navbar } from "../components/navbar.jsx"
import { useCoinStore } from "../store/coinstore.js"
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

export const CoinPage = () => {
  const { id } = useParams()
  const { coin, chartData, isLoading, fetchCoin, fetchCoinChart } = useCoinStore()

  useEffect(() => {
    fetchCoin(id)
    fetchCoinChart(id)
  }, [id])

  if (isLoading) return <p className="text-white text-center py-20">Loading...</p>
  if (!coin) return null

  const isPositive = coin.market_data.price_change_percentage_24h > 0

  // format chart data for recharts
  const formattedChart = chartData.map(([timestamp, price]) => ({
    time: new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    price: price.toFixed(2)
  }))

  return (
    <div className="text-white">
      <Navbar/>
      <div className="max-w-screen-md m-auto py-10 px-4">

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <img src={coin.image.large} alt={coin.name} className="w-16 h-16"/>
          <div>
            <h1 className="text-3xl font-bold">{coin.name} <span className="text-zinc-400 text-lg">{coin.symbol.toUpperCase()}</span></h1>
            <p className="text-zinc-400">Rank #{coin.market_cap_rank}</p>
          </div>
        </div>

        {/* Price */}
        <div className="bg-zinc-900/70 rounded-lg p-6 flex justify-between items-center mb-4">
          <p className="text-4xl font-bold">${coin.market_data.current_price.usd.toLocaleString()}</p>
          <p className={`text-lg font-bold ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
            {isPositive ? '+' : ''}{coin.market_data.price_change_percentage_24h.toFixed(2)}%
          </p>
        </div>

        {/* Chart */}
        <div className="bg-zinc-900/70 rounded-lg p-6 mb-4">
          <p className="text-zinc-400 text-sm mb-4">Price last 24 hours</p>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={formattedChart}>
              <XAxis dataKey="time" tick={{ fill: '#71717a', fontSize: 11 }} interval={20}/>
              <YAxis domain={['auto', 'auto']} tick={{ fill: '#71717a', fontSize: 11 }} width={80}/>
              <Tooltip
                contentStyle={{ backgroundColor: '#18181b', border: 'none', borderRadius: '8px' }}
                labelStyle={{ color: '#a1a1aa' }}
                formatter={(value) => [`$${Number(value).toLocaleString()}`, 'Price']}
              />
              <Line
                type="monotone"
                dataKey="price"
                stroke={isPositive ? '#4ade80' : '#f87171'}
                dot={false}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Stats */}
        <div className="bg-zinc-900/70 rounded-lg p-6 grid grid-cols-2 gap-4">
          <div>
            <p className="text-zinc-400 text-sm">Market Cap</p>
            <p className="font-semibold">${coin.market_data.market_cap.usd.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-zinc-400 text-sm">24H High</p>
            <p className="font-semibold">${coin.market_data.high_24h.usd.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-zinc-400 text-sm">24H Low</p>
            <p className="font-semibold">${coin.market_data.low_24h.usd.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-zinc-400 text-sm">Total Volume</p>
            <p className="font-semibold">${coin.market_data.total_volume.usd.toLocaleString()}</p>
          </div>
        </div>

      </div>
    </div>
  )
}