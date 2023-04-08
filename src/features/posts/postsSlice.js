import { createSlice, nanoid } from '@reduxjs/toolkit';

import { sub } from 'date-fns';

const initialState = [
    { 
        id: '1',
        title:  'Do not eat lemon meringue', 
        content: 'Lemon meringue not good for dress', 
        userId: '0',
        date: sub(new Date(), { minutes: 10 }).toISOString()},
    { 
        id: '2', 
        title: 'Never say this is my last nom of the day', 
        content: 'Just put off nomming as long as possible', 
        userId: '2',
        date: sub(new Date(), { minutes: 5}).toISOString() },
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
                        userId
                    }
                }
            }           
        }
    }
});

export const { postAdded } = postsSlice.actions;

export const selectAllPosts = state => state.posts;

export default postsSlice.reducer;

