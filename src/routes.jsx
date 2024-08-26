import { createBrowserRouter } from 'react-router-dom'

import ErrorPage from '@/pages/ErrorPage'
import Root from '@/pages/Root'
import Authors from '@/pages/authors/Authors'
import Author from '@/pages/author/Author'

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Authors />,
            },
            {
                path: '/author/:authorId',
                element: <Author />,
            },
        ],
    },
])

export default routes
