"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface AnimatedDashboardCardProps {
  title: string
  description?: string
  icon?: ReactNode
  children: ReactNode
  delay?: number
}

export function AnimatedDashboardCard({ title, description, icon, children, delay = 0 }: AnimatedDashboardCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: delay * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <Card className="h-full overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div>
            <CardTitle className="text-sm font-medium">{title}</CardTitle>
            {description && <CardDescription>{description}</CardDescription>}
          </div>
          {icon && (
            <motion.div
              className="rounded-full bg-primary/10 p-1 text-primary"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              {icon}
            </motion.div>
          )}
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </motion.div>
  )
}

