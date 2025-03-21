"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  AlertCircle,
  ArrowUpRight,
  BarChart3,
  DollarSign,
  LineChart,
  TrendingDown,
  TrendingUp,
  Users,
} from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedDashboardCard } from "./animated-dashboard-card"
import { AnimatedCounter } from "./animated-counter"
import ReadinessScoreChart from "./readiness-score-chart"
import RecentUpdates from "./recent-updates"

export default function DashboardOverview() {
  const [timeframe, setTimeframe] = useState("month")

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="grid gap-6 w-full max-w-full">
      <div className="flex items-center justify-between">
        <motion.h1
          className="text-3xl font-bold tracking-tight"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Transformation ROI Dashboard
        </motion.h1>
        <Tabs value={timeframe} onValueChange={setTimeframe} className="w-[300px]">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="week">Week</TabsTrigger>
            <TabsTrigger value="month">Month</TabsTrigger>
            <TabsTrigger value="quarter">Quarter</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <motion.div
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 w-full max-w-full"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <AnimatedDashboardCard title="Readiness Score" icon={<BarChart3 className="h-4 w-4" />} delay={0}>
          <div className="text-2xl font-bold">
            <AnimatedCounter value={76} formatValue={(val) => `${val.toFixed(0)}/100`} />
          </div>
          <Progress value={76} className="mt-2" />
          <p className="text-xs text-muted-foreground mt-2">
            <span className="text-green-500 inline-flex items-center">
              <TrendingUp className="mr-1 h-3 w-3" />
              +5.2%
            </span>{" "}
            from last {timeframe}
          </p>
        </AnimatedDashboardCard>

        <AnimatedDashboardCard title="Budget Utilization" icon={<DollarSign className="h-4 w-4" />} delay={1}>
          <div className="text-2xl font-bold">
            <AnimatedCounter value={68.3} formatValue={(val) => `${val.toFixed(1)}%`} />
          </div>
          <Progress value={68.3} className="mt-2" />
          <p className="text-xs text-muted-foreground mt-2">
            <span className="text-green-500 inline-flex items-center">
              <TrendingDown className="mr-1 h-3 w-3" />
              -2.1%
            </span>{" "}
            from last {timeframe}
          </p>
        </AnimatedDashboardCard>

        <AnimatedDashboardCard title="Employee Sentiment" icon={<Users className="h-4 w-4" />} delay={2}>
          <div className="text-2xl font-bold">
            <AnimatedCounter value={82} formatValue={(val) => `${val.toFixed(0)}%`} />
          </div>
          <Progress value={82} className="mt-2" />
          <p className="text-xs text-muted-foreground mt-2">
            <span className="text-green-500 inline-flex items-center">
              <TrendingUp className="mr-1 h-3 w-3" />
              +3.7%
            </span>{" "}
            from last {timeframe}
          </p>
        </AnimatedDashboardCard>

        <AnimatedDashboardCard title="Risk Index" icon={<LineChart className="h-4 w-4" />} delay={3}>
          <div className="text-2xl font-bold">Low</div>
          <Progress value={25} className="mt-2" />
          <p className="text-xs text-muted-foreground mt-2">
            <span className="text-green-500 inline-flex items-center">
              <TrendingDown className="mr-1 h-3 w-3" />
              -8.4%
            </span>{" "}
            from last {timeframe}
          </p>
        </AnimatedDashboardCard>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-7 w-full max-w-full">
        <motion.div
          className="md:col-span-4 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <AnimatedDashboardCard
            title="Readiness Score Trend"
            description="Historical readiness score with predictive analysis"
            delay={4}
          >
            <ReadinessScoreChart />
          </AnimatedDashboardCard>
        </motion.div>

        <motion.div
          className="md:col-span-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <AnimatedDashboardCard title="Recent Updates" description="Latest changes and notifications" delay={5}>
            <RecentUpdates />
          </AnimatedDashboardCard>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        whileHover={{ scale: 1.01 }}
      >
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>AI Recommendation</AlertTitle>
          <AlertDescription>
            Based on current sentiment analysis, consider increasing communication frequency about the ERP
            implementation timeline to reduce uncertainty.
          </AlertDescription>
        </Alert>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 w-full max-w-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <AnimatedDashboardCard title="Top Risks" description="Machine learning identified potential issues" delay={6}>
            <ul className="space-y-4">
              <motion.li
                className="flex items-start gap-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.8 }}
              >
                <ArrowUpRight className="mt-0.5 h-5 w-5 text-red-500" />
                <div>
                  <p className="font-medium">Resource allocation imbalance</p>
                  <p className="text-sm text-muted-foreground">IT department is understaffed for the current phase</p>
                </div>
              </motion.li>
              <motion.li
                className="flex items-start gap-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.9 }}
              >
                <ArrowUpRight className="mt-0.5 h-5 w-5 text-amber-500" />
                <div>
                  <p className="font-medium">Training completion rate</p>
                  <p className="text-sm text-muted-foreground">Only 68% of required training completed</p>
                </div>
              </motion.li>
              <motion.li
                className="flex items-start gap-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 1.0 }}
              >
                <ArrowUpRight className="mt-0.5 h-5 w-5 text-amber-500" />
                <div>
                  <p className="font-medium">Vendor delivery timeline</p>
                  <p className="text-sm text-muted-foreground">Potential 2-week delay in software delivery</p>
                </div>
              </motion.li>
            </ul>
          </AnimatedDashboardCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <AnimatedDashboardCard
            title="Financial Impact Simulation"
            description="Projected ROI based on current trajectory"
            delay={7}
          >
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Expected ROI</p>
                  <p className="text-sm font-medium text-green-500">+18.3%</p>
                </div>
                <Progress value={73} className="mt-2" />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Best Case</p>
                  <p className="text-sm font-medium text-green-500">+24.7%</p>
                </div>
                <Progress value={92} className="mt-2" />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Worst Case</p>
                  <p className="text-sm font-medium text-amber-500">+9.2%</p>
                </div>
                <Progress value={42} className="mt-2" />
              </div>
              <div className="pt-2 text-sm text-muted-foreground">
                Based on historical data and current market conditions
              </div>
            </div>
          </AnimatedDashboardCard>
        </motion.div>
      </div>
    </div>
  )
}

