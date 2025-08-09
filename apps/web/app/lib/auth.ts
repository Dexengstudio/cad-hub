import { api } from "./api";
import type { Session } from "./types";

export const authClient = {
  async getSession(): Promise<Session | null> {
    const resp: any = await api.session();
    if (resp.success) return resp.data.session || null;
    return null;
  },
  async signIn(email: string, password: string) {
    return api.login(email, password);
  },
  async signOut() {
    return api.logout();
  },
};
