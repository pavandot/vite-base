import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '@pages/ErrorPage'
import Root from '@pages/Root'
import Dashboard from '@pages/dashboard/Dashboard'

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
        ],
    },
])

export default routes
