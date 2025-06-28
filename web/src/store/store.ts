import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice.ts';
import profileReducer from './slices/profileSlice.ts';

const store = configureStore({
    reducer: {
        auth: authReducer,
        profile: profileReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export default store;