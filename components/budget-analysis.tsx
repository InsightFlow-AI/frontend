"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"

const budgetData = [
  { name: "Technology", allocated: 250000, spent: 175000 },
  { name: "Training", allocated: 120000, spent: 85000 },
  { name: "Consulting", allocated: 180000, spent: 120000 },
  { name: "Staff", allocated: 320000, spent: 210000 },
  { name: "Marketing", allocated: 80000, spent: 45000 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"]

const departmentData = [
  { name: "IT", value: 35 },
  { name: "Operations", value: 25 },
  { name: "HR", value: 15 },
  { name: "Finance", value: 15 },
  { name: "Marketing", value: 10 },
]

export default function BudgetAnalysis() {
  return (
    <div className="grid gap-6 w-full max-w-full">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Budget Analysis</h1>
        <Tabs defaultValue="categories" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="categories">Categories</TabsTrigger>
            <TabsTrigger value="departments">Departments</TabsTrigger>
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid gap-6 md:grid-cols-3 w-full max-w-full">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Budget Allocation vs. Spending</CardTitle>
            <CardDescription>Breakdown by transformation initiative categories</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={budgetData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                  <Legend />
                  <Bar dataKey="allocated" name="Allocated Budget" fill="#8884d8" />
                  <Bar dataKey="spent" name="Spent" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Department Distribution</CardTitle>
            <CardDescription>Budget allocation by department</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={departmentData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {departmentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 w-full max-w-full">
        <Card>
          <CardHeader>
            <CardTitle>Budget Utilization</CardTitle>
            <CardDescription>Current spending against allocated budget</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {budgetData.map((item) => (
                <div key={item.name}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">{item.name}</span>
                    <span className="text-sm font-medium">
                      ${item.spent.toLocaleString()} / ${item.allocated.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress value={(item.spent / item.allocated) * 100} className="h-2" />
                    <span className="text-sm text-muted-foreground">
                      {Math.round((item.spent / item.allocated) * 100)}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Financial Metrics</CardTitle>
            <CardDescription>Key performance indicators</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="flex flex-col gap-1">
                <div className="text-sm font-medium">Total Budget</div>
                <div className="text-2xl font-bold">
                  ${budgetData.reduce((sum, item) => sum + item.allocated, 0).toLocaleString()}
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <div className="text-sm font-medium">Total Spent</div>
                <div className="text-2xl font-bold">
                  ${budgetData.reduce((sum, item) => sum + item.spent, 0).toLocaleString()}
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <div className="text-sm font-medium">Remaining Budget</div>
                <div className="text-2xl font-bold text-green-500">
                  $
                  {(
                    budgetData.reduce((sum, item) => sum + item.allocated, 0) -
                    budgetData.reduce((sum, item) => sum + item.spent, 0)
                  ).toLocaleString()}
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <div className="text-sm font-medium">Projected ROI</div>
                <div className="text-2xl font-bold text-green-500">18.3%</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

