"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

interface AnimatedCounterProps {
  end: number
  duration?: number
  suffix?: string
}

export function AnimatedCounter({ end, duration = 2, suffix = "" }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      let start = 0
      const increment = end / (duration * 60)
      const timer = setInterval(() => {
        start += increment
        setCount(Math.floor(start))
        if (start >= end) {
          clearInterval(timer)
          setCount(end)
        }
      }, 1000 / 60)
      return () => clearInterval(timer)
    }
  }, [inView, end, duration])

  return (
    <div ref={ref} className="text-4xl font-bold">
      {count.toLocaleString()}
      {suffix}
    </div>
  )
}

