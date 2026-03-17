import { Link } from "react-router-dom"

export const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-screen-md w-full text-center">

        {/* 404 big text */}
        <p className="text-[10rem] font-bold leading-none text-zinc-800 select-none">404</p>

        {/* Message */}
        <h1 className="text-4xl sm:text-5xl font-bold mt-4 mb-4">Page not found</h1>
        <p className="text-zinc-400 text-lg mb-10 w-full sm:w-8/12 m-auto">
          Looks like this page went to the moon and never came back. Let's get you back on track.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-3">
          <Link to="/" className="px-8 py-3 bg-white text-black font-bold rounded-md hover:bg-zinc-200 transition-colors">
            Go Home
          </Link>
          <Link to="/about" className="px-8 py-3 bg-zinc-900 border border-zinc-800 text-white font-bold rounded-md hover:bg-zinc-800 transition-colors">
            About
          </Link>
        </div>

      </div>
    </div>
  )
}