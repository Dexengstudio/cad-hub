import StartChallengeCard from "@/components/challenges/start-challenge-card";
import type { Route } from "./+types/challenge";
import { getChallengeBySlug } from "@/lib/data/challenges";
import {
  Alert,
  AlertTitle,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@cad-challenges-hub/ui";
import RequirementsCard from "@/components/challenges/requirements-card";
import SectionPage from "@/components/sections/section-page";
import { ArrowLeft, Info } from "lucide-react";
import { Link } from "react-router";

export async function loader({ params }: Route.LoaderArgs) {
  const challenge = getChallengeBySlug(params.challengeId);
  return challenge;
}

export default function ChallengeRoute({ loaderData }: Route.ComponentProps) {
  const challenge = loaderData;

  if (!challenge) return null;

  return (
    <SectionPage withLine className="space-y-6">
      {/* Header */}
      <Link to="/challenges" className=" flex gap-2">
        <ArrowLeft />
        <span className="invisible">back</span>
      </Link>

      {/* <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="rounded-full capitalize">
            {challenge.category}
          </Badge>
          <Badge className="rounded-full capitalize">
            {challenge.difficulty}
          </Badge>
          {challenge.estimatedTime ? (
            <Badge variant="outline" className="rounded-full">
              {challenge.estimatedTime} min
            </Badge>
          ) : null}
        </div>
        <p className="text-muted-foreground">{challenge.shortDescription}</p>
      </div> */}
      <h1 className="text-2xl md:text-3xl font-semibold">{challenge.title}</h1>

      <Alert variant="destructive">
        <Info />
        <AlertTitle>
          Review requirements and scoring below before starting.
        </AlertTitle>
      </Alert>

      {/* Full-width hero image */}
      <div className="relative w-full aspect-[16/8]   overflow-hidden bg-muted ring-1 ring-black/5 ">
        <img
          src={
            challenge.drawings?.[0] ||
            challenge.thumbnailImage ||
            "/placeholder.svg?height=600&width=1200&query=cad%20challenge%20hero%20image" ||
            "/placeholder.svg" ||
            "/placeholder.svg"
          }
          alt={`${challenge.title} image`}
          className="object-cover w-full"
          sizes="100vw"
          // priority={false}
        />
      </div>

      <div className="my-8">
        <StartChallengeCard
          slug={challenge.slug}
          title={challenge.title}
          submissionDeadline={challenge.submissionDeadline}
          estimatedTime={challenge.estimatedTime}
          currentParticipants={challenge.currentParticipants}
          maxParticipants={challenge.maxParticipants}
          organizationName={
            challenge.organizationId ? "ACME Engineering" : "Independent"
          }
          status={challenge.status}
          softwareOptions={challenge.cadSoftwareRequired}
        />
      </div>

      {/* Description + Requirements */}
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Description */}
        <div className="lg:col-span-2 space-y-6">
          <section className="prose prose-sm md:prose-base dark:prose-invert max-w-none">
            <h2>Description</h2>
            <p>{challenge.description}</p>

            <h3>Scoring Criteria</h3>
            <ul>
              {challenge.scoringCriteria?.criteria.map((c) => (
                <li key={c.name}>
                  <strong>{c.name}</strong> — {c.description} (Max:{" "}
                  {c.maxPoints})
                </li>
              ))}
            </ul>
          </section>

          {/* Details panel */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Details</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4 text-sm">
              <div className="space-y-1">
                <p className="text-muted-foreground">Deadline</p>
                <p>
                  {challenge.submissionDeadline
                    ? new Date(challenge.submissionDeadline).toLocaleString()
                    : "—"}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-muted-foreground">Participants</p>
                <p>
                  {challenge.currentParticipants ?? 0} /{" "}
                  {challenge.maxParticipants ?? "∞"}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-muted-foreground">Max files</p>
                <p>{challenge.maxFiles ?? "—"}</p>
              </div>
              <div className="space-y-1">
                <p className="text-muted-foreground">Max file size</p>
                <p>
                  {challenge.maxFileSize ? `${challenge.maxFileSize} MB` : "—"}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Requirements styled like the reference */}
        <div className="lg:col-span-1">
          <RequirementsCard
            constraints={challenge.requirements?.constraints}
            materials={challenge.requirements?.materials}
            tools={challenge.requirements?.tools}
            fileFormats={challenge.fileFormats}
            maxFiles={challenge.maxFiles}
            maxFileSize={challenge.maxFileSize}
          />
        </div>
      </div>

      {/* Leaderboard under everything */}
      {/* <Card>
        <CardHeader>
          <CardTitle className="text-base">Leaderboard</CardTitle>
        </CardHeader>
        <CardContent>
          {entries.length > 0 ? (
            <LeaderboardTable entries={entries} />
          ) : (
            <p className="text-sm text-muted-foreground">No submissions yet.</p>
          )}
        </CardContent>
      </Card> */}
    </SectionPage>
  );
}
