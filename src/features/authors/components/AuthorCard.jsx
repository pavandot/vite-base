import { Link } from 'react-router-dom'

import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import DeleteAuthorDialog from './DeleteAuthorDialog'

const AuthorCard = ({ authorData }) => {
    return (
        <Card className='w-full max-w-md'>
            <CardHeader className='flex flex-row items-center gap-4'>
                <Avatar className='h-20 w-20'>
                    <AvatarFallback className='text-4xl'>
                        {authorData.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                    </AvatarFallback>
                </Avatar>
                <div>
                    <CardTitle className='text-2xl text-foreground'>{authorData.name}</CardTitle>
                    <p className='text-sm text-muted-foreground'>@{authorData.username}</p>
                    <Badge variant='outline' className='mt-2'>
                        {authorData.company.name}
                    </Badge>
                </div>
            </CardHeader>

            <CardFooter className='space-x-5'>
                <Button asChild className='w-full'>
                    <Link to={`/author/${authorData?.id}`}>View Profile</Link>
                </Button>
                <DeleteAuthorDialog authorId={authorData?.id} />
            </CardFooter>
        </Card>
    )
}

export default AuthorCard
