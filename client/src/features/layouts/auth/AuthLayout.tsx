import { Outlet } from "react-router-dom";
import ConfirmRegistrationModal from "./modals/ConfirmRegistrationModal";

export default function AuthLayout() {
  return (
    <div className="auth-layout">
      <Outlet />
      <ConfirmRegistrationModal />
    </div>
  );
}