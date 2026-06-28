import { useEffect, useState } from "react";

const words = [
  "AI Automation",
  "Machine Learning",
  "Data Science",
  "Intelligent Systems",
];

function TypewriterText() {
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const typingSpeed = isDeleting ? 45 : 90;
    const pauseTime = 1200;

    const timeout = setTimeout(
      () => {
        if (!isDeleting && letterIndex < currentWord.length) {
          setLetterIndex((prev) => prev + 1);
        } else if (!isDeleting && letterIndex === currentWord.length) {
          setIsDeleting(true);
        } else if (isDeleting && letterIndex > 0) {
          setLetterIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      },
      !isDeleting && letterIndex === currentWord.length ? pauseTime : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [wordIndex, letterIndex, isDeleting]);

  return (
    <span className="gradient-text">
      {words[wordIndex].slice(0, letterIndex)}
      <span className="animate-pulse text-cyan-400">|</span>
    </span>
  );
}

export default TypewriterText;