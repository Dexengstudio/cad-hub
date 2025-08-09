"use client"

import { useActionState, useEffect, useMemo, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CalendarDays, Clock, Users, Building2, CheckCircle2, AlertCircle } from "lucide-react"
import type { MassResultState } from "@/app/actions/submit-mass"
import { submitMass } from "@/app/actions/submit-mass"

function formatTime(totalSeconds: number) {
  const m = Math.floor(totalSeconds / 60)
    .toString()
    .padStart(2, "0")
  const s = Math.floor(totalSeconds % 60)
    .toString()
    .padStart(2, "0")
  return `${m}:${s}`
}

type Props = {
  slug: string
  title: string
  submissionDeadline?: string
  estimatedTime?: number
  currentParticipants?: number
  maxParticipants?: number
  organizationName?: string
  status?: string
}

export default function StartChallengeForm({
  slug,
  title,
  submissionDeadline,
  estimatedTime,
  currentParticipants,
  maxParticipants,
  organizationName,
  status,
}: Props) {
  const initialState: MassResultState = { ok: false }
  const [state, formAction, isPending] = useActionState(submitMass, initialState)
  const [mass, setMass] = useState<string>("")
  const [elapsed, setElapsed] = useState<number>(0)
  const startedAtRef = useRef<number | null>(null)
  const intervalRef = useRef<number | null>(null)

  // Start timer on mount
  useEffect(() => {
    startedAtRef.current = Date.now()
    intervalRef.current = window.setInterval(() => {
      if (startedAtRef.current) {
        setElapsed(Math.floor((Date.now() - startedAtRef.current) / 1000))
      }
    }, 500) as unknown as number
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current)
    }
  }, [])

  const reset = () => {
    setMass("")
    setElapsed(0)
    startedAtRef.current = Date.now()
  }

  const metaRow = useMemo(
    () => (
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
    ),
    [estimatedTime, currentParticipants, maxParticipants, organizationName],
  )

  return (
    <Card className="border-neutral-200">
      <CardContent className="px-6 py-8 text-center space-y-6">
        <div className="flex items-center justify-center gap-2">
          {status ? <Badge className="rounded-full capitalize">{status}</Badge> : null}
          {submissionDeadline ? (
            <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
              <CalendarDays className="h-4 w-4" />
              {new Date(submissionDeadline).toLocaleDateString()}
            </span>
          ) : null}
        </div>

        <h2 className="text-xl md:text-2xl font-semibold">Start “{title}”</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Enter the measured mass of your object in grams and submit to see your current standing.
        </p>

        {metaRow}

        <form action={formAction} className="mx-auto grid max-w-xl grid-cols-1 gap-4">
          <input type="hidden" name="slug" value={slug} />
          <input type="hidden" name="elapsed" value={elapsed} />

          <div className="text-sm text-muted-foreground">Elapsed time: {formatTime(elapsed)}</div>

          <div className="space-y-2 text-left">
            <label htmlFor="mass" className="text-sm font-medium">
              Mass (g)
            </label>
            <Input
              id="mass"
              name="mass"
              inputMode="decimal"
              type="number"
              step="0.01"
              placeholder="e.g. 120.50"
              value={mass}
              onChange={(e) => setMass(e.target.value)}
              required
            />
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              disabled={isPending}
              className="bg-black text-white hover:bg-black/90 w-full md:w-auto"
            >
              {isPending ? "Submitting..." : "Submit Mass"}
            </Button>
          </div>
        </form>

        {/* Result state */}
        {state?.error ? (
          <Alert variant="destructive" className="text-left">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Submission failed</AlertTitle>
            <AlertDescription>{state.error}</AlertDescription>
          </Alert>
        ) : null}

        {state?.ok ? (
          <Alert className="text-left">
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>{state.message}</AlertTitle>
            <AlertDescription>
              <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="text-muted-foreground">Your score</span>
                  <div className="font-medium">{state.score}</div>
                </div>
                <div>
                  <span className="text-muted-foreground">Time</span>
                  <div className="font-medium">{formatTime(state.elapsedSeconds || 0)}</div>
                </div>
                <div>
                  <span className="text-muted-foreground">Rank</span>
                  <div className="font-medium">
                    {state.rank} of {state.total}
                  </div>
                </div>
                <div>
                  <span className="text-muted-foreground">You beat</span>
                  <div className="font-medium">{state.beatCount} participant(s)</div>
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <Button variant="outline" onClick={reset}>
                  Try Again
                </Button>
              </div>
            </AlertDescription>
          </Alert>
        ) : null}
      </CardContent>
    </Card>
  )
}
