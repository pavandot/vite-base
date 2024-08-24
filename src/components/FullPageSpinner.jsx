import { Loader2 } from 'lucide-react'

const FullPageSpinner = () => {
    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <Loader2 className=' h-20 w-20 animate-spin' />
        </div>
    )
}

export default FullPageSpinner
