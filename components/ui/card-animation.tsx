"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

// Animated Card component
export const AnimatedCard = motion(Card)

// Animated Card Header
export function AnimatedCardHeader({ className, children, ...props }: React.ComponentProps<typeof CardHeader>) {
  return (
    <CardHeader className={cn(className)} {...props}>
      {children}
    </CardHeader>
  )
}

// Animated Card Content
export function AnimatedCardContent({ className, children, ...props }: React.ComponentProps<typeof CardContent>) {
  return (
    <CardContent className={cn(className)} {...props}>
      {children}
    </CardContent>
  )
}

// Animated Card Footer
export function AnimatedCardFooter({ className, children, ...props }: React.ComponentProps<typeof CardFooter>) {
  return (
    <CardFooter className={cn(className)} {...props}>
      {children}
    </CardFooter>
  )
}

// Animated Card Title
export function AnimatedCardTitle({ className, children, ...props }: React.ComponentProps<typeof CardTitle>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <CardTitle className={cn(className)} {...props}>
        {children}
      </CardTitle>
    </motion.div>
  )
}

// Animated Card Description
export function AnimatedCardDescription({
  className,
  children,
  ...props
}: React.ComponentProps<typeof CardDescription>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <CardDescription className={cn(className)} {...props}>
        {children}
      </CardDescription>
    </motion.div>
  )
}

