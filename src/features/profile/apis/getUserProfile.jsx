import api from '@/lib/apiClient'
import { useQuery } from '@tanstack/react-query'

export const getUserProfile = async (userId) => {
    const res = await api.get('/users/' + userId)
    return res.data
}
export const useGetUserProfile = (userId) => {
    return useQuery({ queryKey: ['users', userId], queryFn: () => getUserProfile(userId) })
}
