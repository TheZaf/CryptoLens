import { Navigate, Route,Routes } from "react-router-dom"
import { useEffect } from "react"
import {Loader} from 'lucide-react'

import {HomePage} from './pages/homepage.jsx'
import {SignupPage} from './pages/signuppage.jsx'
import {LoginPage} from './pages/loginpage.jsx'
import { CoinPage } from "./pages/coinpage.jsx"
import { AboutPage } from "./pages/aboutpage.jsx"
import { ServicesPage } from "./pages/servicepage.jsx"
import { useAuthStore } from "./store/authstore.js"
import { NotFoundPage } from "./components/404page.jsx"

function App() {

    const {user,checkAuth,isCheckingAuth} = useAuthStore()

     useEffect(() => {
        checkAuth()
      }, [])

      if(isCheckingAuth){//loading state
    return(
      <div className='h-screen'>
        <div className='flex items-center justify-center bg-black h-full'>
          <Loader className="animate-spin size-10"/>
        </div>
      </div>
    )
  }  

  return<>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/signup' element={!user ? <SignupPage/> : <Navigate to={'/'}/>}/> 
        <Route path='/login' element={!user ? <LoginPage/> : <Navigate to={'/'}/>}/>
        <Route path='/coin/:id' element={user ? <CoinPage/> : <LoginPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/services' element={<ServicesPage/>}/>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  
}

export default App
