import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import UserForm from "./components/UserForm";
import QuestionCard from "./components/QuestionCard";
import ScoreCard from "./components/ScoreCard";
import questionsData from "./data/questions.json";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState("");
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState({});
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = questions[currentIndex];

  // Loader effect
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleStart = (name, level) => {
    setUserName(name);
    setQuestions(questionsData[level] || []);
    setCurrentIndex(0);
  };

  const handleNext = () => {
    if (currentQuestion) {
      setAnswers((prev) => ({
        ...prev,
        [currentQuestion.id]: selectedOption || "No Answer",
      }));
    }
    setSelectedOption(null);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setUserName("");
    setQuestions([]);
    setCurrentIndex(0);
    setSelectedOption(null);
    setAnswers({});
    setIsFinished(false);
  };

  const handleTimeUp = () => handleNext();

  if (loading) return <Loader />;
  if (!userName) return <UserForm onStart={handleStart} />;

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-2xl">
        {!isFinished ? (
          currentQuestion ? (
            <QuestionCard
              key={currentQuestion.id}
              question={currentQuestion.question}
              options={currentQuestion.options}
              image={currentQuestion.image}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
              onNext={handleNext}
              isLast={currentIndex === questions.length - 1}
              onTimeUp={handleTimeUp}
              currentIndex={currentIndex}
              total={questions.length}
            />
          ) : (
            <div className="text-center text-lg font-semibold">
              Loading questions...
            </div>
          )
        ) : (
          <ScoreCard
            questions={questions}
            answers={answers}
            onRestart={handleRestart}
            userName={userName}
          />
        )}
      </div>
    </div>
  );
}
