import { fetchFromCoin } from "../service/coin.service.js"

export const getCoins = async(req,res)=>{
    try {
        const data = await fetchFromCoin('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=30',)
        res.json({success:true,content:data})
    } catch (error) {
        console.log("Erron in getcoins controller",error)
        res.status(500).json({message:'internal server error'})
    }
}

export const getCoin = async (req, res) => {
  try {
    const { id } = req.params
    const data = await fetchFromCoin(`https://api.coingecko.com/api/v3/coins/${id}`)
    res.json({ success: true, content: data })
  } catch (error) {
    console.log("Error in getCoin controller", error)
    res.status(500).json({ message: 'internal server error' })
  }
}

export const getCoinChart = async (req, res) => {
  try {
    const { id } = req.params
    const data = await fetchFromCoin(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=1`
    )
    res.json({ success: true, content: data })
  } catch (error) {
    console.log("Error in getCoinChart controller", error)
    res.status(500).json({ message: 'internal server error' })
  }
}

export const searchCoins = async (req, res) => {
  try {
    const { query } = req.params
    const data = await fetchFromCoin(
      `https://api.coingecko.com/api/v3/search?query=${query}`
    )
    res.json({ success: true, content: data.coins })
  } catch (error) {
    console.log("Error in searchCoins controller", error)
    res.status(500).json({ message: 'internal server error' })
  }
}