import { createSlice, nanoid } from '@reduxjs/toolkit';

import { sub } from 'date-fns';

const initialState = [
    { 
        id: '1',
        title:  'Do not eat lemon meringue', 
        content: 'Lemon meringue not good for dress', 
        userId: '0',
        date: sub(new Date(), { minutes: 10 }).toISOString(),
        reactions: {
            thumbsUp:0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
    },
    { 
        id: '2', 
        title: 'Never say this is my last nom of the day', 
        content: 'Just put off nomming as long as possible', 
        userId: '2',
        date: sub(new Date(), { minutes: 5}).toISOString() ,
        reactions: {
            thumbsUp:0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
    }
];

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        date: new Date().toISOString(),
                        userId,
                        reactions: { thumbsUp: 0, wow: 0, heart: 0, rocket: 0, coffee: 0 },
                    }
                }
            }           
        },
        reactionAdded(state, action) {
            const { postId, reaction } = action.payload;
            const existingPost = state.find(post => post.id === postId);
            if (existingPost) {
                existingPost.reactions[reaction]++;
            }
        }
    }
});

export const { postAdded, reactionAdded } = postsSlice.actions;

export const selectAllPosts = state => state.posts;

export default postsSlice.reducer;

