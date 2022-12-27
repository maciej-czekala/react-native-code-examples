import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: "userToken",
  initialState: {
    value: ""
  },
  reducers: {
    setToken: (state, action) => {
      state.value = action.payload;
    }
  }
}) 

export const { setToken } = userSlice.actions;
export default userSlice.reducer;