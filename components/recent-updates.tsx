import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function RecentUpdates() {
  const updates = [
    {
      id: 1,
      user: {
        name: "Sarah Chen",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "SC",
      },
      action: "completed sentiment analysis",
      target: "Marketing Department",
      time: "2 hours ago",
    },
    {
      id: 2,
      user: {
        name: "David Kim",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "DK",
      },
      action: "updated budget allocation",
      target: "Phase 2 Implementation",
      time: "5 hours ago",
    },
    {
      id: 3,
      user: {
        name: "AI System",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "AI",
      },
      action: "detected risk pattern",
      target: "Resource Allocation",
      time: "Yesterday",
    },
    {
      id: 4,
      user: {
        name: "Maria Rodriguez",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "MR",
      },
      action: "added integration",
      target: "HR System",
      time: "Yesterday",
    },
  ]

  return (
    <div className="space-y-4">
      {updates.map((update) => (
        <div key={update.id} className="flex items-start gap-4">
          <Avatar className="h-8 w-8">
            <AvatarImage src={update.user.avatar} alt={update.user.name} />
            <AvatarFallback>{update.user.initials}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">
              {update.user.name} <span className="text-muted-foreground">{update.action}</span> {update.target}
            </p>
            <p className="text-xs text-muted-foreground">{update.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

