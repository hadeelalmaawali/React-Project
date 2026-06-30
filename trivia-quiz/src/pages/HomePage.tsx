import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function HomePage() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: "", age: "" })
  const [errors, setErrors] = useState({ name: "", age: "" })

  function handleChange(e: { target: { name: string; value: string } }) {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: "" })
  }

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault()

    const newErrors = { name: "", age: "" }
    let hasError = false

    // Name validation
    if (form.name.trim() === "") {
      newErrors.name = "Please enter your name! 👆"
      hasError = true
    } else if (/\d/.test(form.name)) {
      newErrors.name = "Name can't contain numbers! 🚫"
      hasError = true
    }

    // Age validation
    if (form.age.trim() === "") {
      newErrors.age = "Please enter your age! 👆"
      hasError = true
    } else if (isNaN(Number(form.age))) {
      newErrors.age = "Age must be a number! 🚫"
      hasError = true
    } else if (Number(form.age) < 5 || Number(form.age) > 99) {
      newErrors.age = "Age must be between 5 and 99! 🚫"
      hasError = true
    }

    if (hasError) {
      setErrors(newErrors)
      return
    }

    navigate('/quiz', { state: { name: form.name.trim(), age: form.age } })
  }

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "linear-gradient(135deg, #e9d5ff 0%, #fce7f3 50%, #dbeafe 100%)" }}
    >
      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-8 py-10 text-center">

        {/* Hero */}
        <div className="text-5xl sm:text-6xl mb-4">🌍</div>
        <h1 className="text-2xl sm:text-4xl font-bold text-[#2d1b69] mb-3 leading-tight">
          How well do you know the world?
        </h1>
        <p className="text-[#9b8ec4] text-sm sm:text-lg max-w-xs sm:max-w-md mb-8">
          Test your geography knowledge with 7 questions about countries, cities, and landmarks from around the globe.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xs sm:max-w-sm flex flex-col gap-3 mb-8"
        >
          {/* Name input */}
          <div className="flex flex-col gap-1 text-left">
            <label className="text-xs font-semibold text-[#9b8ec4] pl-1">
              Your Name
            </label>
            <input
              id="player-name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name..."
              className="w-full px-4 py-3 rounded-2xl border-2 border-[#e8d5ff] bg-white/90 text-[#2d1b69] font-medium text-sm sm:text-base outline-none focus:border-[#c084fc] transition-all duration-150 placeholder:text-[#c4b5e8]"
            />
            {errors.name && (
              <p className="text-red-400 text-xs font-medium pl-1">{errors.name}</p>
            )}
          </div>

          {/* Age input */}
          <div className="flex flex-col gap-1 text-left">
            <label className="text-xs font-semibold text-[#9b8ec4] pl-1">
              Your Age
            </label>
            <input
              id="player-age"
              name="age"
              type="text"
              value={form.age}
              onChange={handleChange}
              placeholder="Enter your age..."
              className="w-full px-4 py-3 rounded-2xl border-2 border-[#e8d5ff] bg-white/90 text-[#2d1b69] font-medium text-sm sm:text-base outline-none focus:border-[#c084fc] transition-all duration-150 placeholder:text-[#c4b5e8]"
            />
            {errors.age && (
              <p className="text-red-400 text-xs font-medium pl-1">{errors.age}</p>
            )}
          </div>

          <button
            id="start-btn"
            type="submit"
            className="w-full text-white text-base sm:text-lg font-semibold px-8 py-3 sm:py-4 rounded-2xl hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-150 shadow-lg cursor-pointer mt-1"
            style={{ background: "linear-gradient(135deg, #667eea, #f093fb)" }}
          >
            Start Quiz 🚀
          </button>
        </form>

        {/* Info cards */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full max-w-xs sm:max-w-lg">
          <div className="bg-white/80 rounded-2xl p-3 sm:p-5 shadow-sm">
            <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">📝</div>
            <div className="text-xl sm:text-2xl font-bold text-[#2d1b69]">7</div>
            <div className="text-[10px] sm:text-xs text-[#9b8ec4] mt-1">Questions</div>
          </div>
          <div className="bg-white/80 rounded-2xl p-3 sm:p-5 shadow-sm">
            <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">🌐</div>
            <div className="text-xl sm:text-2xl font-bold text-[#2d1b69]">Global</div>
            <div className="text-[10px] sm:text-xs text-[#9b8ec4] mt-1">Topics</div>
          </div>
          <div className="bg-white/80 rounded-2xl p-3 sm:p-5 shadow-sm">
            <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">⚡</div>
            <div className="text-xl sm:text-2xl font-bold text-[#2d1b69]">Fast</div>
            <div className="text-[10px] sm:text-xs text-[#9b8ec4] mt-1">& Fun</div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  )
}