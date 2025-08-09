import { create } from "zustand";
import { authClient } from "../lib/auth";
import type { Session, User } from "../lib/types";

interface AuthState {
  loading: boolean;
  initialized: boolean;
  session: Session | null;
  user: User | null;
  error?: string;
  hydrate: () => Promise<void>;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  loading: false,
  initialized: false,
  session: null,
  user: null,
  async hydrate() {
    if (get().initialized) return;
    set({ loading: true });
    try {
      const session = await authClient.getSession();
      set({ session, user: session?.user || null, error: undefined });
    } catch (e: any) {
      set({ error: e?.message || "Failed to load session" });
    } finally {
      set({ loading: false, initialized: true });
    }
  },
  async login(email, password) {
    set({ loading: true, error: undefined });
    const resp: any = await authClient.signIn(email, password);
    if (resp.success) {
      const session = await authClient.getSession();
      set({ session, user: session?.user || null, loading: false });
      return true;
    } else {
      set({ error: resp.error?.message || "Login failed", loading: false });
      return false;
    }
  },
  async logout() {
    set({ loading: true });
    await authClient.signOut();
    set({ session: null, user: null, loading: false });
  },
}));
