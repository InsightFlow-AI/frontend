"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts"

const sentimentTrendData = [
  { month: "Jan", positive: 65, neutral: 25, negative: 10 },
  { month: "Feb", positive: 68, neutral: 22, negative: 10 },
  { month: "Mar", positive: 70, neutral: 20, negative: 10 },
  { month: "Apr", positive: 72, neutral: 18, negative: 10 },
  { month: "May", positive: 75, neutral: 15, negative: 10 },
  { month: "Jun", positive: 82, neutral: 10, negative: 8 },
]

const departmentSentimentData = [
  { name: "IT", positive: 85, neutral: 10, negative: 5 },
  { name: "Operations", positive: 75, neutral: 15, negative: 10 },
  { name: "HR", positive: 90, neutral: 8, negative: 2 },
  { name: "Finance", positive: 70, neutral: 20, negative: 10 },
  { name: "Marketing", positive: 80, neutral: 15, negative: 5 },
]

const keywordData = [
  { keyword: "Training", count: 245, sentiment: "positive" },
  { keyword: "Timeline", count: 187, sentiment: "neutral" },
  { keyword: "Communication", count: 156, sentiment: "positive" },
  { keyword: "Resources", count: 132, sentiment: "negative" },
  { keyword: "Leadership", count: 124, sentiment: "positive" },
  { keyword: "Workload", count: 118, sentiment: "negative" },
  { keyword: "Support", count: 105, sentiment: "positive" },
  { keyword: "Technology", count: 98, sentiment: "neutral" },
]

export default function SentimentAnalysis() {
  return (
    <div className="grid gap-6 w-full max-w-full">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Employee Sentiment Analysis</h1>
        <Tabs defaultValue="overall" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overall">Overall</TabsTrigger>
            <TabsTrigger value="departments">Departments</TabsTrigger>
            <TabsTrigger value="keywords">Keywords</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid gap-6 md:grid-cols-3 w-full max-w-full">
        <Card>
          <CardHeader>
            <CardTitle>Current Sentiment</CardTitle>
            <CardDescription>NLP analysis of employee feedback</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-green-500">Positive</span>
                  <span className="text-sm font-medium">82%</span>
                </div>
                <Progress value={82} className="h-2 bg-muted" />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-amber-500">Neutral</span>
                  <span className="text-sm font-medium">10%</span>
                </div>
                <Progress value={10} className="h-2 bg-muted" />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-red-500">Negative</span>
                  <span className="text-sm font-medium">8%</span>
                </div>
                <Progress value={8} className="h-2 bg-muted" />
              </div>

              <div className="pt-4">
                <div className="text-sm font-medium">Survey Participation</div>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-2xl font-bold">78%</span>
                  <Badge variant="outline">+12% from last month</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Sentiment Trend</CardTitle>
            <CardDescription>6-month sentiment analysis trend</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={sentimentTrendData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="positive" stroke="#10b981" strokeWidth={2} />
                  <Line type="monotone" dataKey="neutral" stroke="#f59e0b" strokeWidth={2} />
                  <Line type="monotone" dataKey="negative" stroke="#ef4444" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 w-full max-w-full">
        <Card>
          <CardHeader>
            <CardTitle>Department Sentiment</CardTitle>
            <CardDescription>Sentiment analysis by department</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={departmentSentimentData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                  layout="vertical"
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="positive" name="Positive" stackId="a" fill="#10b981" />
                  <Bar dataKey="neutral" name="Neutral" stackId="a" fill="#f59e0b" />
                  <Bar dataKey="negative" name="Negative" stackId="a" fill="#ef4444" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Key Themes</CardTitle>
            <CardDescription>Most mentioned topics in feedback</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {keywordData.map((item) => (
                <div key={item.keyword} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="outline"
                      className={
                        item.sentiment === "positive"
                          ? "text-green-500 border-green-200"
                          : item.sentiment === "negative"
                            ? "text-red-500 border-red-200"
                            : "text-amber-500 border-amber-200"
                      }
                    >
                      {item.sentiment}
                    </Badge>
                    <span className="font-medium">{item.keyword}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{item.count} mentions</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

