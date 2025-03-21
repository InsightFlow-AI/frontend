"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { month: "Jan", actual: 45, predicted: null },
  { month: "Feb", actual: 52, predicted: null },
  { month: "Mar", actual: 58, predicted: null },
  { month: "Apr", actual: 63, predicted: null },
  { month: "May", actual: 69, predicted: null },
  { month: "Jun", actual: 76, predicted: null },
  { month: "Jul", actual: null, predicted: 81 },
  { month: "Aug", actual: null, predicted: 85 },
  { month: "Sep", actual: null, predicted: 88 },
]

export default function ReadinessScoreChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="actual"
            stroke="#8884d8"
            strokeWidth={2}
            activeDot={{ r: 8 }}
            name="Actual Score"
          />
          <Line
            type="monotone"
            dataKey="predicted"
            stroke="#82ca9d"
            strokeWidth={2}
            strokeDasharray="5 5"
            name="Predicted Score"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

