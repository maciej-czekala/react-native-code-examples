import { configureStore } from '@reduxjs/toolkit';

import userTokenReducers from "./UserToken"

const store = configureStore({
  reducer: {
    userToken: userTokenReducers
  }
})

export default store