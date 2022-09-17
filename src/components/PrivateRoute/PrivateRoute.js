import jwtDecode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { setIsLoginStatus } from 'Store/modules/Auth';

export default function PrivateRoute() {
  const token = localStorage.getItem('Authorization');
  const dispatch = useDispatch();
  if (token !== null) {
    const { exp } = jwtDecode(token);
    if (Date.now() >= exp * 1000) {
      localStorage.removeItem('Authorization');
      dispatch(setIsLoginStatus(false));
      return <Navigate to="/login" replace={false} />;
    }
    dispatch(setIsLoginStatus(true));
    return <Outlet />;
  } else {
    return <Navigate to="/login" replace={false} />;
  }
}
