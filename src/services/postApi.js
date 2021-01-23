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

export const uploadMediaImage = (file) => {
    return axios.post('https://upload.gapo.vn/media/v1.0/images', file, {
        headers: {
            Authorization: `Bearer ${tokenConfig}`,
            Contentype: 'multipart/form-data'
        }
    })
}

export const createPost = (post) => {
    return axios.post('https://api.gapo.vn/main/v1.4/post/create', post, {
        headers: {
            Authorization: `Bearer ${tokenConfig}`,
            Contentype: 'multipart/form-data'
        }
    })
}
