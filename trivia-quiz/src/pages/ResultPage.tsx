import { useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

interface LocationState {
  score: number
  total: number
}

export default function ResultPage() {
  const location = useLocation()
  const navigate = useNavigate()

  const state = location.state as LocationState | null
  if (!state) {
    navigate('/')
    return null
  }

  const { score, total } = state
  const pct = Math.round((score / total) * 100)

  const emoji = pct === 100 ? '🏆' : pct >= 60 ? '✈️' : '🌍'
  const title = pct === 100 ? "You're a world champion!" : pct >= 60 ? "Great explorer!" : "Keep traveling!"
  const sub =
    pct === 100
      ? "You got every single question right. The world has no secrets from you."
      : pct >= 60
      ? "You've got solid geography knowledge. A few more trips and you'll nail it!"
      : "Don't worry every explorer starts somewhere. Try again!"

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "linear-gradient(135deg, #e9d5ff 0%, #fce7f3 50%, #dbeafe 100%)" }}
    >
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 sm:px-8 py-6">
        <div className="w-full max-w-[90%] sm:max-w-[520px] bg-white/95 rounded-3xl p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.15)] text-center">
          <div
            className="inline-block text-xs font-semibold tracking-widest uppercase text-white px-4 py-1.5 rounded-full mb-6"
            style={{ background: "linear-gradient(135deg, #667eea, #f093fb)" }}
          >
            Quiz Complete ✅
          </div>
          <div className="text-[56px] sm:text-[72px] mb-4 leading-none">{emoji}</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#2d1b69] mb-3">{title}</h1>
          <p className="text-sm sm:text-[15px] text-[#9b8ec4] mb-8 leading-relaxed">{sub}</p>
          <div
            className="text-5xl sm:text-6xl font-bold mb-2"
            style={{
              background: "linear-gradient(135deg, #667eea, #f093fb)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
          >
            {score} / {total}
          </div>
          <p className="text-sm text-[#c4b5e8] mb-8 sm:mb-10">{pct}% correct</p>
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <div className="h-px flex-1 bg-[#f0e6ff]" />
            <span className="text-base">🗺️</span>
            <div className="h-px flex-1 bg-[#f0e6ff]" />
          </div>
          <div className="flex flex-col gap-3">
            <button
              className="w-full text-white border-none rounded-xl px-6 sm:px-9 py-3 sm:py-3.5 text-sm sm:text-base font-semibold cursor-pointer transition-all duration-150 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
              style={{ background: "linear-gradient(135deg, #667eea, #f093fb)" }}
              onClick={() => navigate('/quiz')}
            >
              Play again 🔁
            </button>
            <button
              className="w-full bg-[#f8f4ff] border-2 border-[#e8d5ff] text-[#2d1b69] rounded-xl px-6 sm:px-9 py-3 sm:py-3.5 text-sm sm:text-base font-semibold cursor-pointer transition-all duration-150 hover:bg-[#ede0ff] hover:border-[#c084fc]"
              onClick={() => navigate('/')}
            >
              Back to home 🏠
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}