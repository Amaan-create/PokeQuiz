import Timer from "./Timer";

/**
 * QuestionCard Component
 * ----------------------
 * Displays a single quiz question along with:
 * - Pokemon image
 * - Multiple choice options
 * - Progress indicator
 * - Timer countdown
 * - Background image with dark overlay
 *
 * Props:
 * - question: String, the question text
 * - options: Array of Strings, the multiple choice answers
 * - image: String, URL of the Pokemon image
 * - selectedOption: String, the currently selected option
 * - setSelectedOption: Function, updates the selected option
 * - onNext: Function, called when user clicks Next/Finish
 * - isLast: Boolean, true if this is the last question
 * - onTimeUp: Function, called when timer reaches zero
 * - currentIndex: Number, index of current question
 * - total: Number, total number of questions
 */
export default function QuestionCard({
  question,
  options,
  image,
  selectedOption,
  setSelectedOption,
  onNext,
  isLast,
  onTimeUp,
  currentIndex,
  total,
}) {
  return (
    // Container with background image and fade-in animation
    <div
      className="relative rounded-lg shadow-lg p-8 animate-fadeIn min-h-[550px] overflow-hidden"
      style={{
        backgroundImage: "url('/bg1.png')", // Background stored in public folder
        backgroundSize: "cover", // Cover the entire container
        backgroundPosition: "center", // Center the image
      }}
    >
      {/* Dark overlay to improve text readability */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Main content wrapper positioned above overlay */}
      <div className="relative z-10">
        {/* Progress and timer */}
        <div className="flex justify-between items-center mb-4 text-white">
          <span className="font-medium">
            Question {currentIndex + 1} of {total}
          </span>
          <Timer duration={30} onTimeUp={onTimeUp} key={currentIndex} />
        </div>

        {/* Pokemon image */}
        {image && (
          <div className="w-full h-48 mb-4 overflow-hidden rounded flex items-center justify-center bg-gray-100">
            <img
              src={image} // Pokemon image URL
              alt="Pokemon for the question" // Accessibility text
              className="max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
        )}

        {/* Question text */}
        <h2 className="text-xl font-bold mb-4 text-white">{question}</h2>

        {/* Options buttons */}
        <div className="space-y-2">
          {options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedOption(option)}
              className={`w-full px-4 py-2 border rounded-lg text-left transition
                ${
                  selectedOption === option
                    ? "bg-blue-500 text-white" // Highlight selected option
                    : "bg-gray-100 hover:bg-gray-200" // Normal hover state
                }`}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Next/Finish button */}
        <button
          onClick={onNext}
          disabled={!selectedOption} // Disable until user selects an option
          className="mt-6 w-full bg-green-600 text-white py-2 rounded-lg disabled:opacity-50 hover:bg-green-700"
        >
          {isLast ? "Finish Quiz" : "Next"} 
        </button>
      </div>
    </div>
  );
}

