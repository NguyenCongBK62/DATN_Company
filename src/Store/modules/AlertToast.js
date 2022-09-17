import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  toastStatus: null,
};

const AlertToastSlice = createSlice({
  name: 'AlertToast',
  initialState,
  reducers: {
    setToastStatus: (state, action) => {
      state.toastStatus = action.payload;
    },
  },
});

export const { setToastStatus } = AlertToastSlice.actions;

export default AlertToastSlice.reducer;
