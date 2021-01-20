import axios from 'axios'
import { tokenConfig } from './tokenConfig'

export const getPostsFeedDiscoveryAPI = (limit, page) => {
    return axios.get(
        `https://api.gapo.vn/edge/v1.0/feed/discovery?limit=${limit}&page=${page}`,
        {
            headers: { Authorization: `Bearer ${tokenConfig}` }
        }
    )
}
