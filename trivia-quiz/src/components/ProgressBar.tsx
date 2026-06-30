interface ProgressBarProps {
  current: number
  total: number
}
/* props: here we paased the varibles that where defined in the parent (QustionsCard) */ 
export default function ProgressBar({ current, total }: ProgressBarProps) {
  const pct = (current / total) * 100

  return (
    <div className="h-2 bg-[#f0e6ff] rounded-full mb-6 overflow-hidden">
      <div
        className="h-full rounded-full transition-[width] duration-500 ease-in-out"
        style={{
          width: `${pct}%`,
          background: "linear-gradient(90deg, #667eea, #f093fb)"
        }}
      />
    </div>
  )
}