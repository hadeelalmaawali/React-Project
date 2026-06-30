import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()

  return (
    <nav style={{ background: "linear-gradient(135deg, #667eea, #f093fb)" }} className="w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between shadow-md">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
        <span className="text-xl sm:text-2xl">🌍</span>
        <span className="text-lg sm:text-xl font-bold text-white tracking-tight">GeoQuiz</span>
      </div>
      <button
        onClick={() => navigate('/quiz')}
        className="text-xs sm:text-sm font-semibold text-[#667eea] bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:scale-105 transition-all duration-150 cursor-pointer"
      >
        Quiz Yourself ✏️
      </button>
    </nav>
  )
}