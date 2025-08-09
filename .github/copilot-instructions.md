# CadChallengesHub AI Coding Agent Instructions

This document provides essential guidance for AI coding agents working on the CadChallengesHub codebase.

## Project Overview

This is a monorepo for `CadChallengesHub`, managed by [Nx](https://nx.dev). The primary goal of this project is to provide a platform for CAD challenges and tournaments.

- `apps/web`: The main web application, built with React and Vite. This is where most of the user-facing features are implemented.
- `libs/ui`: A shared UI component library based on shadcn/ui. It provides a consistent look and feel across the application.

The entire codebase is written in TypeScript.

## Key Technologies

- **Framework**: React
- **Build Tool**: Vite
- **Monorepo Manager**: Nx
- **Styling**: Tailwind CSS
- **UI Components**: A custom component library in `libs/ui` that wraps `shadcn/ui` components.
- **Routing**: File-based routing is used in the `apps/web` application, managed by React Router v7.

## Development Workflow

- **Run the dev server**: To start the development server for the web app, use the following command:
  ```sh
  npx nx serve web
  ```
- **Build for production**: To create a production-ready build of the web app, use:
  ```sh
  npx nx build web
  ```
- **Run UI library tests**: To execute unit tests for the shared UI component library, run:
  ```sh
  nx test @cad-challenges-hub/ui
  ```

## Code Generation

Leverage Nx generators to scaffold new components and libraries, ensuring consistency with the project's structure.

- **New application**:
  ```sh
  npx nx g @nx/react:app <app-name>
  ```
- **New library**:
  ```sh
  npx nx g @nx/react:lib <lib-name>
  ```
- **New component**:
  ```sh
  npx nx g @nx/react:component <component-name> --project=<project-name>
  ```

## Conventions and Patterns

- **UI Components**: Before creating a new UI component, check `libs/ui/src/components/ui` to see if a suitable one already exists. The components in this library are the building blocks of the application's UI. Imports from the library should be done directly from the package, for example: `import { Button } from "@cad-challenges-hub/ui";`
- **Routing**: The `apps/web` application uses file-based routing. New pages should be added as files in the `apps/web/app/routes` directory. Layouts for specific routes are defined in `_layout.tsx` files within the route directories.
- **Styling**: Use Tailwind CSS for styling. Global styles are located in `libs/ui/src/styles/globals.css`.
- **State Management**: The project primarily uses React's built-in hooks for state management. For more complex state, consider using `useReducer` or `useContext`.

## Key Files and Directories

- `nx.json`: The main configuration file for the Nx workspace.
- `apps/web/app/routes`: Contains the route components for the web application.
- `libs/ui/src/components/ui`: The location of the shared UI components.
- `apps/web/vite.config.ts`: The Vite configuration for the web application.
- `libs/ui/vite.config.ts`: The Vite configuration for the UI library.
