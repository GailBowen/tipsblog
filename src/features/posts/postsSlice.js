import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
    { id: '1', title: 'Do not eat lemon meringue', content: 'Lemon meringue not good for dress', userId: '0' },
    { id: '2', title: 'Remember when slim', content: 'You could get this back again', userId: '1' },
    { id: '3', title: 'Never say this is my last nom of the day', content: 'Just put off nomming as long as possible', userId: '2' },
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

