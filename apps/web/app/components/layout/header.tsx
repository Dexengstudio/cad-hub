import { Hexagon } from "lucide-react";
// import Logo from "../logo";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  Button,
} from "@cad-challenges-hub/ui";
import { Link } from "react-router";
import { useAuth } from "../../hooks/use-auth";

// Navigation links array to be used in both desktop and mobile menus
const navigationLinks = [
  { href: "#", label: "Home", active: true },
  { href: "#", label: "Features" },
  { href: "#", label: "Pricing" },
  { href: "#", label: "About" },
];

export default function Component() {
  const { user, logout } = useAuth();
  return (
    <header className="border-b ">
      <div className="flex items-center justify-between h-16 gap-4 px-4 py-2 mx-auto md:py-4 max-w-7xl md:px-6">
        {/* Left side */}
        <div className="flex items-center gap-2">
          {/* Mobile menu trigger */}

          {/* Main nav */}
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2 font-medium">
              <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
                <Hexagon className="size-4" />
              </div>
              Dexcad
            </Link>
            {/* Navigation menu */}
            {/* <NavigationMenu className="max-md:hidden">
              <NavigationMenuList className="gap-2">
                {navigationLinks.map((link, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      active={link.active}
                      href={link.href}
                      className="text-muted-foreground hover:text-primary py-1.5 font-medium"
                    >
                      {link.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu> */}
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {!user && (
            <>
              <Button asChild variant="ghost" size="sm" className="text-sm">
                <Link to="/auth/sign-in">Sign In</Link>
              </Button>
              <Button asChild size="sm" className="text-sm">
                <Link to="/auth/sign-up">Get Started</Link>
              </Button>
            </>
          )}
          {user && (
            <div className="flex items-center gap-3">
              <span className="text-sm">{user.email}</span>
              <Button size="sm" variant="outline" onClick={() => logout()}>
                Logout
              </Button>
              <Button asChild size="sm" className="text-sm" variant="secondary">
                <Link to="/dashboard">Dashboard</Link>
              </Button>
            </div>
          )}
        </div>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              className="group size-8 md:hidden"
              variant="ghost"
              size="icon"
            >
              <svg
                className="pointer-events-none"
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>menu</title>
                <path
                  d="M4 12L20 12"
                  className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                />
                <path
                  d="M4 12H20"
                  className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                />
                <path
                  d="M4 12H20"
                  className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                />
              </svg>
            </Button>
          </PopoverTrigger>
          <PopoverContent align="start" className="p-1 w-36 md:hidden">
            <NavigationMenu className="max-w-none *:w-full">
              <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                {navigationLinks.map((link, index) => (
                  <NavigationMenuItem key={index} className="w-full">
                    <NavigationMenuLink
                      href={link.href}
                      className="py-1.5"
                      active={link.active}
                    >
                      {link.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
}
