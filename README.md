# Food Order App Frontend

This is the frontend service for a food ordering application, built with React, TypeScript, and Vite. It includes various UI components and uses Tailwind CSS for styling, as well as Auth0 for authentication.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (>= 14.x)
- npm (>= 6.x)

### Installation

1. Clone the repository:
  
2. Install the dependencies:
    ```sh
    npm install
    ```

### Configuration

1. Create a `.env` file in the root directory and add your environment variables. For example:
    ```env
    VITE_AUTH0_DOMAIN=your_auth0_domain
    VITE_AUTH0_CLIENT_ID=your_auth0_client_id
    ```

### Scripts

Here’s a breakdown of the scripts defined in the `package.json` file:

- **dev**: Starts the development server using Vite.
    ```sh
    npm run dev
    ```

- **build**: Compiles the TypeScript files and builds the project using Vite.
    ```sh
    npm run build
    ```

- **lint**: Runs ESLint to lint the codebase.
    ```sh
    npm run lint
    ```

- **preview**: Previews the production build locally using Vite.
    ```sh
    npm run preview
    ```

### Running the Project

1. Start the development server:
    ```sh
    npm run dev
    ```

2. The server should be running at `http://localhost:3000`.

### Dependencies

- **react**: JavaScript library for building user interfaces.
- **react-dom**: Entry point of the DOM-related rendering paths.
- **react-router-dom**: Declarative routing for React.
- **@auth0/auth0-react**: Auth0 integration for React.
- **@hookform/resolvers**: Validation resolvers for React Hook Form.
- **tailwindcss**: Utility-first CSS framework.
- **zod**: TypeScript-first schema declaration and validation library.

### Dev Dependencies

- **vite**: Next generation frontend tooling.
- **typescript**: TypeScript language support.
- **eslint**: Pluggable JavaScript linter.
- **tailwindcss**: Tailwind CSS framework.
- **@vitejs/plugin-react**: Vite plugin for React.
- **autoprefixer**: PostCSS plugin to parse CSS and add vendor prefixes.
- **postcss**: Tool for transforming CSS with JavaScript.
- **@typescript-eslint/eslint-plugin**: TypeScript plugin for ESLint.
- **@typescript-eslint/parser**: Parser for TypeScript.
- **@types/node**: Type definitions for Node.js.
- **@types/react**: Type definitions for React.
- **@types/react-dom**: Type definitions for React DOM.

