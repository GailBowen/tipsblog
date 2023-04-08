import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit';
import { sub } from 'date-fns';
import axios from 'axios';

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

const initialState = {
    posts: [],
    status: 'idle', // idle, loading, succeeded, failed
    error: null
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
     try {
        const response = await axios.get(POSTS_URL);
        return [ response.data ];   
    } catch (err) {
        return err.message;
    }   
});

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                console.log('action.payload in postAdded', action.payload);
                state.posts.push(action.payload);
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        body: content,
                        date: new Date().toISOString(),
                        userId: Number(userId),
                        reactions: { thumbsUp: 0, wow: 0, heart: 0, rocket: 0, coffee: 0 },
                    }
                }
            }           
        },
        reactionAdded(state, action) {
            const { postId, reaction } = action.payload;
            const existingPost = state.posts.find(post => post.id === postId);
            if (existingPost) {
                existingPost.reactions[reaction]++;
            }
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchPosts.pending, (state, action) => {             
                state.status = 'loading';
                console.log('loading...');
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                
                let min = 1;

                console.log('action.payload', action.payload);

                const loadedPosts = action.payload[0].map(post => {
                    post.date = sub(new Date() , { minutes: min++ }).toISOString();
                    post.reactions = { thumbsUp: 0, wow: 0, heart: 0, rocket: 0, coffee: 0 };
                    return post;
                });

                console.log('loadedPosts', loadedPosts);

                state.posts = loadedPosts;

                console.log('state.posts', state.posts);
            })
            .addCase(fetchPosts.rejected, (state, action) => {              
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
});

export const { postAdded, reactionAdded } = postsSlice.actions;

export const selectAllPosts = state => state.posts.posts;
export const getPostsStatus = state => state.posts.status;
export const getPostsError = state => state.posts.error;



export default postsSlice.reducer;

