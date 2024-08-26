import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Mail, Phone } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const ContactAuthor = ({ authorData }) => {
    const { t } = useTranslation('authors')
    const { email, phone, name } = authorData
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
            <DropdownMenuTrigger className='w-full' asChild>
                <Button className='w-full'>{t('contact_author')}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-full'>
                <DropdownMenuItem onSelect={onEmailSelect}>
                    <Mail className='mr-2 h-4 w-4' />
                    <span>{t('via_email')}</span>
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={onePhoneSelect}>
                    <Phone className='mr-2 h-4 w-4' />
                    <span>{t('via_phone')}</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ContactAuthor
