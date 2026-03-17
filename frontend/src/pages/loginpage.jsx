import { useState } from "react"
import { Link ,useNavigate} from "react-router-dom"
import { useAuthStore } from "../store/authstore"

export const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate()

  const{user,logIn} = useAuthStore()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    logIn(formData)
    setFormData({ email: '', password: '' })
    navigate("/")
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="flex items-center justify-center space-x-2">
            <img
            src="https://cdn-icons-png.flaticon.com/128/15301/15301760.png"
            className="h-7"
            alt="Flowbite Logo"
          />
            <h1 className="text-3xl font-bold">CryptoLens</h1>
          </Link>
          <p className="text-zinc-500 mt-2 text-sm">Welcome back</p>
        </div>

        {/* Card */}
        <div className="bg-zinc-900/70 border border-zinc-800 rounded-lg p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            <div className="flex flex-col gap-2">
              <label className="text-sm text-zinc-400">Email</label>
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                className="bg-zinc-800 border border-zinc-700 rounded-md px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <label className="text-sm text-zinc-400">Password</label>
                <a href="#" className="text-xs text-zinc-500 hover:text-white transition-colors">Forgot password?</a>
              </div>
              <input
                name="password"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                className="bg-zinc-800 border border-zinc-700 rounded-md px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-white text-black font-bold rounded-md hover:bg-zinc-200 transition-colors mt-2"
            >
              Log In
            </button>

          </form>

          <p className="text-center text-zinc-500 text-sm mt-6">
            Don't have an account?{' '}
            <Link to="/signup" className="text-white hover:underline">Sign up</Link>
          </p>
        </div>

      </div>
    </div>
  )
}