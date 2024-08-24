import { useGetUsers } from '@/features/users/apis/getUsers'
import UserCard from '@/features/users/components/UserCard'
import UsersLoading from '@/features/users/components/UsersLoading'
import { addUsers } from '@/features/users/slice/usersSlice'
import { PackageOpen } from 'lucide-react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
const Users = () => {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.users)
    const { data: usersData, status: userStatus } = useGetUsers()
    useEffect(() => {
        if (userStatus === 'success') dispatch(addUsers(usersData))
    }, [dispatch, userStatus, usersData])
    return (
        <section className='  max-w-5xl mx-auto p-10'>
            {userStatus === 'pending' && <UsersLoading />}
            {userStatus === 'error' && <p>Error...</p>}
            {users?.length > 0 ? (
                <div className=' flex flex-wrap gap-5'>
                    {users?.map((user) => {
                        return <UserCard key={user.id} userData={user} />
                    })}
                </div>
            ) : (
                <div className=' flex items-center h-screen justify-center'>
                    <div>
                        <PackageOpen className=' h-20  w-20' />

                        <p className=' text-center'>Empty</p>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Users
