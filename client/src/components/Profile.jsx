import React from 'react';
import SidebarStudent from './SidebarStudent';
import UserDashboard from './UserDashboard';
import { useLocation} from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const location = useLocation();
  const userData = location.state?.user;
  return (
    <div className="profile-body">
      <div className="profile-content">
        {/* Pass the userData prop to the SidebarStudent component */}
        <SidebarStudent userData={userData} />
        {/* Pass the userData prop to the UserDashboard component */}
        <UserDashboard userData={userData} />
      </div>
    </div>
  );
};

export default Profile;


