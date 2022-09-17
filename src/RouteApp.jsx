import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import CompanyProfile from 'containers/CompanyProfile/CompanyProfile';
import JobManager from 'containers/JobManager/JobManager';
import JobPostEdit from 'containers/JobPostEdit/JobPostEdit';
import Layout from 'containers/Layout/Layout';
import ListCV from 'containers/ListCV/ListCV';
import Login from 'containers/Login/Login';
import ResetPassword from 'containers/ResetPassword/ResetPassword';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function RouteApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Layout />}>
            <Route path="jobmanager" element={<JobManager />} index/>
            <Route path="jobpost" element={<JobPostEdit />} />
            <Route path="jobedit/:id" element={<JobPostEdit />} />
            <Route path="companyprofile" element={<CompanyProfile />} />
            <Route path="viewcv/:id" element={<ListCV />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
