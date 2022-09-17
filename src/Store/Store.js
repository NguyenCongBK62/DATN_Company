import { configureStore } from '@reduxjs/toolkit';
import ToastReducer from './modules/AlertToast';
import AuthReducer from './modules/Auth';
export default configureStore({
  reducer: {
    ToastStatus: ToastReducer,
    Auth: AuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
