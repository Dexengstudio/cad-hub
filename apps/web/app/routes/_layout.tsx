import { Footer } from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { Outlet } from "react-router";
import { Hexagon } from "lucide-react";
import { cn } from "@cad-challenges-hub/ui";
import { useAuth } from "../hooks/use-auth";

export default function Layout() {
  // hydrate auth (no explicit usage needed here)
  useAuth();

  const mainLinks = [
    { href: "/challenges", label: "Challenges" },
    { href: "/#", label: "About" },
    { href: "/#", label: "Blog" },
    { href: "/#", label: "Contact" },
  ];
  return (
    <div className="min-h-screen">
      <Header mainLinks={mainLinks} />
      <main className="relative">
        <Outlet />
      </main>
      <Footer
        logo={<Hexagon className="h-10 w-10" />}
        brandName="CAD Challenge Hub"
        socialLinks={[
          {
            icon: <TwitterLogo className="h-5 w-5" />,
            href: "https://twitter.com",
            label: "Twitter",
          },
          // {
          //   icon: <Github className="h-5 w-5" />,
          //   href: "https://github.com",
          //   label: "GitHub",
          // },
        ]}
        mainLinks={mainLinks}
        legalLinks={[
          { href: "/#", label: "Privacy" },
          { href: "/#", label: "Terms" },
        ]}
        copyright={{
          text: "© 2025 Dexeng Studio",
          license: "All rights reserved",
        }}
      />
    </div>
  );
}

const TwitterLogo = ({ className }: { className: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn("lucide lucide-twitter h-5 w-5", className)}
    aria-hidden="true"
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);
