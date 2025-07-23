import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  layout("./routes/_layout.tsx", [index("./routes/_index.tsx")]),
  route("about", "./routes/about.tsx"),
] satisfies RouteConfig;
