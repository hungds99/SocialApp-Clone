import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPostsFeedDiscovery } from '../../redux/actions/postAction'
import PostItem from '../postItem/postItem'

function PostList() {
    const dispatch = useDispatch()
    const postsData = useSelector((state) => state.posts.posts)

    useEffect(() => {
        dispatch(getPostsFeedDiscovery())
        return () => {}
    }, [dispatch])

    return (
        <div>
            {postsData.map((post) => (
                <PostItem />
            ))}
        </div>
    )
}

PostList.propTypes = {}

export default PostList
