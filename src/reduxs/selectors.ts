import {createSelector} from 'reselect';
import {RootState} from './store';
import {BasicProfile} from './features/profileSlice';

export const profileSelector = createSelector(
  (state: RootState) => state.profile,
  profile => {
    return {
      ...profile,
    };
  },
);

export const pictureSelector = createSelector(
  (state: RootState) => state.profile,
  profile => {
    return profile.picture;
  },
);

export const basicProfileSelector = createSelector(
  (state: RootState) => state.profile,
  profile => {
    const basicProfile: BasicProfile = {
      name: profile.name,
      email: profile.email,
      phone: profile.phone,
    };
    return basicProfile;
  },
);
