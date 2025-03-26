import axios from '@/services/axios'
import API from '@/services/endpoints'
import { useActionDispatch } from './useActionDispatch'

export const useDashbaordHooks = () => {

    const { setDashboardData } = useActionDispatch()

    const fetchDashboardData = async () => {

        try {

            const { data } = await axios.get(API.dashboard())
            setDashboardData(data)

        } catch (err) {
            console.log(err)
        }
    }

    return { fetchDashboardData }
}