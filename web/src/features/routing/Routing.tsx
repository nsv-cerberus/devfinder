import {Routes, Route, Navigate } from 'react-router-dom';

import AuthLayout from "@/features/layouts/auth/AuthLayout";
import ChatLayout from "@/features/layouts/chat/ChatLayout";
import ProfileLayout from "@/features/layouts/profile/ProfileLayout";
import ProtectedRoute from "@/components/ProtectedRoute";

import SignInPage from "@/features/layouts/auth/pages/sign-in/SignInPage";
import SignUpPage from "@/features/layouts/auth/pages/sign-up/SignUpPage";
import ProfilePage from "@/features/layouts/profile/pages/ProfilePage";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<Navigate to="/sign-in" />} />
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
      </Route>

      <Route path="/profile" element={
        <ProtectedRoute>
          <ProfileLayout />
        </ProtectedRoute>
      }>
        <Route index element={<ProfilePage />} />
      </Route>

      <Route path="/chat" element={<ChatLayout />}>
        <Route index element={<div></div>} />
      </Route>
    </Routes>
  );
}