import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'pop',
  initialState: {
    voList: [],
    vo: {},
  },
  reducers: {
    setVoList: (state, action) => {
      state.voList = action.payload;
    },
    setVo: (state, action) => {
      state.vo = action.payload;
    },
  },
});

export const { setVo, setVoList, reset } = slice.actions;
export default slice.reducer;
