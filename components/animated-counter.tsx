"use client"

import { useEffect, useState } from "react"
import { motion, useSpring, useTransform } from "framer-motion"

interface AnimatedCounterProps {
  value: number
  duration?: number
  formatValue?: (value: number) => string
  className?: string
}

export function AnimatedCounter({
  value,
  duration = 1.5,
  formatValue = (val) => val.toFixed(0),
  className = "",
}: AnimatedCounterProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const springValue = useSpring(0, {
    duration,
    bounce: 0.1,
  })

  const displayValue = useTransform(springValue, (val) => formatValue(val))

  useEffect(() => {
    springValue.set(value)
  }, [springValue, value])

  if (!isClient) {
    return <span className={className}>{formatValue(0)}</span>
  }

  return <motion.span className={className}>{displayValue}</motion.span>
}

