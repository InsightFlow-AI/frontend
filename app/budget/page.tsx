import BudgetAnalysis from "@/components/budget-analysis"
import { PageTransition } from "@/components/page-transition"

export default function BudgetPage() {
  return (
    <PageTransition>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Budget Analysis</h1>
        </div>
        <BudgetAnalysis />
      </div>
    </PageTransition>
  )
}

