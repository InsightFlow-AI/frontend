import DashboardOverview from "@/components/dashboard-overview"
import { PageTransition } from "@/components/page-transition"

export default function Home() {
  return (
    <PageTransition>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
        </div>
        <DashboardOverview />
      </div>
    </PageTransition>
  )
}

