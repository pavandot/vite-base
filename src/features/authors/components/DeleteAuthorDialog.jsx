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

const DeleteAuthorDialog = ({ userId }) => {
    const dispatch = useDispatch()
    const removeUser = () => {
        dispatch(deleteAuthor(userId))
        toast.success('Author as been removed', {
            action: {
                label: 'Dismiss',
            },
        })
    }
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant='outline' className='w-full'>
                    Remove Author
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your account and remove your data
                        from our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={removeUser}>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default DeleteAuthorDialog
