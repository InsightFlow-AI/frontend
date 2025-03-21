"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Check, Database, FileText, Link, RefreshCw, Settings, Shield, Users } from "lucide-react"

export default function IntegrationSettings() {
  return (
    <div className="grid gap-6 w-full max-w-full">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Integration Settings</h1>
        <Tabs defaultValue="connections" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="connections">Connections</TabsTrigger>
            <TabsTrigger value="data">Data Sources</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid gap-6 md:grid-cols-2 w-full max-w-full">
        <Card>
          <CardHeader>
            <CardTitle>System Integrations</CardTitle>
            <CardDescription>Connect to enterprise systems</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between space-x-2">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium leading-none">HR System</p>
                    <p className="text-sm text-muted-foreground">Workday</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="text-green-500">
                    Connected
                  </Badge>
                  <Button variant="ghost" size="icon">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between space-x-2">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Database className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium leading-none">Financial System</p>
                    <p className="text-sm text-muted-foreground">SAP</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="text-green-500">
                    Connected
                  </Badge>
                  <Button variant="ghost" size="icon">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between space-x-2">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium leading-none">Document Management</p>
                    <p className="text-sm text-muted-foreground">SharePoint</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="text-amber-500">
                    Partial
                  </Badge>
                  <Button variant="ghost" size="icon">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between space-x-2">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Link className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium leading-none">CRM System</p>
                    <p className="text-sm text-muted-foreground">Salesforce</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="text-red-500">
                    Disconnected
                  </Badge>
                  <Button variant="ghost" size="icon">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <Button className="w-full mt-4">
                <Link className="mr-2 h-4 w-4" /> Add New Integration
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Data Synchronization</CardTitle>
            <CardDescription>Configure data refresh settings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="hr-sync">HR Data Sync Frequency</Label>
                <div className="grid grid-cols-3 gap-2">
                  <Button variant="outline" className="justify-start">
                    Hourly
                  </Button>
                  <Button variant="secondary" className="justify-start">
                    Daily
                  </Button>
                  <Button variant="outline" className="justify-start">
                    Weekly
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="finance-sync">Financial Data Sync</Label>
                <div className="grid grid-cols-3 gap-2">
                  <Button variant="outline" className="justify-start">
                    Hourly
                  </Button>
                  <Button variant="outline" className="justify-start">
                    Daily
                  </Button>
                  <Button variant="secondary" className="justify-start">
                    Weekly
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between space-y-0 pt-4">
                <div className="space-y-0.5">
                  <Label htmlFor="auto-sync">Automatic Synchronization</Label>
                  <p className="text-sm text-muted-foreground">Enable automatic data refresh</p>
                </div>
                <Switch id="auto-sync" defaultChecked />
              </div>

              <div className="flex items-center justify-between space-y-0 pt-2">
                <div className="space-y-0.5">
                  <Label htmlFor="notifications">Sync Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive alerts for sync failures</p>
                </div>
                <Switch id="notifications" defaultChecked />
              </div>

              <div className="pt-4">
                <Button className="w-full">
                  <RefreshCw className="mr-2 h-4 w-4" /> Sync All Data Now
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Security & Compliance</CardTitle>
          <CardDescription>Data protection and access controls</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2 w-full max-w-full">
            <div className="space-y-4">
              <div className="flex items-center justify-between space-y-0">
                <div className="space-y-0.5">
                  <Label>Data Encryption</Label>
                  <p className="text-sm text-muted-foreground">End-to-end encryption for all data</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between space-y-0">
                <div className="space-y-0.5">
                  <Label>Anonymize Employee Data</Label>
                  <p className="text-sm text-muted-foreground">Remove personally identifiable information</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between space-y-0">
                <div className="space-y-0.5">
                  <Label>Audit Logging</Label>
                  <p className="text-sm text-muted-foreground">Track all system access and changes</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between space-y-0">
                <div className="space-y-0.5">
                  <Label>GDPR Compliance</Label>
                  <p className="text-sm text-muted-foreground">Enforce data protection regulations</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between space-y-0">
                <div className="space-y-0.5">
                  <Label>Role-Based Access</Label>
                  <p className="text-sm text-muted-foreground">Restrict data access by user role</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between space-y-0">
                <div className="space-y-0.5">
                  <Label>Data Retention Policy</Label>
                  <p className="text-sm text-muted-foreground">Automatically purge old data</p>
                </div>
                <Switch />
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
            <Shield className="h-5 w-5 text-green-500 mt-0.5" />
            <div>
              <h4 className="font-medium">Security Status: Compliant</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Your system meets all required security standards. Last security audit: June 15, 2023.
              </p>
              <div className="flex items-center gap-2 mt-2">
                <Badge variant="outline" className="flex items-center gap-1">
                  <Check className="h-3 w-3" /> GDPR
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Check className="h-3 w-3" /> HIPAA
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Check className="h-3 w-3" /> SOC 2
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

