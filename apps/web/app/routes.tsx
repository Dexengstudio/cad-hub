import {
  type RouteConfig,
  index,
  route,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [
  layout("./routes/_layout.tsx", [index("./routes/_index.tsx")]),

  ...prefix("/auth", [
    layout("./routes/auth/_layout.tsx", [
      route("sign-in", "./routes/auth/sign-in-form.tsx"),
      route("sign-up", "./routes/auth/sign-up-form.tsx"),
    ]),
  ]),
  route("about", "./routes/about.tsx"),
] satisfies RouteConfig;
