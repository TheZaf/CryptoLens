import axios from "axios";



export const fetchFromCoin = async(url) => {
    const options = {
        headers: {
            'x-cg-demo-api-key': process.env.COIN_API_KEY,
            accept: 'application/json',
        }};

    const res = await axios.get(url,options)  

    if(res.status !== 200){
        throw new Error('Failed to fetch from coingecko' + res.statusText)
    }

    return res.data

}