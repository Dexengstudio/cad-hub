import { Navigate, Outlet } from "react-router";
import { useAuth } from "../../hooks/use-auth";

export default function OrganizationGuard() {
  const { user, initialized, loading } = useAuth();
  if (!initialized || loading)
    return <div className="p-4 text-sm">Loading...</div>;
  if (!user) return <Navigate to="/auth/sign-in" replace />;
  if (user.role !== "organization" && user.role !== "admin")
    return <Navigate to="/" replace />;
  return <Outlet />;
}
