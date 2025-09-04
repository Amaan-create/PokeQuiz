# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

🐾 Pokémon Quiz App

A fun, interactive Pokémon-themed quiz application built with React. Test your Pokémon knowledge across three difficulty levels—Easy, Medium, and Hard—while enjoying smooth animations, a responsive layout, and a visually engaging interface.

Features

Dynamic Difficulty Levels: Easy, Medium, Hard with unique questions.

30-Second Timer: Each question has a countdown.

Animated Loader: Spinning Pokéball loader using Framer Motion.

Score Summary: Detailed feedback with correct/incorrect answers.

Restart Quiz: Retake the quiz without refreshing the page.

Responsive Design: Mobile-friendly UI with background images.

# Tech Stack

React.js – Functional components & hooks

Tailwind CSS – Styling

Framer Motion – Animations

Local JSON – Questions database

# Demo
https://poke-quiz-seven.vercel.app/


# Usage

Enter your name and select a difficulty level.

Answer Pokémon questions before the timer ends.

Click Next or wait for the timer to auto-advance.

Review your score and detailed feedback at the end.

Click Restart Quiz to try again.



# Components Overview

Loader.jsx – Animated Pokéball loader with fade-in text.

UserForm.jsx – Collects username & difficulty level.

QuestionCard.jsx – Shows question, Pokémon image, options, and timer.

ScoreCard.jsx – Displays final score and detailed feedback.

Timer.jsx – Countdown logic per question.



# Future Enhancements

Add hints or lifelines for questions.

Implement leaderboards using local storage or backend.

Add animations & sounds for correct/incorrect answers.

Shuffle questions for better replayability.
https://poke-quiz-seven.vercel.app/
