import {combineReducers} from '@reduxjs/toolkit';
import profileSlice from './features/profileSlice';

const rootReducer = combineReducers({
  profile: profileSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
