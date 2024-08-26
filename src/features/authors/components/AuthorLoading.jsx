import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
const AuthorLoading = () => {
    return (
        <Card className='w-full  mx-auto'>
            <CardHeader className='pb-2'>
                <div className='flex items-center space-x-4'>
                    <Skeleton className='h-12 w-12 rounded-full' />
                    <div className='space-y-2 flex-1'>
                        <Skeleton className='h-5 w-3/4' />
                        <Skeleton className='h-4 w-1/2' />
                    </div>
                </div>
            </CardHeader>
            <CardContent className='space-y-6 pt-5'>
                <div className='space-y-2'>
                    <Skeleton className='h-4 w-20' />
                    {[...Array(3)].map((_, i) => (
                        <Skeleton key={i} className='h-4 w-full' />
                    ))}
                </div>
                <div className='space-y-2'>
                    <Skeleton className='h-4 w-20' />
                    <div className='flex items-center space-x-2'>
                        <Skeleton className='h-4 w-4' />
                        <Skeleton className='h-4 flex-1' />
                    </div>
                    {[...Array(2)].map((_, i) => (
                        <Skeleton key={i} className='h-4 w-3/4' />
                    ))}
                </div>
            </CardContent>
            <CardFooter className='flex justify-between gap-x-5'>
                <Skeleton className='h-10 w-1/2' />
                <Skeleton className='h-10 w-1/2' />
            </CardFooter>
        </Card>
    )
}

export default AuthorLoading
