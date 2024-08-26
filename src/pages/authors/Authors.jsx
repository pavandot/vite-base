import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PackageOpen } from 'lucide-react'

import { useGetAuthors } from '@/features/authors/apis/getAuthors'
import { addAuthors } from '@/features/authors/slice/authorsSlice'

import AuthorCard from '@/features/authors/components/AuthorCard'
import AuthorsLoading from '@/features/authors/components/AuthorsLoading'
import { useTranslation } from 'react-i18next'

const Authors = () => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const authors = useSelector((state) => state.authors)
    const { data: authorsData, status: authorsStatus } = useGetAuthors()

    useEffect(() => {
        if (authorsStatus === 'success') dispatch(addAuthors(authorsData))
    }, [authorsData, authorsStatus, dispatch])

    return (
        <section className='  max-w-5xl mx-auto p-10'>
            {authorsStatus === 'pending' && <AuthorsLoading />}
            {authorsStatus === 'error' && <p>{t('common:error')}...</p>}
            {authorsStatus === 'success' && (
                <>
                    {authors?.length > 0 ? (
                        <div className=' flex flex-wrap gap-5'>
                            {authors?.map((author) => {
                                return <AuthorCard key={author.id} authorData={author} />
                            })}
                        </div>
                    ) : (
                        <div className=' flex items-center h-screen justify-center'>
                            <div>
                                <PackageOpen className=' h-20  w-20' />

                                <p className=' text-center'>{t('authors:empty')}</p>
                            </div>
                        </div>
                    )}
                </>
            )}
        </section>
    )
}

export default Authors
