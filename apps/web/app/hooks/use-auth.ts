import { useEffect } from "react";
import { useAuthStore } from "../store/auth-store";

export function useAuth(autoHydrate: boolean = true) {
  const { session, user, loading, initialized, error, hydrate, login, logout } =
    useAuthStore();
  useEffect(() => {
    if (autoHydrate) hydrate();
  }, [autoHydrate, hydrate]);
  return {
    session,
    user,
    loading,
    initialized,
    error,
    login,
    logout,
    refresh: hydrate,
    isAuthenticated: !!user,
  };
}
