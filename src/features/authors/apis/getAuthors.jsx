import api from '@/lib/apiClient'
import { useQuery } from '@tanstack/react-query'

export const getAuthors = async () => {
    const res = await api.get('/users')
    return res.data
}
export const useGetAuthors = () => {
    return useQuery({ queryKey: ['authors'], queryFn: getAuthors })
}
