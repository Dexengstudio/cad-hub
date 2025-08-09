import { Navigate, Outlet, useLocation } from "react-router";
import { useAuth } from "../../hooks/use-auth";

interface Props {
  redirectTo?: string;
  roles?: string[];
}

export default function ProtectedRoute({
  redirectTo = "/auth/sign-in",
  roles,
}: Props) {
  const { isAuthenticated, user, initialized, loading } = useAuth();
  const location = useLocation();

  if (!initialized || loading)
    return <div className="p-6 text-sm">Loading...</div>;

  if (!isAuthenticated)
    return (
      <Navigate to={redirectTo} replace state={{ from: location.pathname }} />
    );

  if (roles && user && !roles.includes(user.role || ""))
    return <Navigate to="/" replace />;

  return <Outlet />;
}
