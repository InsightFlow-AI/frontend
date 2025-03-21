"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { AlertCircle, ArrowRight, CheckCircle2, Clock, DollarSign, Users } from "lucide-react"
import { useState } from "react"
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts"

const riskFactors = [
  { name: "Resource Allocation", value: 65, fullMark: 100 },
  { name: "Timeline Adherence", value: 80, fullMark: 100 },
  { name: "Budget Compliance", value: 75, fullMark: 100 },
  { name: "Stakeholder Alignment", value: 85, fullMark: 100 },
  { name: "Technical Complexity", value: 60, fullMark: 100 },
  { name: "Change Readiness", value: 70, fullMark: 100 },
]

const simulationData = [
  { month: "Jul", baseline: 18.3, optimistic: 24.7, pessimistic: 9.2 },
  { month: "Aug", baseline: 19.1, optimistic: 26.2, pessimistic: 8.7 },
  { month: "Sep", baseline: 20.4, optimistic: 27.8, pessimistic: 9.5 },
  { month: "Oct", baseline: 21.6, optimistic: 29.3, pessimistic: 10.2 },
  { month: "Nov", baseline: 22.8, optimistic: 30.5, pessimistic: 11.4 },
  { month: "Dec", baseline: 24.1, optimistic: 32.0, pessimistic: 12.5 },
]

export default function RiskPrediction() {
  const [resourceAllocation, setResourceAllocation] = useState(20)
  const [trainingCompletion, setTrainingCompletion] = useState(68)
  const [communicationFrequency, setCommunicationFrequency] = useState(50)

  return (
    <div className="grid gap-6 w-full max-w-full">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Risk Prediction & Simulation</h1>
        <Tabs defaultValue="overview" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="simulation">Simulation</TabsTrigger>
            <TabsTrigger value="mitigation">Mitigation</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid gap-6 md:grid-cols-3 w-full max-w-full">
        <Card>
          <CardHeader>
            <CardTitle>Risk Assessment</CardTitle>
            <CardDescription>ML-powered risk evaluation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex flex-col gap-2 items-center justify-center py-4">
                <div className="text-5xl font-bold text-amber-500">Medium</div>
                <div className="text-sm text-muted-foreground">Overall Risk Level</div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">Budget Risk</span>
                  <Badge variant="outline" className="text-green-500">
                    Low
                  </Badge>
                </div>
                <Progress value={25} className="h-2" />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">Timeline Risk</span>
                  <Badge variant="outline" className="text-amber-500">
                    Medium
                  </Badge>
                </div>
                <Progress value={50} className="h-2" />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">Resource Risk</span>
                  <Badge variant="outline" className="text-red-500">
                    High
                  </Badge>
                </div>
                <Progress value={75} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Risk Radar</CardTitle>
            <CardDescription>Multi-dimensional risk analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={riskFactors}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="name" />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} />
                  <Radar name="Risk Score" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 w-full max-w-full">
        <Card>
          <CardHeader>
            <CardTitle>ROI Simulation</CardTitle>
            <CardDescription>Projected financial outcomes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsLineChart
                  data={simulationData}
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
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Legend />
                  <Line type="monotone" dataKey="baseline" name="Expected ROI" stroke="#8884d8" strokeWidth={2} />
                  <Line type="monotone" dataKey="optimistic" name="Best Case" stroke="#82ca9d" strokeWidth={2} />
                  <Line type="monotone" dataKey="pessimistic" name="Worst Case" stroke="#ff7300" strokeWidth={2} />
                </RechartsLineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Risk Mitigation Simulator</CardTitle>
            <CardDescription>Adjust parameters to see impact on risk</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">IT Resource Allocation</label>
                  <span className="text-sm">{resourceAllocation}%</span>
                </div>
                <Slider
                  value={[resourceAllocation]}
                  min={0}
                  max={50}
                  step={1}
                  onValueChange={(value) => setResourceAllocation(value[0])}
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Training Completion Rate</label>
                  <span className="text-sm">{trainingCompletion}%</span>
                </div>
                <Slider
                  value={[trainingCompletion]}
                  min={0}
                  max={100}
                  step={1}
                  onValueChange={(value) => setTrainingCompletion(value[0])}
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Communication Frequency</label>
                  <span className="text-sm">{communicationFrequency}%</span>
                </div>
                <Slider
                  value={[communicationFrequency]}
                  min={0}
                  max={100}
                  step={1}
                  onValueChange={(value) => setCommunicationFrequency(value[0])}
                />
              </div>

              <div className="pt-2">
                <Button className="w-full">
                  Run Simulation <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Risk Mitigation Plan</CardTitle>
          <CardDescription>AI-generated recommendations based on current data</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
              <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
              <div>
                <h4 className="font-medium">Resource Allocation Imbalance</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Increase IT department staffing by 20% to meet implementation timeline requirements. Current
                  understaffing is the highest risk factor for project delay.
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Users className="h-3 w-3" /> HR Action
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> Urgent
                  </Badge>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
              <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5" />
              <div>
                <h4 className="font-medium">Training Completion Rate</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Accelerate training program completion. Only 68% of required training has been completed. Schedule
                  additional training sessions and provide incentives for completion.
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Users className="h-3 w-3" /> HR Action
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> Medium
                  </Badge>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
              <div>
                <h4 className="font-medium">Budget Management</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Current budget utilization is on track. Continue monitoring spending patterns and maintain current
                  approval workflows for expenditures.
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <Badge variant="outline" className="flex items-center gap-1">
                    <DollarSign className="h-3 w-3" /> Finance
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" /> On Track
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

