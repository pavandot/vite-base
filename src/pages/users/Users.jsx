import { useGetUsers } from '@/features/users/apis/getUsers'
import UserCard from '@/features/users/components/UserCard'
import UsersLoading from '@/features/users/components/UsersLoading'
import { addUsers } from '@/features/users/slice/usersSlice'
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
            <div className=' flex flex-wrap gap-5'>
                {users?.length > 0 &&
                    users?.map((user) => {
                        return <UserCard key={user.id} userData={user} />
                    })}
            </div>
        </section>
    )
}

export default Users
