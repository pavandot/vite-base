# React + Vite

This template offers a minimal setup to get React working with Vite, including Hot Module Replacement (HMR) and a basic ESLint and Prettier configuration.

## Getting Started

1. **Install Dependencies**: Run `npm install` or `yarn` to install the necessary packages.

2. **Start Development Server**: Use `npm run dev` or `yarn dev` to start the Vite development server with HMR.

3. **Lint Your Code**: Run `npm run lint` or `yarn lint` to check your code for linting issues based on the ESLint configuration.

4. **Format Your Code**: Run `npm run format` or `yarn format` to automatically format your code according to the specified code style.

5. **Preview Production Build**: Use `npm run preview` or `yarn preview` to preview the production build locally.

6. **Build for Production**: Run `npm run build` or `yarn build` to create an optimized production build.

## Environment Files

-   **`.env.local`**: Configuration for development environment variables.
-   **`.env.example`**: An example environment file showing required variables.
-   **`.env.production`**: Configuration for production environment variables.

## Accessing Environment Variables

In a Vite project, environment variables are accessible via the `import.meta.env` object. Here’s how you can use them:

### Example JavaScript Code

```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

## Changing Server Port in Vite

By default, Vite runs the development server on port 5173. To change the port, you can either modify the `vite.config.js` file or use environment variables.

### Modifying `vite.config.js`

To change the port by modifying the `vite.config.js` file, you can add or update the `server` configuration. Here's an example:

```js
// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
    server: {
        port: 3000, // Change this to your desired port
    },
})
```
