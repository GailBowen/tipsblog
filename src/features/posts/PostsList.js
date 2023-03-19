import { useSelector } from 'react-redux';
import { selectAllPosts } from './postsSlice';
import { selectAllUsers } from '../users/usersSlice';

import React from 'react'

const PostsList = () => {
    const posts = useSelector(selectAllPosts)
    const users = useSelector(selectAllUsers)
   
    console.log('PostsList -> posts', posts);
    const renderedPosts = posts.map(post => (
        <article className="post-excerpt" key={post.id}>
            <h3>{post.title}</h3>
            <span>{users[post.userId].name}</span>
            <p className="post-content">{post.content.substring(0, 100)}</p>
        </article>
    ))

    return (
        <section>
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )
}

export default PostsList
