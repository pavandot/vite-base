import { useGetUserProfile } from '@/features/profile/apis/getUserProfile'
import ProfileCard from '@/features/profile/components/ProfileCard'
import ProfileLoading from '@/features/profile/components/ProfileLoading'
import { useParams } from 'react-router-dom'

const Profile = () => {
    const params = useParams()
    const { data: user, status: userStatus } = useGetUserProfile(params.userId)
    console.log(user)

    return (
        <section className='  max-w-5xl mx-auto p-10'>
            {userStatus === 'pending' && <ProfileLoading />}
            {userStatus === 'error' && <p>Error...</p>}
            {userStatus === 'success' && <ProfileCard key={user.id} userData={user} />}
        </section>
    )
}

export default Profile
