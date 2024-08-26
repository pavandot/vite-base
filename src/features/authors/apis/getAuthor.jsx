import api from '@/lib/apiClient'
import { useQuery } from '@tanstack/react-query'

export const getAuthor = async (authorId) => {
    const res = await api.get('/users/' + authorId)
    return res.data
}
export const useGetAuthor = (authorId) => {
    return useQuery({ queryKey: ['author', authorId], queryFn: () => getAuthor(authorId) })
}
