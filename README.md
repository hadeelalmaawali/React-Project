Components

This project taught me how to break a UI into small, reusable pieces instead of writing everything in one file. I split the app into:


Navbar — the top bar with the logo and navigation button
Footer — the bottom bar with quiz info
ProgressBar — shows how far you are in the quiz
AnswerButton — a single answer button that changes color based on correct/wrong/idle state
QuestionCard — puts the question, progress bar, and answer buttons together
ScoreDisplay — the result screen (later moved to its own page)


Each component gets its data through props, which I learned is how React components talk to each other.