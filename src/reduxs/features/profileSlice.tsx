import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export type BasicProfile = {
  name: string;
  email: string;
  phone: string;
};

export type TProfile = BasicProfile & {
  picture: string;
};

export const initialState: TProfile = {
  picture: '',
  name: 'Ahmad Robi',
  email: 'obinote@gmail.com',
  phone: '081231183113',
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    resetProfile: state => {
      return {
        ...state,
        ...initialState,
      };
    },
    setPicture: (state, {payload}: PayloadAction<string>) => {
      return {
        ...state,
        picture: payload,
      };
    },
    setProfile: (state, {payload}: PayloadAction<BasicProfile>) => {
      return {
        ...state,
        ...payload,
      };
    },
  },
});

export const {resetProfile, setPicture, setProfile} = profileSlice.actions;
export default profileSlice;
