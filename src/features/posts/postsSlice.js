import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { id: '1', title: 'Do not eat lemon meringue', content: 'Lemon meringue not good for dress' },
    { id: '2', title: 'Remember when slim', content: 'You could get this back again' },
];

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {}
});

export const selectAllPosts = state => state.posts;

export default postsSlice.reducer;

