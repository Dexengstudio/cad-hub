import { cn } from "@cad-challenges-hub/ui";
import SectionLine from "./section-line";

export default function SectionPage({
  className,
  children,
  withLine,
}: {
  className?: string;
  children: React.ReactNode;
  withLine?: boolean;
}) {
  return (
    <main
      className={cn(
        "px-4 py-5 mx-auto md:py-10 max-w-7xl md:px-6 min-h-screen",
        className
      )}
    >
      {children}
      {withLine && <SectionLine />}
    </main>
  );
}
