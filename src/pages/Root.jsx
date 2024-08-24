import { Outlet } from 'react-router-dom'
import { Toaster } from '@/components/ui/sonner'

const Root = () => {
    return (
        <section className=' bg-background text-foreground'>
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
