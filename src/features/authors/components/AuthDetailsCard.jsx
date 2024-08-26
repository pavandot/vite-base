import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Mail, Phone, Globe, MapPin, Building2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import ContactAuthor from './ContactAuthor'

const AuthDetailsCard = ({ authorData }) => {
    console.log(authorData)

    return (
        <Card className='w-full '>
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
                    <CardTitle className='text-2xl'>{authorData.name}</CardTitle>
                    <p className='text-sm text-muted-foreground'>@{authorData.username}</p>
                    <Badge variant='outline' className='mt-2'>
                        {authorData.company.name}
                    </Badge>
                </div>
            </CardHeader>
            <CardContent className='grid gap-4'>
                <Separator />
                <div className='grid gap-2'>
                    <div className='flex items-center gap-2'>
                        <Mail className='h-4 w-4 text-muted-foreground' />
                        <p>{authorData.email}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Phone className='h-4 w-4 text-muted-foreground' />
                        <p>{authorData.phone}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Globe className='h-4 w-4 text-muted-foreground' />
                        <p>{authorData.website}</p>
                    </div>
                </div>
                <Separator />
                <div>
                    <h3 className='font-semibold mb-2'>Address</h3>
                    <div className='grid gap-1'>
                        <p>
                            {authorData.address.street}, {authorData.address.suite}
                        </p>
                        <p>
                            {authorData.address.city}, {authorData.address.zipcode}
                        </p>
                        <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                            <MapPin className='h-3 w-3' />
                            <p>
                                Lat: {authorData.address.geo.lat}, Lng: {authorData.address.geo.lng}
                            </p>
                        </div>
                    </div>
                </div>
                <Separator />
                <div>
                    <h3 className='font-semibold mb-2'>Company</h3>
                    <div className='grid gap-1'>
                        <div className='flex items-center gap-2'>
                            <Building2 className='h-4 w-4 text-muted-foreground' />
                            <p>{authorData.company.name}</p>
                        </div>
                        <p className='text-sm text-muted-foreground'>{authorData.company.catchPhrase}</p>
                        <p className='text-sm text-muted-foreground'>{authorData.company.bs}</p>
                    </div>
                </div>
            </CardContent>
            <CardFooter className='space-x-5'>
                <ContactAuthor authorData={authorData} />
                <Button variant='secondary' asChild className=' w-full'>
                    <Link to={`/`}>Go Back</Link>
                </Button>
            </CardFooter>
        </Card>
    )
}

export default AuthDetailsCard
