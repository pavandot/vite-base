import { Outlet } from 'react-router-dom'
import { Toaster } from '@/components/ui/sonner'

const Root = () => {
    return (
        <section>
            {/* Header */}
            <div>
                <Outlet />
            </div>
            {/* Footer */}
            <Toaster />
        </section>
    )
}

export default Root
