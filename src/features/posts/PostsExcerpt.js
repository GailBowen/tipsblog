import React from 'react';

import PostAuthor  from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';

const PostsExcerpt = ({ post }) => {
  return (
    <article key={post.id}>
    <h3>{post.title}</h3>
    <p className="post-content">{post.body.substring(0, 100)}</p>
    <p className="postCredit">
        <PostAuthor userId={post.userId} />
    </p>
    <p>
        <TimeAgo timestamp={post.date} />
    </p>
    <ReactionButtons post={post} />
    </article>
  )
}

export default PostsExcerpt
