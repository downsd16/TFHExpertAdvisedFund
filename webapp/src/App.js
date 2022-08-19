import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SuperAdminGuard from './components/guards/SuperAdminGuard.js';
import Layout from './components/layout/Layout.js';
import Donate from './components/donate/Donate.js';
import UserProposals from './components/proposals/user/User.js';
import ExpertProposals from './components/proposals/expert/Expert.js'
import AdminProposals from './components/proposals/admin/Admin.js'
import Profile from './components/profile/new_expert/New_Expert.js';
import Settings from './components/settings/new_experts/Approve_Expert.js';
import NoPage from './components/nopage/NoPage.js';
import Confirm from './components/donate/confirm/Confirm.js'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Donate />} />
          <Route path="donate" element={<Donate />} />
          <Route path="proposals" element={<UserProposals />} />
          <SuperAdminGuard path="adminprop" component={<AdminProposals />} address={'Y7F5PBYQGLBSLGMFRM3P6SLWV7APPXBUMEAGXIZISRDHH3OYU72JZDLILE'}/>
          <SuperAdminGuard path="adminsettings" component={<Settings />} address={'Y7F5PBYQGLBSLGMFRM3P6SLWV7APPXBUMEAGXIZISRDHH3OYU72JZDLILE'}/>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
