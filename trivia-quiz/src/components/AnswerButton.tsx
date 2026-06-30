interface AnswerButtonProps {
  answer: string
  state: "default" | "correct" | "wrong" | "idle"
  onClick: () => void
  disabled: boolean
  animationDelay: string
}

export default function AnswerButton({ answer, state, onClick, disabled, animationDelay }: AnswerButtonProps) {
  const base = "border-2 rounded-xl px-[18px] py-3.5 text-left text-[15px] font-medium transition-all duration-150 w-full"

  const styles = {
    default: `${base} bg-[#f8f4ff] border-[#e8d5ff] text-[#2d1b69] hover:bg-[#ede0ff] hover:border-[#c084fc] hover:translate-x-1 active:scale-[0.99] cursor-pointer`,
    idle:    `${base} bg-[#f8f4ff] border-[#e8d5ff] text-[#2d1b69] cursor-default`,
    correct: `${base} bg-[#dcfce7] border-[#4ade80] text-[#166534] cursor-default`,
    wrong:   `${base} bg-[#fee2e2] border-[#f87171] text-[#991b1b] cursor-default`,
  }

  return (
    <button
      className={styles[state]}
      style={{ animationDelay }}
      onClick={onClick}
      disabled={disabled}
    >
      {answer}
    </button>
  )
}