import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { questions } from '../data/questions'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import QuestionCard from '../components/QuestionCard'

export default function QuizPage() {
  const navigate = useNavigate()
  const [current, setCurrent] = useState(0) /* which Q u are in now ? */ 
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)

  function handleAnswer(answer: string) {
    if (selected) return
    setSelected(answer)

    const isCorrect = answer === questions[current].correct_answer
    const newScore = isCorrect ? score + 1 : score
    if (isCorrect) setScore(newScore)

    setTimeout(() => {
      const nextIndex = current + 1
      if (nextIndex >= questions.length) {
        navigate('/result', { state: { score: newScore, total: questions.length } })
      } else {
        setSelected(null)
        setCurrent(nextIndex)
      }
    }, 1000)
  }

  const q = questions[current]
  const answers = [...q.incorrect_answers, q.correct_answer].sort()

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "linear-gradient(135deg, #e9d5ff 0%, #fce7f3 50%, #dbeafe 100%)" }}
    >
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 sm:px-8 py-6">
        <QuestionCard
          question={q.question}
          answers={answers}
          correctAnswer={q.correct_answer}
          current={current}
          total={questions.length}
          score={score}
          selected={selected}
          onAnswer={handleAnswer}
        />
      </main>
      <Footer />
    </div>
  )
}