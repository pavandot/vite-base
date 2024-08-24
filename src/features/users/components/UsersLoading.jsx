import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
const UsersLoading = () => {
    return (
        <section className=' flex flex-wrap gap-5'>
            {[1, 2, 3, 4].map((i) => {
                return (
                    <Card className=' max-w-md' key={i}>
                        <CardContent className='p-6'>
                            <div className='flex items-center space-x-4'>
                                <Skeleton className='h-12 w-12 rounded-full' />
                                <div className='space-y-2'>
                                    <Skeleton className='h-4 w-[150px]' />
                                    <Skeleton className='h-4 w-[100px]' />
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className='flex justify-between p-6'>
                            <Skeleton className='h-10 w-[120px]' />
                            <Skeleton className='h-10 w-[120px]' />
                        </CardFooter>
                    </Card>
                )
            })}
        </section>
    )
}

export default UsersLoading
