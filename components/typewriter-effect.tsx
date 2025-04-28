"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function TypewriterEffect({
  words,
  className = "",
  cursorClassName = "",
}: {
  words: { text: string }[]
  className?: string
  cursorClassName?: string
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    const word = words[currentWordIndex].text

    const timeout = setTimeout(() => {
      // If deleting
      if (isDeleting) {
        setCurrentText(word.substring(0, currentText.length - 1))
        setTypingSpeed(50) // Faster when deleting

        // If deleted completely, move to next word
        if (currentText.length === 0) {
          setIsDeleting(false)
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
          setTypingSpeed(150)
        }
      }
      // If typing
      else {
        setCurrentText(word.substring(0, currentText.length + 1))
        setTypingSpeed(150)

        // If typed completely, pause then start deleting
        if (currentText.length === word.length) {
          setTypingSpeed(2000) // Pause at the end
          setTimeout(() => {
            setIsDeleting(true)
          }, 2000)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [currentText, currentWordIndex, isDeleting, typingSpeed, words])

  return (
    <div className={`inline-flex items-center ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span key={currentText} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          {currentText}
        </motion.span>
      </AnimatePresence>
      <span
        className={`ml-1 inline-block w-[2px] h-5 bg-emerald-600 dark:bg-emerald-400 animate-blink ${cursorClassName}`}
      ></span>
    </div>
  )
}
