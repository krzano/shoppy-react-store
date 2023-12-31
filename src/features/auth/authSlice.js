import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	currentUser: null,
	session: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		updateUser: (state, { payload }) => {
			state.currentUser = payload;
		},
		updateSession: (state, { payload }) => {
			state.session = payload;
		},
	},
});

export default authSlice.reducer;
export const { updateUser, updateSession } = authSlice.actions;
