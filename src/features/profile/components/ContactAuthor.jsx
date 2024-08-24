import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Mail, Phone } from 'lucide-react'

const ContactAuthor = ({ userData }) => {
    const { email, phone, name } = userData
    const onEmailSelect = () => {
        var mailtoLink = 'mailto:' + encodeURIComponent(email) + '?subject=' + encodeURIComponent(`Hello ${name}`)
        window.location.href = mailtoLink
    }
    const onePhoneSelect = () => {
        var mailtoLink = 'tel:' + phone
        window.location.href = mailtoLink
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className='w-full'>
                <Button className='w-full'>Contact Author</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-full'>
                <DropdownMenuItem onSelect={onEmailSelect}>
                    <Mail className='mr-2 h-4 w-4' />
                    <span>Via Email</span>
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={onePhoneSelect}>
                    <Phone className='mr-2 h-4 w-4' />
                    <span>Via Phone</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ContactAuthor
