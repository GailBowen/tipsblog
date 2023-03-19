import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { id: '1', title: 'Do not eat lemon meringue', content: 'Lemon meringue not good for dress' },
    { id: '2', title: 'Remember when slim', content: 'You could get this back again' },
    { id: '3', title: 'Never say this is my last nom of the day', content: 'Just put off nomming as long as possible' },
];

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded(state, action) {
            state.push(action.payload);
        }
    }
});

export const { postAdded } = postsSlice.actions;

export const selectAllPosts = state => state.posts;

export default postsSlice.reducer;

