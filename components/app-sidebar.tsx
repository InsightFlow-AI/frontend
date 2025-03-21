"use client"

import { useState } from "react"
import Link from "next/link"
import {
  BarChart3,
  ChevronDown,
  CreditCard,
  FileText,
  Home,
  LineChart,
  LogOut,
  PlusCircle,
  Settings,
  Upload,
  User,
  Users,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"

export function AppSidebar() {
  const { toggleSidebar } = useSidebar()
  const [openDialog, setOpenDialog] = useState(false)

  return (
    <Sidebar>
      <SidebarHeader className="pb-2">
        <motion.div
          className="flex items-center gap-3 px-4 py-3"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            whileHover={{ rotate: 5, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <BarChart3 className="h-6 w-6 text-primary" />
          </motion.div>
          <span className="font-semibold text-lg">Change Dashboard</span>
        </motion.div>
      </SidebarHeader>

      <SidebarContent className="px-2">
        <SidebarGroup>
          <SidebarGroupLabel className="px-4 py-2 text-xs font-medium text-muted-foreground">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1 px-1">
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="flex items-center gap-3 px-3 py-2">
                  <Link href="/">
                    <Home className="h-5 w-5 text-muted-foreground" />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild className="flex items-center gap-3 px-3 py-2">
                  <Link href="/budget">
                    <CreditCard className="h-5 w-5 text-muted-foreground" />
                    <span>Budget Analysis</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild className="flex items-center gap-3 px-3 py-2">
                  <Link href="/sentiment">
                    <Users className="h-5 w-5 text-muted-foreground" />
                    <span>Sentiment Analysis</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild className="flex items-center gap-3 px-3 py-2">
                  <Link href="/risk">
                    <LineChart className="h-5 w-5 text-muted-foreground" />
                    <span>Risk Prediction</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild className="flex items-center gap-3 px-3 py-2">
                  <Link href="/settings">
                    <Settings className="h-5 w-5 text-muted-foreground" />
                    <span>Integration Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator className="my-2" />

        <SidebarGroup>
          <Collapsible defaultOpen className="group/collapsible">
            <SidebarGroupLabel asChild className="px-4 py-2 text-xs font-medium text-muted-foreground">
              <CollapsibleTrigger className="flex w-full items-center justify-between">
                <span>Push Metrics</span>
                <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu className="space-y-1 px-1">
                  <SidebarMenuItem>
                    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                      <DialogTrigger asChild>
                        <SidebarMenuButton className="flex items-center gap-3 px-3 py-2">
                          <PlusCircle className="h-5 w-5 text-muted-foreground" />
                          <span>Add New Metric</span>
                        </SidebarMenuButton>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Add New Metric</DialogTitle>
                          <DialogDescription>Create a new metric to track on your dashboard.</DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="metric-name" className="text-right">
                              Name
                            </Label>
                            <Input id="metric-name" placeholder="Metric name" className="col-span-3" />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="metric-type" className="text-right">
                              Type
                            </Label>
                            <Input id="metric-type" placeholder="Percentage, Count, Currency" className="col-span-3" />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="metric-value" className="text-right">
                              Value
                            </Label>
                            <Input id="metric-value" type="number" className="col-span-3" />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="metric-description" className="text-right">
                              Description
                            </Label>
                            <Textarea
                              id="metric-description"
                              placeholder="Describe this metric"
                              className="col-span-3"
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button type="submit">Add Metric</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton asChild className="flex items-center gap-3 px-3 py-2">
                      <Link href="/api-docs">
                        <FileText className="h-5 w-5 text-muted-foreground" />
                        <span>API Documentation</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton asChild className="flex items-center gap-3 px-3 py-2">
                      <Link href="/data-import">
                        <Upload className="h-5 w-5 text-muted-foreground" />
                        <span>Import Data</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </Collapsible>
        </SidebarGroup>

        <SidebarSeparator className="my-2" />
      </SidebarContent>

      <SidebarFooter className="mt-auto p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <Collapsible className="group/collapsible w-full">
              <CollapsibleTrigger asChild>
                <SidebarMenuButton className="flex items-center gap-3 px-3 py-2 bg-muted/50 hover:bg-muted">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col items-start text-xs">
                      <span className="font-medium">John Doe</span>
                      <span className="text-muted-foreground">Project Manager</span>
                    </div>
                  </div>
                  <ChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub className="mt-1 ml-2 pl-2 border-l border-border">
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild className="flex items-center gap-3 px-3 py-2">
                      <Link href="/profile">
                        <User className="h-4 w-4" />
                        <span>Profile Settings</span>
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild className="flex items-center gap-3 px-3 py-2">
                      <Link href="/account">
                        <Settings className="h-4 w-4" />
                        <span>Account Settings</span>
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild className="flex items-center gap-3 px-3 py-2">
                      <Link href="/logout">
                        <LogOut className="h-4 w-4" />
                        <span>Sign Out</span>
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </CollapsibleContent>
            </Collapsible>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

