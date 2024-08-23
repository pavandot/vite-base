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

## Configure Aliases

### vite.config.js

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            // Add more aliases here
        },
    },
})
```

### jsconfig.json

To enable editor support for aliases (e.g., for VS Code), create or update the jsconfig.json file in the root of your project:

```js
{
    "compilerOptions": {
        "baseUrl": ".",
        "paths": {
            "@": ["src/*"],
            "@assets/*": ["src/assets/*"],
            "@components/*": ["src/components/*"],
            "@hooks/*": ["src/hooks/*"],
            // Add more aliases here
        }
    },
    "include": ["src/**/*"]
}
```

### Use Aliases in Your Code

You can now use the defined aliases in your imports. For example:

```js
import MyComponent from '@components/MyComponent'
import { someUtilityFunction } from '@utils/someUtility'
```

# Shadcn UI Library

Shadcn is a Tailwind UI library designed to streamline the creation of modern, responsive web interfaces. It provides a set of customizable components that are easy to integrate into your projects.

## Folder Structure

-   **`@Components/ui`**: Contains all Shadcn components. Each component is organized in this directory to ensure modularity and ease of access.
-   **`@lib/utils`**: Includes utility functions required by Shadcn components. These utilities support the functionality and enhance the performance of the components.

## How to Add a New Component

To add a new component to the Shadcn UI library, follow these steps:

1. **Explore Available Components**:

    - Before adding a new component, explore the available components to ensure you’re not duplicating existing functionality. Visit the Shadcn UI documentation at [https://ui.shadcn.com/docs](https://ui.shadcn.com/docs) to review the current components and their usage.

2. **Add a New Component**:

    - Open your terminal.
    - Run the following command to add a new component:

        ```bash
        npx shadcn-ui@latest add <component-name>
        ```

        Replace `<component-name>` with the name of the component you wish to add, such as `button`.

    - After running the command, the new component will be added to the `@Components/ui` directory, and you can begin using it in your project.
