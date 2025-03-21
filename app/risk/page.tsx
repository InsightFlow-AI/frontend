import RiskPrediction from "@/components/risk-prediction"
import { PageTransition } from "@/components/page-transition"

export default function RiskPage() {
  return (
    <PageTransition>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Risk Prediction</h1>
        </div>
        <RiskPrediction />
      </div>
    </PageTransition>
  )
}

