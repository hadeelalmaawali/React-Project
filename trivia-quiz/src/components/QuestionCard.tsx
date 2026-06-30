import ProgressBar from "./ProgressBar"
import AnswerButton from "./AnswerButton"

interface QuestionCardProps {
  question: string
  answers: string[]
  correctAnswer: string
  current: number
  total: number
  score: number
  selected: string | null
  onAnswer: (answer: string) => void
}
/* Functional components : funcation retrun JSX*/
export default function QuestionCard({
  question,
  answers,
  correctAnswer,
  current,
  total,
  score,
  selected,
  onAnswer
}: QuestionCardProps) {

  function getState(answer: string): "default" | "correct" | "wrong" | "idle" {
    if (selected === null) return "default"
    if (answer === correctAnswer) return "correct"
    if (answer === selected) return "wrong"
    return "idle"
  }

  return (
    <div className="w-full max-w-[90%] sm:max-w-130 bg-white/95 rounded-3xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
      <ProgressBar current={current} total={total} />
      <div className="flex justify-between items-center mb-5">
        <span className="text-[12px] sm:text-[13px] text-[#9b8ec4] font-medium">
          Question {current + 1} of {total}
        </span>
        <span
          className="text-[12px] sm:text-[13px] font-semibold text-white px-3 sm:px-3.5 py-1 rounded-full"
          style={{ background: "linear-gradient(135deg, #667eea, #f093fb)" }}
        >
          Score: {score}
        </span>
      </div>
      <h2 className="text-lg sm:text-xl font-semibold text-[#2d1b69] leading-relaxed mb-6 min-h-12.5 sm:min-h-15">
        {question}
      </h2>
      <div className="flex flex-col gap-2 sm:gap-2.5">
        {answers.map((answer, i) => (
          <AnswerButton
            key={answer}
            answer={answer}
            state={getState(answer)}
            onClick={() => onAnswer(answer)}
            disabled={selected !== null}
            animationDelay={`${i * 0.06}s`}
          />
        ))}
      </div>
    </div>
  )
}