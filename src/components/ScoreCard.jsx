/**
 * ScoreCard Component
 * -------------------
 * Displays the final score and detailed summary after a quiz ends.
 * Shows which questions were answered correctly or incorrectly.
 *
 * Props:
 * - questions: Array of question objects
 * - answers: Object mapping question IDs to user's answers
 * - onRestart: Function to restart the quiz
 * - userName: String, the name of the user
 */

export default function ScoreCard({ questions, answers, onRestart, userName }) {
  // Calculate score by counting correct answers
  const score = questions.filter((q) => answers[q.id] === q.answer).length;

  // Count wrong answers
  const wrongCount = questions.length - score;

  // Dynamic heading text based on performance
  const headingText =
    wrongCount > 5 ? `Try harder ${userName}!` : `Very Well ${userName}!`;

  // Dynamic heading color
  const headingColor = wrongCount > 5 ? "text-red-600" : "text-green-600";

  return (
    <div className="rounded-2xl bg-white p-6 shadow-xl">
      {/* Heading with dynamic text and color */}
      <h2 className={`mb-4 text-center text-3xl font-bold ${headingColor}`}>
        {headingText}
      </h2>

      {/* Total score */}
      <p className="mb-6 text-center text-lg">
        You scored <span className="font-bold">{score}</span> /{" "}
        {questions.length}
      </p>

      {/* Detailed question-wise summary */}
      <div className="mb-6 space-y-3">
        {questions.map((q) => (
          <div key={q.id} className="rounded-lg border p-3 shadow-sm">
            {/* Question text */}
            <p className="font-medium">{q.question}</p>

            {/* User's answer with color coding */}
            <p>
              Your Answer:{" "}
              <span
                className={
                  answers[q.id] === q.answer
                    ? "text-green-600 font-semibold" // Correct answer
                    : "text-red-600 font-semibold" // Incorrect answer
                }
              >
                {answers[q.id] || "Not answered"}{" "}
                {/* Fallback for unanswered questions */}
              </span>
            </p>

            {/* Show correct answer */}
            <p className="text-sm text-gray-500">Correct Answer: {q.answer}</p>
          </div>
        ))}
      </div>

      {/* Restart button */}
      <button
        onClick={onRestart} // Calls parent function to reset the quiz
        className="w-full rounded-lg bg-blue-600 py-2 font-semibold text-white hover:bg-blue-700"
      >
        Restart Quiz
      </button>
    </div>
  );
}
