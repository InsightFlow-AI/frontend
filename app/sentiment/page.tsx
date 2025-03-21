import SentimentAnalysis from "@/components/sentiment-analysis"
import { PageTransition } from "@/components/page-transition"

export default function SentimentPage() {
  return (
    <PageTransition>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Sentiment Analysis</h1>
        </div>
        <SentimentAnalysis />
      </div>
    </PageTransition>
  )
}

