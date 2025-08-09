import { Outlet, Navigate } from "react-router";
import { NavLink } from "react-router";
import { useAuth } from "../../hooks/use-auth";

export default function DashboardLayout() {
  const { user, initialized, loading } = useAuth();
  if (!initialized || loading) return <div className="p-6">Loading...</div>;
  if (!user) return <Navigate to="/auth/sign-in" replace />;
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-100 p-4">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <nav className="flex flex-col space-y-2">
          <NavLink to="/dashboard">Home</NavLink>
          <NavLink to="/dashboard/profile">Profile</NavLink>
          <NavLink to="/dashboard/tournaments">Tournaments</NavLink>
          <NavLink to="/dashboard/challenges">Challenges</NavLink>
          <NavLink to="/dashboard/submissions">Submissions</NavLink>
          <NavLink to="/dashboard/leaderboard">Leaderboard</NavLink>
          <NavLink to="/dashboard/achievements">Achievements</NavLink>
          <NavLink to="/dashboard/settings">Settings</NavLink>
        </nav>
      </aside>
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
}
