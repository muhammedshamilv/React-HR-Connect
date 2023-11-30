import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  name: '',
};

const userSlice = createSlice({
  name: 'name',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.name = action.payload.name;
    },
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
export const selectName = (state) => {
  return { name: state?.name.name };
};
