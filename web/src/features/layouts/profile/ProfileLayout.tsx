import { Outlet } from 'react-router-dom';
import './ProfileLayout.scss';

export default function ProfileLayout() {
  return (
    <div className="profile-layout">
      <Outlet />
    </div>
  );
}
