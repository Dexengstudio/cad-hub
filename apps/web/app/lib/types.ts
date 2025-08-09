export type UserRole = "individual" | "organization" | "admin";

export interface User {
  id: string;
  email: string;
  name?: string;
  role?: UserRole;
  createdAt?: string;
  avatarUrl?: string;
}

export interface Session {
  user: User | null;
  expiresAt?: string;
  accessToken?: string;
}

export interface ApiSuccess<T> {
  success: true;
  data: T;
  message?: string;
}
export interface ApiError {
  success: false;
  error: { code: string; message: string; details?: any };
}
export type ApiResponse<T> = ApiSuccess<T> | ApiError;

export interface AuthLoginResponse {
  session: Session;
}
export interface AuthSessionResponse {
  session: Session | null;
}
