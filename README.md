# React + Vite

This template offers a minimal setup to get React working with Vite, including Hot Module Replacement (HMR) and a basic ESLint and Prettier configuration.

## Getting Started

1. **Install Dependencies**: Run `npm install` or `yarn` to install the necessary packages.

2. **Start Development Server**: Use `npm run dev` or `yarn dev` to start the Vite development server with HMR.

3. **Lint Your Code**: Run `npm run lint` or `yarn lint` to check your code for linting issues based on the ESLint configuration.

4. **Format Your Code**: Run `npm run format` or `yarn format` to automatically format your code according to the specified code style.

5. **Preview Production Build**: Use `npm run preview` or `yarn preview` to preview the production build locally.

6. **Build for Production**: Run `npm run build` or `yarn build` to create an optimized production build.

## Project Structure

Most of the code lives in the `src` folder and looks something like this:

```sh
src
|
+-- pages             # application layer containing:
|   |
    +-- page          # application  pages
    +-- Root.tsx      # main application component
+-- assets            # assets folder can contain all the static files such as images, fonts, etc.
|
+-- components        # shared components used across the entire application
|
+-- features          # feature based modules
|
+-- hooks             # shared hooks used across the entire application
|
+-- lib               # reusable libraries preconfigured for the application
|
+-- utils             # shared utility functions
|
+-- routes.jsx        # application routes
|
+-- store.js          # redux store
```

For easy scalability and maintenance, organize most of the code within the features folder. Each feature folder should contain code specific to that feature, keeping things neatly separated. This approach helps prevent mixing feature-related code with shared components, making it simpler to manage and maintain the codebase compared to having many files in a flat folder structure. By adopting this method, you can enhance collaboration, readability, and scalability in the application's architecture.

A feature could have the following structure:

```sh
src/features/awesome-feature
|
+-- api         # exported API request declarations and api hooks related to a specific feature
|
+-- assets      # assets folder can contain all the static files for a specific feature
|
+-- components  # components scoped to a specific feature
|
+-- hooks       # hooks scoped to a specific feature
|
+-- Slice       # state stores for a specific feature
|
+-- utils       # utility functions for a specific feature
```

NOTE: You don't need all of these folders for every feature. Only include the ones that are necessary for the feature.

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

### Folder Structure

-   **`@Components/ui`**: Contains all Shadcn components. Each component is organized in this directory to ensure modularity and ease of access.
-   **`@lib/utils`**: Includes utility functions required by Shadcn components. These utilities support the functionality and enhance the performance of the components.

### How to Add a New Component

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

# Axios

Axios is a JavaScript library for making HTTP requests. It uses Promises and supports JSON transformation.

### Configuration

Using Axios interceptors, we can intercept all requests and responses. For example, we can add a token to every request and check token validity in every response.

File: `src/lib/apiClient.js`

```js
import Axios from 'axios'
import { getAccessToken } from '../../util/util'
import { makeHttpRequestForRefreshToken } from '../../util/unAuthorizedControl'

const baseURL = import.meta.env.VITE_BASE_URL
const api = Axios.create({ baseURL })

api.interceptors.request.use(
    (config) => {
        const token = getAccessToken()
        config.headers.Accept = 'application/json'
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => Promise.reject(error)
)

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error?.response?.status === 401) {
            makeHttpRequestForRefreshToken()
        }
        return Promise.reject(error)
    }
)

export default api
```

# React Router

React Router is a JavaScript library that enables client-side routing in React applications, allowing for dynamic navigation within the app without a full page reload.

### Adding Routes

#### Route Object

A route object defines how a specific URL path should be handled by React Router. Below is the structure of a route object:

```js
{
    // The component to be rendered when the URL matches this path
    element: <Team />,

    // The path segment that triggers this route; ":teamId" denotes a dynamic route parameter
    path: "teams/:teamId",

    // The component to be rendered in case of an error
    errorElement: <ErrorBoundary />,

    // An array of nested routes (child routes)
    children: []
}
```

#### Example :

```js
import { createBrowserRouter } from 'react-router-dom'
const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Users />,
            },
            {
                path: '/profile/:userId',
                element: <Profile />,
            },
        ],
    },
])

export default routes
```

### Navigating

We can use Link Component provided by react router for page navigation

```html
<Link to="/profile/1">View Profile</Link>
```

# React Query

React Query is data-fetching library for React, it makes fetching, caching, synchronizing and updating server state in your React applications.

[Documentation](https://tanstack.com/query/latest/docs/framework/react/quick-start)

# Redux (redux toolkit)

Redux is an open-source JavaScript library for managing and centralizing application state.

[Documentation](https://redux-toolkit.js.org/tutorials/quick-start)

# Husky

Husky is a tool that helps you manage Git hooks in your projects, allowing you to automatically run scripts before committing, pushing, or performing other Git actions. This is useful for enforcing code quality standards, running tests, or formatting code before it is committed to your repository.

[Documentation](https://typicode.github.io/husky/get-started.html)
