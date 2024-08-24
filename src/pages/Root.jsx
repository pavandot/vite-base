import { Outlet } from 'react-router-dom'
const Root = () => {
    return (
        <section>
            {/* Header */}
            <div>
                <Outlet />
            </div>
            {/* Footer */}
        </section>
    )
}

export default Root
