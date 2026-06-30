export interface Question {
  question: string
  correct_answer: string
  incorrect_answers: string[]
}
 
export const questions: Question[] = [
  {
    question: "What city is the Eiffel Tower in? 🗼",
    correct_answer: "Paris",
    incorrect_answers: ["Rome", "London", "Berlin"]
  },
  {
    question: "What is the largest country in the world by area? 🌍",
    correct_answer: "Russia",
    incorrect_answers: ["Canada", "China", "USA"]
  },
  {
    question: "🏝️ Bali is an island in which country?",
    correct_answer: "Indonesia",
    incorrect_answers: ["Thailand", "Philippines", "Malaysia"]
  },
  {
    question: "What ocean is the Maldives located in? 🌊",
    correct_answer: "Indian Ocean",
    incorrect_answers: ["Pacific Ocean", "Atlantic Ocean", "Arctic Ocean"]
  },
  {
    question: "What is the tallest mountain in the world? 🏔️",
    correct_answer: "Mount Everest",
    incorrect_answers: ["K2", "Mont Blanc", "Kilimanjaro"]
  },
  {
    question: "What is the capital of Japan? 🇯🇵",
    correct_answer: "Tokyo",
    incorrect_answers: ["Osaka", "Kyoto", "Hiroshima"]
  },
  {
    question: "The Golden Gate Bridge is in which city? 🌉",
    correct_answer: "San Francisco",
    incorrect_answers: ["New York", "Los Angeles", "Chicago"]
  }
]
 