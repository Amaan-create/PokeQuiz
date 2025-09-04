import { useEffect, useState } from "react";

/**
 * Timer Component
 * ----------------
 * A countdown timer used for each quiz question.
 *
 * Props:
 * - duration: Number (default 30) → Time in seconds for the countdown
 * - onTimeUp: Function → Callback when timer reaches 0
 */
export default function Timer({ duration = 30, onTimeUp }) {
  // State to track the remaining time
  const [timeLeft, setTimeLeft] = useState(duration);

  // Main countdown effect
  useEffect(() => {
    // If time runs out, call onTimeUp and stop countdown
    if (timeLeft === 0) {
      onTimeUp();
      return;
    }

    // Decrement timer every second
    const interval = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);

    // Cleanup interval on unmount or when timeLeft changes
    return () => clearInterval(interval);
  }, [timeLeft, onTimeUp]);

  // Reset timer whenever duration changes (e.g., new question)
  useEffect(() => {
    setTimeLeft(duration);
  }, [duration]);

  return (
    <div className="text-right text-lg font-semibold text-red-600">
      {/* Display timer with an emoji for UX */}⏳ {timeLeft}s
    </div>
  );
}
