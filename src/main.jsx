import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { queryConfig } from '@/lib/reactQuery'
import { Provider } from 'react-redux'

import { store } from './store'
import routes from './routes'

import FullPageSpinner from './components/FullPageSpinner'
import './lib/i18n'
import './index.css'

const queryClient = new QueryClient({ defaultOptions: queryConfig })

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <React.Suspense fallback={<FullPageSpinner />}>
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <RouterProvider router={routes} />
                </QueryClientProvider>
            </Provider>
        </React.Suspense>
    </StrictMode>
)
