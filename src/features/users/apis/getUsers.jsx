import api from '@/lib/apiClient'
import { useQuery } from '@tanstack/react-query'

export const getUsers = async () => {
    const res = await api.get('/users')
    return res.data
}
export const useGetUsers = () => {
    return useQuery({ queryKey: ['users'], queryFn: getUsers })
}
