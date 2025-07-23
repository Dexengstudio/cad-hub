import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
} from "@cad-challenges-hub/ui";
import { cn } from "@cad-challenges-hub/ui";

export default function HeroHomepage() {
  return (
    <section className="relative min-h-[calc(630px-64px)] overflow-hidden pb-10">
      <HeroSectionLine />

      <HeroSectionGradient />

      <div className="relative z-10 flex flex-col divide-y  pt-[35px]">
        <div className="flex flex-col items-center justify-end">
          <div className="flex items-center gap-2 !border !border-b-0 border-border px-4 py-2 ">
            <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 ">
              {[
                { imageUrl: "https://github.com/shadcn.png", fallback: "CN" },
                { imageUrl: "https://github.com/leerob.png", fallback: "LR" },
                { imageUrl: "https://github.com/shadcn.png", fallback: "EH" },
                { imageUrl: "https://github.com/shadcn.png", fallback: "FK" },
              ].map((user, index) => (
                <Avatar key={index} className="size-8">
                  <AvatarImage src={user.imageUrl} alt={user.fallback} />
                  <AvatarFallback>{user.fallback}</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <p className="text-sm tracking-tight text-[--text-tertiary] dark:text-[--dark-text-tertiary]">
              Over 10 challengers
            </p>
          </div>
        </div>

        <div>
          <div className="mx-auto flex min-h-[358px] max-w-[80vw] shrink-0 flex-col items-center justify-center gap-2 px-2 py-4 sm:px-16 lg:px-24">
            <h1 className="!max-w-screen-lg text-pretty text-center text-[clamp(32px,7vw,64px)] font-medium leading-none tracking-[-1.44px] text-[--text-primary] dark:text-[--dark-text-primary] md:tracking-[-2.16px]">
              Where Parametric Modeling <br /> Meets Competition
            </h1>
            <h2 className="text-md max-w-2xl text-pretty text-center text-[--text-tertiary] dark:text-[--dark-text-tertiary] md:text-lg">
              Join thousands of design engineers in our community-driven
              platform. Solve industry challenges, compete with peers, and
              accelerate your engineering skills.
            </h2>
          </div>
        </div>

        <div className="flex items-start justify-center px-8 sm:px-24">
          <div className="flex w-full max-w-[80vw] flex-col items-center justify-start md:!max-w-[392px]">
            {["Browse Challenges", "Get Started"].map((label, index) => (
              <Button
                type="button"
                size={"lg"}
                key={index}
                variant={index === 0 ? "outline" : "default"}
                className={cn("w-full items-center justify-center !text-base")}
                name="cta_click"
              >
                {label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const HeroSectionLine = () => (
  <div className="absolute left-0 top-0 z-0 grid h-full w-full grid-cols-[clamp(28px,10vw,120px)_auto_clamp(28px,10vw,120px)] border-b border-[--border] dark:border-[--dark-border]">
    {/* Decorations */}
    <div className="flex items-center justify-center h-full col-span-1" />
    <div className="col-span-1 flex h-full items-center justify-center border-x border-[--border] dark:border-[--dark-border]" />
    <div className="flex items-center justify-center h-full col-span-1" />
  </div>
);

const HeroSectionGradient = () => (
  <>
    <figure className="pointer-events-none absolute -bottom-[70%] left-1/2 z-0 block aspect-square w-[520px] -translate-x-1/2 rounded-full bg-blue-300  blur-[200px]" />
    <figure className="pointer-events-none absolute left-[4vw] top-[64px] z-20 hidden aspect-square w-[32vw] rounded-full bg-blue-50  opacity-50 blur-[100px]  md:block" />
    <figure className="pointer-events-none absolute bottom-[-50px] right-[7vw] z-20 hidden aspect-square w-[30vw] rounded-full bg-blue-50 blur-[100px]  md:block" />
  </>
);
