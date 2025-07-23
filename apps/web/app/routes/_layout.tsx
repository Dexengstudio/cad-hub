import Header from "@/components/layout/header";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="">
        <Outlet />
      </main>
    </div>
  );
}
