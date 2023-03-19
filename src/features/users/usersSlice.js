import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {id: '0', name: 'Hera'},
    {id: '1', name: 'Zeus'},
    {id: '2', name: 'Medea'}
];
    

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
});

export const selectAllUsers = state => state.users;

export default usersSlice.reducer;

