import {
  type RouteConfig,
  index,
  route,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [
  layout("./routes/_layout.tsx", [
    index("./routes/_index.tsx"),

    // these are public challenges, they do not require authentication and they do not register leaderboard entries

    route("challenges", "./routes/challenges/_index.tsx"),
    route("challenges/:challengeId", "./routes/challenges/challenge.tsx"),
  ]),

  ...prefix("/auth", [
    layout("./routes/auth/_layout.tsx", [
      route("sign-in", "./routes/auth/sign-in-form.tsx"),
      route("sign-up", "./routes/auth/sign-up-form.tsx"),
    ]),
  ]),
  ...prefix("/dashboard", [
    layout("./routes/dashboard/_layout.tsx", [
      index("./routes/dashboard/_index.tsx"),
      route("profile", "./routes/dashboard/profile.tsx"),
      route("tournaments", "./routes/dashboard/tournaments/_index.tsx"),
      route("challenges", "./routes/dashboard/challenges/_index.tsx"),
      route("submissions", "./routes/dashboard/submissions/_index.tsx"),
      route("leaderboard", "./routes/dashboard/leaderboard.tsx"),
      route("achievements", "./routes/dashboard/achievements.tsx"),
      route("settings", "./routes/dashboard/settings.tsx"),
    ]),
  ]),
  route("about", "./routes/about.tsx"),
] satisfies RouteConfig;
