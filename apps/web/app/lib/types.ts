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


export type ChallengeCategory =
  | "mechanical"
  | "aerospace"
  | "automotive"
  | "general";
export type ChallengeDifficulty = "beginner" | "intermediate" | "advanced";
export type ChallengeStatus = "draft" | "open" | "closed" | "archived";

export type ScoringCriterion = {
  name: string;
  weight: number;
  description: string;
  maxPoints: number;
};

export type Challenge = {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription?: string;
  category: ChallengeCategory;
  difficulty: ChallengeDifficulty;
  estimatedTime?: number;
  maxParticipants?: number;
  currentParticipants?: number;
  requirements?: {
    constraints?: string[];
    materials?: string[];
    tools?: string[];
    specifications?: Record<string, any>;
  };
  cadSoftwareRequired?: string[];
  fileFormats?: string[];
  maxFileSize?: number;
  maxFiles?: number;
  scoringCriteria?: {
    criteria: ScoringCriterion[];
  };
  maxScore?: number;
  autoScoring?: boolean;
  status?: ChallengeStatus;
  isPublic?: boolean;
  isFeatured?: boolean;
  startDate?: string;
  endDate?: string;
  submissionDeadline?: string;
  createdBy?: string;
  organizationId?: string;
  thumbnailImage: string;
  drawings: string[];
  referenceFiles?: Array<{ name: string; url: string; type: string }>;
  totalSubmissions?: number;
  averageScore?: number;
  completionRate?: number;
  viewCount?: number;
  tags?: string[];
  createdAt: string;
  updatedAt: string;
};

export type LeaderboardEntry = {
  rank: number;
  participantId: string;
  name: string;
  avatarUrl?: string;
  score: number;
  submittedAt: string;
  elapsedSeconds?: number;
  software?: string;
};

export type MassResultState = {
  ok: boolean;
  correct?: boolean;
  score?: number;
  rank?: number;
  total?: number;
  beatCount?: number;
  elapsedSeconds?: number;
  message?: string;
  error?: string;
};
