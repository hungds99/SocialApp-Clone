import { LOAD_POST_FEED } from '../../constants'
import { getPostsFeedDiscoveryAPI } from '../../services'

export const getPostsFeedDiscovery = (limit, page) => (dispatch) => {
    getPostsFeedDiscoveryAPI((limit = 10), (page = 1))
        .then((res) => {
            dispatch({ type: LOAD_POST_FEED, payload: res.data.data })
        })
        .catch((error) => {
            console.log(error)
        })
}
