"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { PageTransition } from "@/components/page-transition"

export default function PushMetricsGuide() {
  return (
    <PageTransition>
      <div className="grid gap-6">
        <motion.div
          className="flex items-center justify-between"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-3xl font-bold tracking-tight">Push Metrics Guide</h1>
        </motion.div>

        <Tabs defaultValue="api" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-3 mx-auto mb-6">
            <TabsTrigger value="api">API</TabsTrigger>
            <TabsTrigger value="import">Import</TabsTrigger>
            <TabsTrigger value="manual">Manual</TabsTrigger>
          </TabsList>

          <TabsContent value="api">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <Card>
                <CardHeader>
                  <CardTitle>API Integration</CardTitle>
                  <CardDescription>Push metrics programmatically using our REST API</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium">Endpoint</h3>
                      <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
                        <code>POST https://api.changedashboard.com/v1/metrics</code>
                      </pre>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium">Authentication</h3>
                      <p className="text-sm text-muted-foreground mt-1">Include your API key in the request headers:</p>
                      <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
                        <code>{`Authorization: Bearer YOUR_API_KEY`}</code>
                      </pre>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium">Request Body</h3>
                      <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
                        <code>{`{
  "metricName": "Training Completion",
  "metricType": "percentage",
  "value": 78.5,
  "timestamp": "2023-06-15T14:30:00Z",
  "department": "IT",
  "tags": ["training", "onboarding"],
  "description": "Percentage of employees who completed required training"
}`}</code>
                      </pre>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium">Example (JavaScript)</h3>
                      <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
                        <code>{`fetch('https://api.changedashboard.com/v1/metrics', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    metricName: "Training Completion",
    metricType: "percentage",
    value: 78.5,
    timestamp: new Date().toISOString(),
    department: "IT",
    tags: ["training", "onboarding"],
    description: "Percentage of employees who completed required training"
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));`}</code>
                      </pre>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="import">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <Card>
                <CardHeader>
                  <CardTitle>Data Import</CardTitle>
                  <CardDescription>Import metrics from CSV, Excel, or JSON files</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium">Supported Formats</h3>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                        <li>CSV (.csv)</li>
                        <li>Excel (.xlsx, .xls)</li>
                        <li>JSON (.json)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium">CSV Format</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Your CSV file should have the following columns:
                      </p>
                      <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
                        <code>metricName,metricType,value,timestamp,department,tags,description</code>
                      </pre>
                      <p className="text-sm text-muted-foreground mt-2">Example:</p>
                      <pre className="mt-2 rounded-md bg-muted p-4 overflow-x-auto">
                        <code>{`Training Completion,percentage,78.5,2023-06-15T14:30:00Z,IT,"training,onboarding",Percentage of employees who completed required training
Budget Utilization,percentage,65.2,2023-06-15T14:30:00Z,Finance,"budget,spending",Current budget utilization rate`}</code>
                      </pre>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium">Import Steps</h3>
                      <ol className="list-decimal pl-5 mt-2 space-y-1 text-sm">
                        <li>Navigate to the Data Import page from the sidebar</li>
                        <li>Click "Upload File" and select your data file</li>
                        <li>Map columns if the system cannot automatically detect them</li>
                        <li>Preview the data to ensure it's correct</li>
                        <li>Click "Import" to add the metrics to your dashboard</li>
                      </ol>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="manual">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <Card>
                <CardHeader>
                  <CardTitle>Manual Entry</CardTitle>
                  <CardDescription>Add metrics manually through the user interface</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium">Steps to Add a Metric</h3>
                      <ol className="list-decimal pl-5 mt-2 space-y-2 text-sm">
                        <li>Click "Add New Metric" in the sidebar under Push Metrics</li>
                        <li>
                          Fill in the metric details:
                          <ul className="list-disc pl-5 mt-1 space-y-1">
                            <li>
                              <strong>Name:</strong> A descriptive name for your metric
                            </li>
                            <li>
                              <strong>Type:</strong> Percentage, Count, Currency, etc.
                            </li>
                            <li>
                              <strong>Value:</strong> The current value of the metric
                            </li>
                            <li>
                              <strong>Description:</strong> Additional context about the metric
                            </li>
                          </ul>
                        </li>
                        <li>Click "Add Metric" to save</li>
                        <li>The metric will appear on your dashboard immediately</li>
                      </ol>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium">Updating Metrics</h3>
                      <p className="text-sm text-muted-foreground mt-1">To update an existing metric:</p>
                      <ol className="list-decimal pl-5 mt-2 space-y-1 text-sm">
                        <li>Find the metric on your dashboard</li>
                        <li>Click the "Edit" icon (pencil) next to the metric</li>
                        <li>Update the values as needed</li>
                        <li>Click "Save Changes"</li>
                      </ol>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium">Best Practices</h3>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                        <li>Use consistent naming conventions for related metrics</li>
                        <li>Include the unit of measurement in the metric name when appropriate</li>
                        <li>Update metrics regularly to ensure dashboard accuracy</li>
                        <li>Add detailed descriptions to provide context for other users</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </PageTransition>
  )
}

