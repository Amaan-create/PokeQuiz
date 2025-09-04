import { motion } from "framer-motion";
import Pokeball from "../assets/Pokeball.svg";

/**Tried to implement a Pokemon themed Quiz in the given amount of time while tickmarking all the requirements
 * Loader
 * Simple splash screen shown while the app is loading.
 * Uses a spinning Pokéball animation (Framer Motion)
 * - Has a subtle fading "Loading" text
 * - Kept minimal so it mounts/unmounts quickly
 */
export default function Loader() {
  return (
    // role="status" + aria-busy helps screen readers know this is a loading state
    <div
      role="status"
      aria-busy="true"
      className="min-h-screen flex flex-col items-center justify-center bg-white"
    >
      {/* Spinning Pokéball image (bundled from src/assets) */}
      <motion.img
        src={Pokeball}
        alt="Spinning Pokéball"
        className="w-32 h-32 mb-6"
        // rotate the image continuously
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      />

      {/* Loading text: subtle fade-in / fade-out to show activity */}
      <motion.h2
        aria-live="polite"
        className="text-2xl font-bold text-red-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        Loading the Pokédex...
      </motion.h2>
    </div>
  );
}
