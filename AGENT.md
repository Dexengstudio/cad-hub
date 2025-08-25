# CAD Challenge Platform - Complete Monorepo Wireframe Structure

## Project Overview

A competitive platform for mechanical design engineers where:

- **Individual Engineers**: Participate in tournaments, solve challenges,
  compete on leaderboards
- **Organizations**: Create tournaments, monitor participants, manage
  challenges, view analytics

## Tech Stack

- **Monorepo**: Nx workspace
- **Frontend**: React Router v7 + TypeScript + tailwindcss + shadcn
- **Backend**: Hono / Hono WebSocket
- **Authentication**: Better Auth
- **Database**: Neon (with Drizzle ORM)
- **File Storage**: Cloudflare R2
- **CAD Viewer**: Three.js

---

## Complete Monorepo Structure

```
cad-platform-monorepo/
├── apps/
│   ├── frontend/                     # React Router v7 app
│   │   ├── app/
│   │   │   ├── components/           # Reusable components
│   │   │   │   ├── ui/               # Base UI components
│   │   │   │   │   ├── button.tsx
│   │   │   │   │   ├── card.tsx
│   │   │   │   │   ├── input.tsx
│   │   │   │   │   ├── modal.tsx
│   │   │   │   │   ├── table.tsx
│   │   │   │   │   ├── tabs.tsx
│   │   │   │   │   ├── badge.tsx
│   │   │   │   │   ├── alert.tsx
│   │   │   │   │   ├── dropdown.tsx
│   │   │   │   │   └── progress-bar.tsx
│   │   │   │   ├── auth/             # Auth components
│   │   │   │   │   ├── sign-in-form.tsx
│   │   │   │   │   ├── sign-up-form.tsx
│   │   │   │   │   ├── user-button.tsx
│   │   │   │   │   ├── protected-route.tsx
│   │   │   │   │   ├── user-type-selector.tsx
│   │   │   │   │   ├── organization-guard.tsx
│   │   │   │   │   └── individual-guard.tsx
│   │   │   │   ├── challenges/       # Challenge components
│   │   │   │   │   ├── challenge-card.tsx
│   │   │   │   │   ├── challenge-grid.tsx
│   │   │   │   │   ├── challenge-details.tsx
│   │   │   │   │   ├── challenge-filters.tsx
│   │   │   │   │   ├── challenge-form.tsx
│   │   │   │   │   ├── submission-form.tsx
│   │   │   │   │   ├── submission-card.tsx
│   │   │   │   │   └── challenge-analytics.tsx
│   │   │   │   ├── tournaments/      # Tournament components
│   │   │   │   │   ├── tournament-card.tsx
│   │   │   │   │   ├── tournament-grid.tsx
│   │   │   │   │   ├── tournament-form.tsx
│   │   │   │   │   ├── tournament-bracket.tsx
│   │   │   │   │   ├── participant-list.tsx
│   │   │   │   │   ├── join-tournament.tsx
│   │   │   │   │   ├── compete-interface.tsx
│   │   │   │   │   ├── tournament-analytics.tsx
│   │   │   │   │   └── tournament-settings.tsx
│   │   │   │   ├── leaderboard/      # Leaderboard components
│   │   │   │   │   ├── leaderboard-table.tsx
│   │   │   │   │   ├── ranking-card.tsx
│   │   │   │   │   ├── score-display.tsx
│   │   │   │   │   ├── user-ranking.tsx
│   │   │   │   │   └── achievement-badge.tsx
│   │   │   │   ├── cad/              # CAD-specific components
│   │   │   │   │   ├── cad-viewer.tsx
│   │   │   │   │   ├── model-preview.tsx
│   │   │   │   │   ├── file-uploader.tsx
│   │   │   │   │   ├── drawing-display.tsx
│   │   │   │   │   └── model-comparison.tsx
│   │   │   │   ├── analytics/        # Analytics components
│   │   │   │   │   ├── chart-wrapper.tsx
│   │   │   │   │   ├── stats-card.tsx
│   │   │   │   │   ├── progress-chart.tsx
│   │   │   │   │   ├── participation-metrics.tsx
│   │   │   │   │   └── performance-dashboard.tsx
│   │   │   │   ├── layout/           # Layout components
│   │   │   │   │   ├── header.tsx
│   │   │   │   │   ├── navigation.tsx
│   │   │   │   │   ├── sidebar.tsx
│   │   │   │   │   ├── footer.tsx
│   │   │   │   │   ├── individual-nav.tsx
│   │   │   │   │   └── organization-nav.tsx
│   │   │   │   └── common/           # Common components
│   │   │   │       ├── loading-spinner.tsx
│   │   │   │       ├── error-boundary.tsx
│   │   │   │       ├── pagination.tsx
│   │   │   │       ├── search-bar.tsx
│   │   │   │       ├── notification-toast.tsx
│   │   │   │       └── empty-state.tsx
│   │   │   ├── routes/               # React Router v7 routes
│   │   │   │   ├── _index.tsx        # Homepage
│   │   │   │   ├── _layout.tsx       # Root layout with Better Auth Provider
│   │   │   │   ├── auth/
│   │   │   │   │   ├── sign-in.tsx
│   │   │   │   │   ├── sign-up.tsx
│   │   │   │   │   └── user-type-setup.tsx
│   │   │   │   ├── dashboard/        # INDIVIDUAL USER DASHBOARD
│   │   │   │   │   ├── _layout.tsx       # Individual dashboard layout
│   │   │   │   │   ├── _index.tsx        # Individual dashboard home
│   │   │   │   │   ├── profile.tsx       # Edit profile & settings
│   │   │   │   │   ├── tournaments/
│   │   │   │   │   │   ├── _index.tsx    # My tournament participations
│   │   │   │   │   │   ├── available.tsx # Available tournaments to join
│   │   │   │   │   │   ├── history.tsx   # Past tournaments
│   │   │   │   │   │   └── $id.tsx       # Tournament participation details
│   │   │   │   │   ├── challenges/
│   │   │   │   │   │   ├── _index.tsx    # Available challenges
│   │   │   │   │   │   ├── completed.tsx # Completed challenges
│   │   │   │   │   │   └── $id.tsx       # Challenge attempt/submission
│   │   │   │   │   ├── leaderboard.tsx   # My rankings & stats
│   │   │   │   │   ├── achievements.tsx  # Badges & achievements
│   │   │   │   │   └── settings.tsx      # Account settings
│   │   │   │   ├── org-dashboard/    # ORGANIZATION DASHBOARD
│   │   │   │   │   ├── _layout.tsx       # Organization dashboard layout
│   │   │   │   │   ├── _index.tsx        # Organization dashboard home
│   │   │   │   │   ├── tournaments/
│   │   │   │   │   │   ├── _index.tsx    # Manage tournaments
│   │   │   │   │   │   ├── create.tsx    # Create new tournament
│   │   │   │   │   │   ├── active.tsx    # Currently active tournaments
│   │   │   │   │   │   ├── completed.tsx # Completed tournaments
│   │   │   │   │   │   └── $id/
│   │   │   │   │   │       ├── _index.tsx    # Tournament overview
│   │   │   │   │   │       ├── participants.tsx
│   │   │   │   │   │       ├── bracket.tsx   # Tournament bracket
│   │   │   │   │   │       ├── analytics.tsx # Tournament analytics
│   │   │   │   │   │       ├── submissions.tsx
│   │   │   │   │   │       └── settings.tsx
│   │   │   │   │   ├── challenges/
│   │   │   │   │   │   ├── _index.tsx    # Manage challenges
│   │   │   │   │   │   ├── create.tsx    # Create new challenge
│   │   │   │   │   │   ├── active.tsx    # Active challenges
│   │   │   │   │   │   ├── library.tsx   # Challenge library/templates
│   │   │   │   │   │   └── $id/
│   │   │   │   │   │       ├── _index.tsx    # Challenge overview
│   │   │   │   │   │       ├── submissions.tsx # All submissions
│   │   │   │   │   │       ├── analytics.tsx  # Challenge analytics
│   │   │   │   │   │       ├── leaderboard.tsx
│   │   │   │   │   │       └── edit.tsx       # Edit challenge
│   │   │   │   │   ├── participants/     # Participant management
│   │   │   │   │   │   ├── _index.tsx    # All participants overview
│   │   │   │   │   │   ├── active.tsx    # Currently active participants
│   │   │   │   │   │   ├── rankings.tsx  # Participant rankings
│   │   │   │   │   │   └── $id.tsx       # Individual participant profile
│   │   │   │   │   ├── analytics/        # Organization-wide analytics
│   │   │   │   │   │   ├── _index.tsx    # Analytics dashboard
│   │   │   │   │   │   ├── tournaments.tsx
│   │   │   │   │   │   ├── challenges.tsx
│   │   │   │   │   │   ├── participants.tsx
│   │   │   │   │   │   └── reports.tsx   # Generate reports
│   │   │   │   │   ├── organization/     # Organization management
│   │   │   │   │   │   ├── profile.tsx   # Organization profile
│   │   │   │   │   │   ├── team.tsx      # Team member management
│   │   │   │   │   │   ├── billing.tsx   # Billing & subscription
│   │   │   │   │   │   └── settings.tsx
│   │   │   │   │   └── help/
│   │   │   │   │       ├── getting-started.tsx
│   │   │   │   │       ├── tutorials.tsx
│   │   │   │   │       └── support.tsx
│   │   │   │   ├── challenges/       # PUBLIC CHALLENGE ROUTES
│   │   │   │   │   ├── _index.tsx    # Browse all challenges
│   │   │   │   │   ├── categories/
│   │   │   │   │   │   ├── mechanical.tsx
│   │   │   │   │   │   ├── aerospace.tsx
│   │   │   │   │   │   └── automotive.tsx
│   │   │   │   │   └── $id/
│   │   │   │   │       ├── _index.tsx    # Challenge details
│   │   │   │   │       ├── submit.tsx    # Submit solution (individuals only)
│   │   │   │   │       ├── leaderboard.tsx
│   │   │   │   │       └── submissions.tsx # View submissions
│   │   │   │   ├── tournaments/      # PUBLIC TOURNAMENT ROUTES
│   │   │   │   │   ├── _index.tsx    # Browse all tournaments
│   │   │   │   │   ├── upcoming.tsx  # Upcoming tournaments
│   │   │   │   │   ├── live.tsx      # Currently running tournaments
│   │   │   │   │   ├── completed.tsx # Completed tournaments
│   │   │   │   │   └── $id/
│   │   │   │   │       ├── _index.tsx    # Tournament details
│   │   │   │   │       ├── join.tsx      # Join tournament (individuals only)
│   │   │   │   │       ├── bracket.tsx   # View bracket
│   │   │   │   │       ├── leaderboard.tsx
│   │   │   │   │       └── compete.tsx   # Live competition interface
│   │   │   │   ├── leaderboard/      # GLOBAL LEADERBOARDS
│   │   │   │   │   ├── _index.tsx    # Global leaderboard
│   │   │   │   │   ├── challenges.tsx # Challenge leaderboards
│   │   │   │   │   ├── tournaments.tsx # Tournament leaderboards
│   │   │   │   │   ├── monthly.tsx   # Monthly rankings
│   │   │   │   │   └── categories.tsx # By category rankings
│   │   │   │   ├── explore/          # DISCOVERY & EXPLORATION
│   │   │   │   │   ├── _index.tsx    # Explore page
│   │   │   │   │   ├── featured.tsx  # Featured content
│   │   │   │   │   ├── trending.tsx  # Trending challenges/tournaments
│   │   │   │   │   └── organizations.tsx # Browse organizations
│   │   │   │   └── help/             # HELP & DOCUMENTATION
│   │   │   │       ├── _index.tsx    # Help center
│   │   │   │       ├── getting-started.tsx
│   │   │   │       ├── cad-guidelines.tsx
│   │   │   │       ├── scoring-system.tsx
│   │   │   │       ├── faq.tsx
│   │   │   │       └── contact.tsx
│   │   │   ├── hooks/                # Custom React hooks
│   │   │   │   ├── use-auth.ts
│   │   │   │   ├── use-user-type.ts
│   │   │   │   ├── use-challenges.ts
│   │   │   │   ├── use-tournaments.ts
│   │   │   │   ├── use-submissions.ts
│   │   │   │   ├── use-leaderboard.ts
│   │   │   │   ├── use-analytics.ts
│   │   │   │   ├── use-participants.ts
│   │   │   │   ├── use-websocket.ts
│   │   │   │   └── use-file-upload.ts
│   │   │   ├── lib/                  # Utility libraries
│   │   │   │   ├── auth.ts           # Better Auth configuration
│   │   │   │   ├── api.ts            # API client setup
│   │   │   │   ├── validations.ts    # Zod schemas
│   │   │   │   ├── utils.ts          # General utilities
│   │   │   │   ├── constants.ts      # App constants
│   │   │   │   ├── permissions.ts    # Permission utilities
│   │   │   │   └── types.ts          # TypeScript types
│   │   │   ├── store/                # State management
│   │   │   │   ├── auth-store.ts
│   │   │   │   ├── user-type-store.ts
│   │   │   │   ├── challenge-store.ts
│   │   │   │   ├── tournament-store.ts
│   │   │   │   ├── analytics-store.ts
│   │   │   │   └── ui-store.ts
│   │   │   └── styles/               # Styles
│   │   │       ├── globals.css
│   │   │       ├── components.css
│   │   │       └── dashboard.css
│   │   ├── public/                   # Static assets
│   │   │   ├── images/
│   │   │   ├── icons/
│   │   │   └── cad-samples/
│   │   ├── vite.config.ts
│   │   ├── tailwind.config.js
│   │   └── package.json
│   │
│   └── server/                       # Hono backend
│       ├── drizzle/                  # Drizzle migration files
│       │   └── 0000_...sql
│       ├── src/
│       │   ├── index.ts              # Application entry point
│       │   ├── routes/               # API route definitions
│       │   │   ├── auth.ts
│       │   │   ├── users.ts
│       │   │   ├── organizations.ts
│       │   │   ├── challenges.ts
│       │   │   ├── submissions.ts
│       │   │   ├── tournaments.ts
│       │   │   ├── leaderboard.ts
│       │   │   ├── analytics.ts
│       │   │   ├── files.ts
│       │   │   ├── notifications.ts
│       │   │   └── ws.ts             # WebSocket route
│       │   ├── services/             # Business logic
│       │   │   ├── auth.service.ts
│       │   │   ├── user.service.ts
│       │   │   ├── challenge.service.ts
│       │   │   ├── tournament.service.ts
│       │   │   ├── submission.service.ts
│       │   │   ├── analytics.service.ts
│       │   │   ├── file.service.ts
│       │   │   └── notification.service.ts
│       │   ├── db/                   # Database (Drizzle)
│       │   │   ├── index.ts          # Drizzle client instance
│       │   │   ├── schema.ts         # Drizzle table schemas
│       │   │   └── seed.ts
│       │   ├── middleware/           # Hono middleware
│       │   │   ├── auth.ts           # Better Auth middleware
│       │   │   ├── permissions.ts    # Role-based access control
│       │   │   └── error-handler.ts
│       │   ├── lib/                  # Shared utilities
│       │   │   ├── s3.ts             # AWS S3 client
│       │   │   └── types.ts          # DTOs and types
│       │   └── config.ts             # Environment and config variables
│       ├── test/                     # Tests
│       │   ├── unit/
│       │   └── integration/
│       ├── drizzle.config.ts         # Drizzle configuration
│       └── package.json
│
├── libs/                           # Shared libraries
│   ├── shared-types/               # Shared TypeScript types
│   │   ├── src/
│   │   │   ├── auth.types.ts
│   │   │   ├── challenge.types.ts
│   │   │   ├── tournament.types.ts
│   │   │   ├── user.types.ts
│   │   │   └── analytics.types.ts
│   │   └── package.json
│   ├── shared-utils/               # Shared utilities
│   │   ├── src/
│   │   │   ├── validations.ts
│   │   │   ├── constants.ts
│   │   │   ├── formatters.ts
│   │   │   └── permissions.ts
│   │   └── package.json
│   └── shared-config/              # Shared configuration
│       ├── src/
│       │   ├── tailwind.config.js
│       │   ├── tsconfig.base.json
│       │   └── eslint.config.js
│       └── package.json
│
├── tools/                          # Build tools and scripts
│   ├── scripts/
│   │   ├── build.sh
│   │   ├── deploy.sh
│   │   └── seed-data.ts
│   └── docker/
│       ├── Dockerfile.frontend
│       ├── Dockerfile.backend
│       └── docker-compose.yml
│
├── docs/                           # Documentation
│   ├── api/
│   │   ├── authentication.md
│   │   ├── tournaments.md
│   │   ├── challenges.md
│   │   └── analytics.md
│   ├── user-guides/
│   │   ├── individual-user-guide.md
│   │   ├── organization-guide.md
│   │   └── cad-file-requirements.md
│   └── development/
│       ├── setup.md
│       ├── deployment.md
│       └── testing.md
│
├── nx.json                         # Nx workspace configuration
├── package.json                    # Root package.json
├── tsconfig.base.json              # Base TypeScript configuration
├── .env.example                    # Environment variables template
├── .gitignore
└── README.md
```

---

## User Type Dashboard Structure

### INDIVIDUAL USER DASHBOARD (`/dashboard/*`)

**Purpose**: Personal workspace for engineers to participate in tournaments and
solve challenges

**Navigation Structure:**

```
├── Dashboard Home
│   ├── Quick Stats (tournaments joined, challenges completed, ranking)
│   ├── Recent Activity Feed
│   ├── Recommended Tournaments
│   └── Featured Challenges
├── Tournaments
│   ├── Available to Join
│   ├── My Participations (ongoing)
│   ├── Tournament History
│   └── Tournament Results
├── Challenges
│   ├── Available Challenges
│   ├── My Submissions
│   ├── Completed Challenges
│   └── Challenge Results
├── Leaderboard & Rankings
│   ├── My Global Ranking
│   ├── Category Rankings
│   └── Achievement Progress
├── Profile & Settings
│   ├── Profile Information
│   ├── CAD Software Preferences
│   ├── Notification Settings
│   └── Account Settings
└── Achievements
    ├── Badges Earned
    ├── Certificates
    └── Performance Metrics
```

### ORGANIZATION DASHBOARD (`/org-dashboard/*`)

**Purpose**: Management workspace for organizations to create tournaments and
monitor participants

**Navigation Structure:**

```
├── Organization Home
│   ├── Organization Overview
│   ├── Active Tournaments Summary
│   ├── Participant Statistics
│   └── Recent Activity
├── Tournament Management
│   ├── Create New Tournament
│   ├── Active Tournaments
│   ├── Tournament Templates
│   ├── Completed Tournaments
│   └── Tournament Analytics
├── Challenge Management
│   ├── Create New Challenge
│   ├── Active Challenges
│   ├── Challenge Library
│   ├── Challenge Analytics
│   └── Submission Review
├── Participant Management
│   ├── All Participants Overview
│   ├── Active Participants
│   ├── Participant Rankings
│   ├── Individual Participant Profiles
│   └── Participant Communication
├── Analytics & Reports
│   ├── Tournament Performance
│   ├── Challenge Engagement
│   ├── Participant Progress
│   ├── Custom Reports
│   └── Data Export
├── Organization Settings
│   ├── Organization Profile
│   ├── Team Member Management
│   ├── Billing & Subscription
│   ├── API Access
│   └── Notification Preferences
└── Help & Resources
    ├── Getting Started Guide
    ├── Best Practices
    ├── Video Tutorials
    └── Support Center
```

---

## Complete API Endpoints Structure

# Complete API Endpoints Structure

## Authentication Endpoints

```
POST   /api/auth/register           # Register a new user
POST   /api/auth/login              # Log in a user
POST   /api/auth/logout             # Log out a user
GET    /api/auth/session            # Get current session info
POST   /api/auth/set-user-type      # Set user type (individual/organization)
```

## User Management Endpoints

```
# Individual Users
GET    /api/users                   # List users (public profiles)
GET    /api/users/:id               # Get user profile
PUT    /api/users/me                # Update my user profile
GET    /api/users/me/stats          # Get my statistics
GET    /api/users/:id/achievements  # Get user achievements
GET    /api/users/:id/submissions   # Get user's public submissions
GET    /api/users/:id/tournaments   # Get user's tournament history

# Organization Users
GET    /api/organizations           # List organizations
GET    /api/organizations/:id       # Get organization profile
PUT    /api/organizations/me        # Update my organization profile
GET    /api/organizations/me/stats  # Get my organization statistics
GET    /api/organizations/:id/tournaments # Get organization's tournaments
GET    /api/organizations/:id/challenges  # Get organization's challenges
```

## Challenge Endpoints

```
# Public Challenge Access
GET    /api/challenges              # List all challenges (with filters)
GET    /api/challenges/:id          # Get challenge details
GET    /api/challenges/:id/leaderboard # Get challenge leaderboard
GET    /api/challenges/categories   # Get challenge categories
GET    /api/challenges/featured     # Get featured challenges
GET    /api/challenges/trending     # Get trending challenges
GET    /api/challenges/search       # Search challenges

# Individual User Challenge Access
POST   /api/challenges/:id/submissions # Submit solution (individuals only)
GET    /api/challenges/:id/my-submission # Get my submission
PUT    /api/challenges/:id/submissions/:submissionId # Update submission
DELETE /api/challenges/:id/submissions/:submissionId # Delete submission
GET    /api/challenges/my-submissions # Get all my submissions
POST   /api/challenges/:id/favorite # Add challenge to favorites
DELETE /api/challenges/:id/favorite # Remove from favorites
GET    /api/challenges/favorites    # Get my favorite challenges

# Organization Challenge Management
POST   /api/challenges              # Create challenge (organizations only)
PUT    /api/challenges/:id          # Update challenge (creator only)
DELETE /api/challenges/:id          # Delete challenge (creator only)
GET    /api/challenges/:id/submissions # Get all submissions (creator only)
GET    /api/challenges/:id/submissions/:submissionId # Get specific submission
PUT    /api/challenges/:id/submissions/:submissionId/score # Score submission
POST   /api/challenges/:id/submissions/:submissionId/feedback # Provide feedback
GET    /api/challenges/:id/analytics # Get challenge analytics
POST   /api/challenges/:id/duplicate # Duplicate challenge
PATCH  /api/challenges/:id/status   # Update challenge status (active/inactive)
```

## Tournament Endpoints

```
# Public Tournament Access
GET    /api/tournaments             # List all tournaments (with filters)
GET    /api/tournaments/:id         # Get tournament details
GET    /api/tournaments/:id/bracket # Get tournament bracket
GET    /api/tournaments/:id/leaderboard # Get tournament leaderboard
GET    /api/tournaments/:id/participants # Get tournament participants
GET    /api/tournaments/upcoming    # Get upcoming tournaments
GET    /api/tournaments/live        # Get currently running tournaments
GET    /api/tournaments/completed   # Get completed tournaments
GET    /api/tournaments/featured    # Get featured tournaments
GET    /api/tournaments/search      # Search tournaments

# Individual User Tournament Access
POST   /api/tournaments/:id/join    # Join tournament (individuals only)
DELETE /api/tournaments/:id/leave   # Leave tournament (before start)
GET    /api/tournaments/:id/my-participation # Get my participation details
POST   /api/tournaments/:id/submissions # Submit for tournament round
GET    /api/tournaments/:id/submissions/me # Get my tournament submissions
GET    /api/tournaments/my-tournaments # Get tournaments I've joined
GET    /api/tournaments/available   # Get tournaments available to join

# Organization Tournament Management
POST   /api/tournaments             # Create tournament (organizations only)
PUT    /api/tournaments/:id         # Update tournament (creator only)
DELETE /api/tournaments/:id         # Delete tournament (creator only)
POST   /api/tournaments/:id/start   # Start tournament
POST   /api/tournaments/:id/end     # End tournament
POST   /api/tournaments/:id/advance-round # Advance to next round
GET    /api/tournaments/:id/matches # Get tournament matches
PUT    /api/tournaments/:id/matches/:matchId # Update match results
GET    /api/tournaments/:id/analytics # Get tournament analytics
POST   /api/tournaments/:id/invite  # Invite participants
PUT    /api/tournaments/:id/participants/:userId/status # Update participant status
PATCH  /api/tournaments/:id/settings # Update tournament settings
```

## Submission Endpoints

```
# Public Submission Access
GET    /api/submissions/:id         # Get submission details (if public)
GET    /api/submissions/:id/files   # Get submission files (if public)

# Individual User Submissions
GET    /api/submissions             # Get my submissions (with filters)
GET    /api/submissions/:id         # Get my specific submission
PUT    /api/submissions/:id         # Update my submission
DELETE /api/submissions/:id         # Delete my submission
POST   /api/submissions/:id/files   # Upload files to submission
DELETE /api/submissions/:id/files/:fileId # Delete file from submission
GET    /api/submissions/stats       # Get my submission statistics

# Organization Submission Management
GET    /api/submissions/review      # Get submissions to review
PUT    /api/submissions/:id/score   # Score a submission
POST   /api/submissions/:id/feedback # Provide feedback
PUT    /api/submissions/:id/status  # Update submission status
GET    /api/submissions/analytics   # Get submission analytics
POST   /api/submissions/:id/flag    # Flag submission for review
```

## Leaderboard Endpoints

```
GET    /api/leaderboard/global      # Global user rankings
GET    /api/leaderboard/challenges  # Challenge-specific leaderboards
GET    /api/leaderboard/tournaments # Tournament-specific leaderboards
GET    /api/leaderboard/monthly     # Monthly rankings
GET    /api/leaderboard/categories  # Category-based rankings
GET    /api/leaderboard/organizations # Organization rankings
GET    /api/leaderboard/achievements # Achievement-based rankings
GET    /api/leaderboard/:id/history # Ranking history for user/org
```

## Analytics Endpoints

```
# Individual User Analytics
GET    /api/analytics/my-performance # Personal performance analytics
GET    /api/analytics/my-progress   # Personal progress tracking
GET    /api/analytics/my-comparisons # Compare with others

# Organization Analytics
GET    /api/analytics/tournaments/:id # Tournament-specific analytics
GET    /api/analytics/challenges/:id  # Challenge-specific analytics
GET    /api/analytics/participants    # Participant analytics
GET    /api/analytics/engagement      # Engagement metrics
GET    /api/analytics/performance     # Overall performance metrics
GET    /api/analytics/trends          # Trending data
GET    /api/analytics/reports         # Custom reports
POST   /api/analytics/reports/generate # Generate custom report
GET    /api/analytics/export/:reportId # Export analytics data
```

## File Management Endpoints

```
POST   /api/files/upload            # Upload CAD file
GET    /api/files/:id               # Get file details
GET    /api/files/:id/download      # Download file
DELETE /api/files/:id               # Delete file (owner only)
GET    /api/files/:id/preview       # Get file preview/thumbnail
POST   /api/files/:id/convert       # Convert file format
GET    /api/files/formats           # Get supported file formats
POST   /api/files/validate          # Validate CAD file
```

## Notification Endpoints

```
GET    /api/notifications           # Get user notifications
PUT    /api/notifications/:id/read  # Mark notification as read
PUT    /api/notifications/read-all  # Mark all notifications as read
DELETE /api/notifications/:id       # Delete notification
GET    /api/notifications/settings  # Get notification preferences
PUT    /api/notifications/settings  # Update notification preferences
POST   /api/notifications/test      # Send test notification
```

## WebSocket Events (via /api/ws)

```
# Real-time Tournament Events
tournament:started              # Tournament has started
tournament:ended                # Tournament has ended
tournament:round-advanced       # Tournament advanced to next round
tournament:participant-joined   # New participant joined
tournament:submission-received  # New submission received
tournament:leaderboard-updated  # Leaderboard updated

# Real-time Challenge Events
challenge:new-submission        # New submission to challenge
challenge:leaderboard-updated   # Challenge leaderboard updated
challenge:scoring-completed     # Submission scoring completed

# Real-time Notification Events
notification:new                # New notification received
notification:read               # Notification marked as read

# Real-time System Events
system:maintenance              # System maintenance notification
system:announcement             # System-wide announcement
```

## Search & Filter Endpoints

```
GET    /api/search/global          # Global search across all content
GET    /api/search/challenges      # Search challenges with filters
GET    /api/search/tournaments     # Search tournaments with filters
GET    /api/search/users           # Search users
GET    /api/search/organizations   # Search organizations
GET    /api/search/suggestions     # Get search suggestions
GET    /api/search/recent          # Get recent searches
```

## Achievement & Gamification Endpoints

```
GET    /api/achievements           # Get all available achievements
GET    /api/achievements/my        # Get my achievements
GET    /api/achievements/:id       # Get specific achievement details
POST   /api/achievements/:id/claim # Claim achievement
GET    /api/badges                 # Get available badges
GET    /api/badges/my              # Get my badges
GET    /api/points/history         # Get points history
GET    /api/levels                 # Get level system info
```

## Administration Endpoints (Admin Only)

```
# User Management
GET    /api/admin/users            # Get all users
PUT    /api/admin/users/:id/status # Update user status
DELETE /api/admin/users/:id        # Delete user account

# Organization Management
GET    /api/admin/organizations    # Get all organizations
PUT    /api/admin/organizations/:id/status # Update org status
DELETE /api/admin/organizations/:id # Delete organization

# Content Moderation
GET    /api/admin/flagged-content  # Get flagged content
PUT    /api/admin/content/:id/moderate # Moderate content
GET    /api/admin/reports          # Get user reports
PUT    /api/admin/reports/:id      # Handle report

# System Management
GET    /api/admin/system-stats     # Get system statistics
POST   /api/admin/announcements    # Create system announcement
GET    /api/admin/logs             # Get system logs
POST   /api/admin/maintenance      # Schedule maintenance
```

## Health & Status Endpoints

```
GET    /api/health                 # API health check
GET    /api/status                 # System status
GET    /api/version                # API version info
GET    /api/metrics                # System metrics (admin only)
```

## Rate Limiting

```
# Rate limits by endpoint type:
- Authentication: 10 requests/minute
- File uploads: 10 files/hour per user
- Submissions: 5 submissions/hour per challenge
- API general: 1000 requests/hour per user
- Search: 100 requests/hour per user
- WebSocket connections: 5 concurrent per user
```

## Response Formats

```
# Standard Success Response
{
  "success": true,
  "data": {},
  "message": "Operation completed successfully",
  "timestamp": "2025-07-22T11:13:16Z"
}

# Standard Error Response
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input provided",
    "details": {}
  },
  "timestamp": "2025-07-22T11:13:16Z"
}

# Paginated Response
{
  "success": true,
  "data": [],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 100,
    "totalPages": 5,
    "hasNext": true,
    "hasPrev": false
  }
}
```
