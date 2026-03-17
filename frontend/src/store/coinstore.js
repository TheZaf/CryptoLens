import { create } from "zustand";
import axios from "axios";

const api = import.meta.env.MODE === "production" ? "/api" : "http://localhost:5000/api"
axios.defaults.withCredentials = true;

export const useCoinStore = create((set)=>({
    coins:[],
    coin:null,
    isLoading:false,
    error:null,
    chartData: [],
    searchResults: [],
    isSearching: false,

    fetchCoins:async()=>{
        set({isLoading:true})
        try {
          const res = await axios.get(`${api}/coins/getallcoins`)
          set({coins:res.data.content,isLoading:false})  
        } catch (error) {
            set({error:error.message,isLoading:false})
        }
    },
    fetchCoin: async (id) => {
    set({ isLoading: true })
    try {
      const res = await axios.get(`${api}/coins/${id}`)
      set({ coin: res.data.content, isLoading: false })
    } catch (error) {
      set({ error: error.message, isLoading: false })
    }
    },
    fetchCoinChart: async (id) => {
  set({ isLoading: true })
  try {
    const res = await axios.get(`${api}/coins/${id}/chart`)
    set({ chartData: res.data.content.prices, isLoading: false })
  } catch (error) {
    set({ error: error.message, isLoading: false })
  }
    },
    searchCoins: async (query) => {
  set({ isSearching: true })
  try {
    const res = await axios.get(`${api}/coins/search/${query}`)
    set({ searchResults: res.data.content, isSearching: false })
  } catch (error) {
    set({ error: error.message, isSearching: false })
  }
    }
}))