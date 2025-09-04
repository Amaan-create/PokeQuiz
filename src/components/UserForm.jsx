import { useState } from "react";

/**
 * UserForm Component
 * ------------------
 * This is the initial screen of the quiz where the user enters their name
 * and chooses a difficulty level. Once submitted, it calls `onStart` with
 * the entered name and selected level.
 *
 * Props:
 * - onStart: Function(name: string, level: string)
 */
export default function UserForm({ onStart }) {
  // State to store user name input
  const [name, setName] = useState("");
  // State to store selected difficulty level
  const [level, setLevel] = useState("easy");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      // Pass name and level back to parent component
      onStart(name.trim(), level);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        // Background image stored in public folder
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay to darken background for readability */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Form container with z-index to appear above overlay */}
      <div className="relative z-10 bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
        <h2 className="text-2xl font-bold mb-6">Welcome to the Quiz!</h2>

        {/* Form for user input */}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          {/* Name Input */}
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Difficulty Level Selector */}
          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Start Quiz
          </button>
        </form>
      </div>
    </div>
  );
}
