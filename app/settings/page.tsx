import IntegrationSettings from "@/components/integration-settings"
import { PageTransition } from "@/components/page-transition"

export default function SettingsPage() {
  return (
    <PageTransition>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Integration Settings</h1>
        </div>
        <IntegrationSettings />
      </div>
    </PageTransition>
  )
}

