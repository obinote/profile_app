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
  picture:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKUAAACUCAMAAADF0xngAAAAMFBMVEXk5ueutLe9wsSrsbTn6erd4OGzuLvh4+SnrrHX2tvT1tjAxcfa3d7r7e65vsHIzM6jv5CEAAAD0klEQVR4nO2b2XbjIAxAWQQYsOH//7ZAmnbcOAmbhTOH+9LOmT7cIyFWmZDJZDKZTCaTyWQymUwmHw0AESaiRfj1ioDSntHlB2nNqq6lCpvwjnJO/yH8y/lLeWpHj+FMXMQTNFv4E8sQUXsFT9gsfeqYPKkfrgmrfOmYPN3gcIJ/p3gLp76+ZMQMjKZ9m+07yzBNyJcMWR+kCb5AcpRmoWRIusbXBFUoSblU6JZEFkoGTYvtWJzvpIk9NEW5Y9TEtdzer4uHlhZTE/RSFUsqV0xLVidJuUeUNFX5TiDORiVL499goo1MVR3JwIZlaSprJwUTa6u5ufphSSnWZAQtktQhSeomS6QpM/8YcQjSYl49pX9b4kzs6tlFRqYlzv5NlO8sd+CUj26TpPQjLDmGJJhWS4wNR8uGKLFMyw+zbK4elI3wZ8xEa+OsLlEsReMKibR1+4h1vOja8sDS4Fi27S8p0gVh415doEiSrcmS4UiSjbVool0b1N5lRThSwknNPfCPpES72yA1F8E3MN991upY4iyPN8BWSmLeX4bTbu1dMF7tkOpVEvuRQtWUOZfILylVJ0mOefd/0yzPOeJt9S+v2zUOQNr+7imeNEdIlh55UR+kdpoFsyYf8Dp+18y3XMe1lwTNrKxzOVAyr+lpUJfBTvP9Lu4KLWQh6/JlEQ3O9h0IR99n8eRUGnIFSZLS7viBKOfMX8UxAspYuuwyzxfq9ZUcEwDCOCnTji78sEZdtYN5AyJWrVeRfr0kALD9AteKZLBRSqzGe+tcrJgIlY5Zb7QQ6Q9GG4ay8ZbJm9yfAk+2UXYlw/IPqbBlEnw1qcf/lcyPaA0OBa29e94A/ii7UGsE6sQEoJl8GcHjqIaQKqRrojDZWFp85vkWDYcfjB4YIIYVR3HHIs8eo7AdL9iFEZWWnJd4UM83P6Wi530F8mYjWabJT8k7tD7sPXhK33tVAmH7xfHOIvuefsOpodOA3MM7bpKB1F79vtfsdiiCtVdlH2kufZ4lX5y9+nj2eONtfMHN0ezQK3xCbT/SOjib2lbzaZuSzpmAHmm5N1RIkYxUawKiZHW7/fnV3UGz6gueFmqeMJobxYqpeg46d8U5ovztHHtQJkovtpsbVqsoXdKrnmw7aBbNmuj1faeo9wQwthhHLAV1PiyURQU0aFRG8nsmBoaS8vw2uKY+tlbN3C6ZdaBk9jo5MuGRvMloG1c7kcyUF3++3pmslDd/gdAKy7JsbE5uxuVM7DByHopkdew1fvzWgZz3AYV1Bn9G1iIpLBuLy7qFg9HkSE4mk/+JL/wVNBm7PY8KAAAAAElFTkSuQmCC',
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
