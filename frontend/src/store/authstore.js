import axios from "axios";
import { create } from "zustand";

const api = import.meta.env.MODE === "production" ? "/api" : "http://localhost:5000/api"
axios.defaults.withCredentials = true;

export const useAuthStore = create((set)=>({
    isLoading:false,
    isCheckingAuth:true,
    user:null,
    error:null,
    signUp:async(credentials)=>{
        set({isLoading:true})
        try {
            const res = await axios.post(`${api}/auth/signup`,credentials)
            set({user:res.data.user,isLoading:false})
        } catch (error) {
            set({error:error.message,isLoading:false})            
        }
    },
    logIn:async(credentials)=>{
        set({isLoading:true})
        try {
            const res = await axios.post(`${api}/auth/login`,credentials)
            set({user:res.data.user,isLoading:false})
        } catch (error) {
            set({error:error.message,isLoading:false}) 
        }
    },
    logOut: async () => {
     try {
    await axios.post(`${api}/auth/logout`)
    set({ user: null })
     } catch (error) {
    set({ error: error.message })
    }
},
    checkAuth:async()=>{
        set({isCheckingAuth:true})
        try {
            const res = await axios.get(`${api}/auth/checkauth`)
            set({user:res.data.user,isCheckingAuth:false})
        } catch (error) {
                console.log("checkAuth error:", error.response) // ← and this
            set({error:error.message,isCheckingAuth:false,user:null})
        }
    }
}))