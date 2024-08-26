import { useParams } from 'react-router-dom'

import { useGetAuthor } from '@/features/authors/apis/getAuthor'
import ProfileCard from '@/features/authors/components/AuthDetailsCard'
import AuthorLoading from '@/features/authors/components/AuthorLoading'

const Author = () => {
    const params = useParams()
    const { data: author, status: authorStatus } = useGetAuthor(params.authorId)

    return (
        <section className='  max-w-5xl mx-auto p-10'>
            {authorStatus === 'pending' && <AuthorLoading />}
            {authorStatus === 'error' && <p>Error...</p>}
            {authorStatus === 'success' && <ProfileCard key={author.id} authorData={author} />}
        </section>
    )
}

export default Author
