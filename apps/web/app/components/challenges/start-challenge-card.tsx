"use client";

import { useActionState, useEffect, useMemo, useRef, useState } from "react";

import {
  CalendarDays,
  Clock,
  Users,
  Building2,
  CheckCircle2,
  AlertCircle,
  Hourglass,
} from "lucide-react";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
  Alert as UiAlert,
  AlertDescription as UiAlertDescription,
  AlertTitle as UiAlertTitle,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@cad-challenges-hub/ui";
import { MassResultState } from "@/lib/types";

function formatClock(totalSeconds: number) {
  const m = Math.floor(totalSeconds / 60)
    .toString()
    .padStart(2, "0");
  const s = Math.floor(totalSeconds % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${s}`;
}

type Props = {
  slug: string;
  title: string;
  submissionDeadline?: string;
  estimatedTime?: number;
  currentParticipants?: number;
  maxParticipants?: number;
  organizationName?: string;
  status?: string;
  softwareOptions?: string[];
};

async function submitMass(formData: any) {}

export default function StartChallengeCard({
  slug,
  title,
  submissionDeadline,
  estimatedTime,
  currentParticipants,
  maxParticipants,
  organizationName,
  status,
  softwareOptions = ["Fusion 360", "SolidWorks", "Onshape", "NX", "CATIA"],
}: Props) {
  // Form + timer state
  const initialState: MassResultState = { ok: false };
  const [state, formAction, isPending] = useActionState(
    submitMass,
    initialState as void | MassResultState
  );
  const [mass, setMass] = useState("");
  const [software, setSoftware] = useState(softwareOptions[0] ?? "");
  const [started, setStarted] = useState(false);

  // Countdown duration: use estimatedTime if provided, else 30 minutes
  const totalSeconds = (estimatedTime ?? 30) * 60;
  const [remaining, setRemaining] = useState<number>(totalSeconds);
  const startedAtRef = useRef<number | null>(null);
  const intervalRef = useRef<number | null>(null);

  // Start countdown
  const handleStart = () => {
    if (started) return;
    setStarted(true);
    startedAtRef.current = Date.now();
    intervalRef.current = window.setInterval(() => {
      if (!startedAtRef.current) return;
      const elapsed = Math.floor((Date.now() - startedAtRef.current) / 1000);
      const nextRemaining = Math.max(0, totalSeconds - elapsed);
      setRemaining(nextRemaining);
      if (nextRemaining <= 0 && intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
    }, 500) as unknown as number;
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, []);

  const elapsedSeconds = useMemo(
    () => totalSeconds - remaining,
    [totalSeconds, remaining]
  );

  const metaRow = (
    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
      {typeof estimatedTime === "number" ? (
        <span className="inline-flex items-center gap-1">
          <Clock className="h-4 w-4" /> {estimatedTime} min est.
        </span>
      ) : null}
      <span className="inline-flex items-center gap-1">
        <Users className="h-4 w-4" /> {currentParticipants ?? 0}
        {typeof maxParticipants === "number"
          ? ` / ${maxParticipants}`
          : ""}{" "}
        participants
      </span>
      {organizationName ? (
        <span className="inline-flex items-center gap-1">
          <Building2 className="h-4 w-4" /> {organizationName}
        </span>
      ) : null}
    </div>
  );

  const isExpired = remaining <= 0;
  const formDisabled = !started || isPending || isExpired;

  return (
    <Card className="border-neutral-200 py-0">
      <CardContent className="p-5 space-y-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left: info */}
          <div className="space-y-4">
            <div className="flex items-center flex-wrap gap-2">
              {status ? (
                <Badge className="rounded-full capitalize">{status}</Badge>
              ) : null}
              {submissionDeadline ? (
                <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                  <CalendarDays className="h-4 w-4" />
                  {new Date(submissionDeadline).toLocaleDateString()}
                </span>
              ) : null}
            </div>

            <h2 className="text-xl md:text-2xl font-semibold">
              Start “{title}”
            </h2>
            <p className="text-muted-foreground">
              Submit the mass of your object in grams. Click Start to begin the
              countdown; your form will unlock and your time will be tracked.
            </p>

            {metaRow}
          </div>

          {/* Right: form column inside its own tinted card */}

          <Card className="border-neutral-200 bg-slate-50 dark:bg-slate-900/40">
            <CardHeader className="pb-4 hidden">
              <CardTitle className="text-base">Your Attempt</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 flex flex-col justify-center">
              {/* Timer card */}

              <Card className="bg-gray-100 dark:bg-amber-900/20 py-0 rounded-full">
                <CardContent className="py-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Hourglass className="h-4 w-4 text-amber-600" />
                    <span className="text-sm text-muted-foreground">
                      Time remaining
                    </span>
                  </div>
                  <div className="text-lg font-semibold tabular-nums">
                    {formatClock(remaining)}
                  </div>
                </CardContent>
              </Card>

              {/* Start button over the form */}
              {!started ? (
                <Button
                  onClick={handleStart}
                  className="w-full bg-black text-white hover:bg-black/90"
                >
                  Start
                </Button>
              ) : (
                <form
                  action={formAction}
                  className={
                    started
                      ? "space-y-4"
                      : "space-y-4 blur-[2px] opacity-70 pointer-events-none"
                  }
                >
                  <input type="hidden" name="slug" value={slug} />
                  <input type="hidden" name="elapsed" value={elapsedSeconds} />

                  <div className="space-y-2">
                    <label htmlFor="software" className="text-sm font-medium">
                      CAD Software
                    </label>
                    <Select
                      value={software}
                      onValueChange={setSoftware}
                      name="software"
                    >
                      <SelectTrigger id="software">
                        <SelectValue placeholder="Select software" />
                      </SelectTrigger>
                      <SelectContent>
                        {softwareOptions.map((opt) => (
                          <SelectItem key={opt} value={opt}>
                            {opt}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
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

                  <div className="pt-1">
                    <Button
                      type="submit"
                      disabled={formDisabled}
                      className="w-full bg-black text-white hover:bg-black/90"
                    >
                      {isPending
                        ? "Submitting..."
                        : isExpired
                        ? "Time expired"
                        : "Submit Mass"}
                    </Button>
                  </div>
                </form>
              )}

              {/* Form body stays mounted, blurred until started */}

              {/* Result state */}
              {state?.error ? (
                <UiAlert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <UiAlertTitle>Submission failed</UiAlertTitle>
                  <UiAlertDescription>{state.error}</UiAlertDescription>
                </UiAlert>
              ) : null}

              {state?.ok ? (
                <UiAlert>
                  <CheckCircle2 className="h-4 w-4" />
                  <UiAlertTitle>{state.message}</UiAlertTitle>
                  <UiAlertDescription>
                    <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-muted-foreground">
                          Your score
                        </span>
                        <div className="font-medium">{state.score}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Time</span>
                        <div className="font-medium">
                          {formatClock(state.elapsedSeconds || elapsedSeconds)}
                        </div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Rank</span>
                        <div className="font-medium">
                          {state.rank} of {state.total}
                        </div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">You beat</span>
                        <div className="font-medium">
                          {state.beatCount} participant(s)
                        </div>
                      </div>
                    </div>
                  </UiAlertDescription>
                </UiAlert>
              ) : null}
            </CardContent>
          </Card>
        </div>
        {/* Subtle helper banner like image 1 */}
      </CardContent>
    </Card>
  );
}
