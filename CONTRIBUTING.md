# Contributing to CAD Challenges Hub

Thank you for considering contributing to CAD Challenges Hub! This document outlines the process for contributing to this project.

## Code of Conduct

By participating in this project, you are expected to uphold our Code of Conduct, which is to treat all contributors with respect and create a welcoming environment.

## How Can I Contribute?

### Reporting Bugs

- Check if the bug has already been reported in the Issues section
- Use the bug report template when creating a new issue
- Include detailed steps to reproduce the bug
- Include screenshots if applicable
- Specify your environment details (OS, browser, etc.)

### Suggesting Features

- Check if the feature has already been suggested in the Issues section
- Use the feature request template when creating a new issue
- Explain why this feature would be useful to most users
- Consider how the feature would work with the existing architecture

### Pull Requests

1. Fork the repository
2. Create a new branch from `main`
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes
4. Run tests to ensure your changes don't break existing functionality
   ```bash
   pnpm nx affected:test
   ```
5. Commit your changes following the [Conventional Commits](https://www.conventionalcommits.org/) specification
   ```bash
   git commit -m "feat: add new component for challenge card"
   ```
6. Push to your branch
   ```bash
   git push origin feature/your-feature-name
   ```
7. Open a pull request with a clear description of the changes

## Development Workflow

### Setting Up the Development Environment

1. Clone the repository

   ```bash
   git clone https://github.com/Dexengstudio/cad-hub.git
   cd cad-hub
   ```

2. Install dependencies

   ```bash
   pnpm install
   ```

3. Start the development server
   ```bash
   pnpm nx serve web
   ```

### Understanding the Nx Workspace

This project uses [Nx](https://nx.dev) for managing the monorepo structure. Here's a quick overview of Nx commands:

- **Running a specific project**:

  ```bash
  pnpm nx dev or serve <project-name>
  ```

- **Building a project**:

  ```bash
  pnpm nx build <project-name>
  ```

- **Running tests**:

  ```bash
  pnpm nx test <project-name>
  ```

- **Running affected commands** (only on projects affected by changes):

  ```bash
  pnpm nx affected:test
  pnpm nx affected:build
  pnpm nx affected:lint
  ```

- **Visualizing the project graph**:
  ```bash
  pnpm nx graph
  ```

### Code Generation

Nx provides generators to help you create new components, libraries, and more:

- **Creating a new component**:

  ```bash
  pnpm nx g @nx/react:component MyComponent --project=web
  ```

- **Creating a new library**:
  ```bash
  pnpm nx g @nx/react:lib my-lib
  ```

### Coding Standards

- Write clean, readable, and self-documenting code
- Follow the existing code style and patterns
- Include proper JSDoc comments for functions and components
- Use TypeScript's type system effectively
- Write unit tests for new functionality

### Commit Messages

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for changes that don't affect the meaning of code
- `refactor:` for code changes that neither fix a bug nor add a feature
- `perf:` for performance improvements
- `test:` for adding or fixing tests
- `build:` for changes to the build system
- `ci:` for changes to CI configuration
- `chore:` for other changes that don't modify src or test files

### Pull Request Review Process

1. At least one maintainer must approve the pull request
2. All status checks must pass
3. The code must follow the project's coding standards
4. The pull request should include tests if applicable

## Project Structure

```
cad-challenges-hub/
├── apps/
│   └── web/               # Main web application
│       ├── app/           # Application code
│       │   ├── components/
│       │   ├── hooks/
│       │   ├── lib/
│       │   ├── routes/    # Application routes
│       │   └── store/     # State management
│       └── public/        # Static assets
├── libs/
│   └── ui/                # Shared UI component library
│       └── src/
│           ├── components/
│           │   └── ui/    # Base UI components
│           ├── hooks/
│           └── styles/    # Global styles
```

## Questions?

If you have any questions about contributing, feel free to open an issue with the tag "question".

Thank you for contributing to CAD Challenges Hub!
