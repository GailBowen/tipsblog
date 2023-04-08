import { useSelector } from 'react-redux';
import { selectAllPosts } from './postsSlice';

import PostAuthor  from './PostAuthor';
import TimeAgo from './TimeAgo';

import React from 'react'

import ReactionButtons from './ReactionButtons';

const PostsList = () => {
    const posts = useSelector(selectAllPosts)
   
    console.log('PostsList -> posts', posts);

    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

    const renderedPosts = orderedPosts.map(post => (
        <article className="post-excerpt" key={post.id}>
            <h3>{post.title}</h3>
            <p className="post-content">{post.content.substring(0, 100)}</p>
            <p className="postCredit">
                <PostAuthor userId={post.userId} />
            </p>
            <p>
                <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButtons post={post} />
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
