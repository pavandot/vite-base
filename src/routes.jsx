import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '@/pages/ErrorPage'
import Root from '@/pages/Root'
import Users from '@/pages/users/Users'
import Profile from '@/pages/profile/Profile'

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
