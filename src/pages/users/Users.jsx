import { useGetUsers } from '@/features/users/apis/getUsers'
import UserCard from '@/features/users/components/UserCard'
import UsersLoading from '@/features/users/components/UsersLoading'

const Users = () => {
    const { data: users, status: userStatus } = useGetUsers()
    console.log(users)

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
