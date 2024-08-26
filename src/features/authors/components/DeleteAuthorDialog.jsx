import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { useDispatch } from 'react-redux'
import { deleteAuthor } from '../slice/authorsSlice'
import { toast } from 'sonner'
import { useTranslation } from 'react-i18next'

const DeleteAuthorDialog = ({ userId }) => {
    const { t } = useTranslation('authors')
    const dispatch = useDispatch()
    const removeUser = () => {
        dispatch(deleteAuthor(userId))
        toast.success(t('author_removed'), {
            action: {
                label: 'Dismiss',
            },
        })
    }
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant='outline' className='w-full'>
                    {t('remove_author')}
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{t('are_you_sure')}</AlertDialogTitle>
                    <AlertDialogDescription>{t('action_text')}</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>{t('common:cancel')}</AlertDialogCancel>
                    <AlertDialogAction onClick={removeUser}>{t('common:continue')}</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default DeleteAuthorDialog
