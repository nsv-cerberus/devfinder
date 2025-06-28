import { useAppSelector } from '@/hooks/useAppSelector';
import { authService } from '@/services/api/authService';
import { useNavigate } from 'react-router-dom';

export default function ProfilePage() {
  const user = useAppSelector(state => state.auth.user);
  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout();
    navigate('/sign-in');
  };

  if (!user.isAuthenticated) {
    return <div>Пользователь не авторизован</div>;
  }

  return (
    <div className="profile-page">
      <h1>Профиль пользователя</h1>
      <div className="user-info">
        <div className="info-item">
          <strong>Логин:</strong> {user.username}
        </div>
        <div className="info-item">
          <strong>Email:</strong> {user.email}
        </div>
        <div className="info-item">
          <strong>ID:</strong> {user.id}
        </div>
      </div>
      <div className="profile-actions">
        <button onClick={handleLogout} className="logout-btn">
          Выйти
        </button>
      </div>
    </div>
  );
}
