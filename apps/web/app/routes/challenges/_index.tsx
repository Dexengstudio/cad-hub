import ChallengeCard from "@/components/challenges/challenge-card";
import SectionPage from "@/components/sections/section-page";
import { challenges } from "@/lib/data/challenges";

export default function Challenges() {
  return (
    <SectionPage withLine>
      <div className="flex flex-wrap items-center justify-between gap-4 ">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Challenges</h1>
          <p className="text-muted-foreground">
            Browse and pick a challenge to get started.
          </p>
        </div>
      </div>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {challenges.map((c) => (
          <ChallengeCard key={c.id} challenge={c} />
        ))}
      </section>
    </SectionPage>
  );
}
