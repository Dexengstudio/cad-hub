"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock, Users, Building2 } from "lucide-react"

type Props = {
  slug: string
  title: string
  submissionDeadline?: string
  estimatedTime?: number
  currentParticipants?: number
  maxParticipants?: number
  organizationName?: string
  status?: string
  onStart?: () => void
}

export default function StartChallengeCTA({
  slug,
  title,
  submissionDeadline,
  estimatedTime,
  currentParticipants,
  maxParticipants,
  organizationName,
  status,
  onStart,
}: Props) {
  return (
    <Card className="border-neutral-200">
      <CardContent className="px-6 py-8 text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          {status ? <Badge className="rounded-full capitalize">{status}</Badge> : null}
          {submissionDeadline ? (
            <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
              <CalendarDays className="h-4 w-4" />
              {new Date(submissionDeadline).toLocaleDateString()}
            </span>
          ) : null}
        </div>

        <h2 className="text-xl md:text-2xl font-semibold">Ready to start “{title}”?</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Begin the challenge, review the requirements, and submit your CAD mass before the deadline.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
          {typeof estimatedTime === "number" ? (
            <span className="inline-flex items-center gap-1">
              <Clock className="h-4 w-4" /> {estimatedTime} min est.
            </span>
          ) : null}
          <span className="inline-flex items-center gap-1">
            <Users className="h-4 w-4" /> {currentParticipants ?? 0}
            {typeof maxParticipants === "number" ? ` / ${maxParticipants}` : ""} participants
          </span>
          {organizationName ? (
            <span className="inline-flex items-center gap-1">
              <Building2 className="h-4 w-4" /> {organizationName}
            </span>
          ) : null}
        </div>

        <div className="pt-2">
          {onStart ? (
            <Button onClick={onStart} size="lg" className="bg-black text-white hover:bg-black/90">
              Start
            </Button>
          ) : (
            <Link href={`/challenges/${slug}/submit`}>
              <Button size="lg" className="bg-black text-white hover:bg-black/90">
                Start
              </Button>
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
