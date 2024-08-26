import { useParams } from 'react-router-dom'

import { useGetAuthor } from '@/features/authors/apis/getAuthor'
import ProfileCard from '@/features/authors/components/AuthDetailsCard'
import AuthorLoading from '@/features/authors/components/AuthorLoading'
import { useTranslation } from 'react-i18next'

const Author = () => {
    const { t } = useTranslation()
    const params = useParams()
    const { data: author, status: authorStatus } = useGetAuthor(params.authorId)

    return (
        <section className='  max-w-5xl mx-auto p-10'>
            {authorStatus === 'pending' && <AuthorLoading />}
            {authorStatus === 'error' && <p> {t('common:error')}...</p>}
            {authorStatus === 'success' && <ProfileCard key={author.id} authorData={author} />}
        </section>
    )
}

export default Author
