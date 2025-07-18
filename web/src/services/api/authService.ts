import store from '@/store/store';
import {
  setUser,
  clearUser,
  setSignInLoading,
  setSignInError,
  setSignUpLoading,
  setSignUpError
} from '@/store/slices/authSlice';

interface LoginData {
  username: string;
  password: string;
}

interface RegisterData {
  username: string;
  email: string;
  password: string;
}

interface LoginResponse {
  success: boolean;
  data?: {
    id: string;
    username: string;
    email: string;
    // token больше не нужен - он в httpOnly cookie
  };
  message?: string;
}

interface RegisterResponse {
  success: boolean;
  data?: {
    id: number;
    username: string;
    email: string;
    // token больше не нужен - он в httpOnly cookie
  };
  message?: string;
}

export const authService = {
  async login(loginData: LoginData): Promise<LoginResponse> {
    try {
      store.dispatch(setSignInLoading(true));
      store.dispatch(setSignInError(null));

      // Отправляем JSON с credentials для cookies
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Важно! Для работы с cookies
        body: JSON.stringify(loginData),
      });

      const data = await response.json();
      console.log("Response:", data);

      if (data && data.success) {
        // Сохраняем данные пользователя в store (БЕЗ токена!)
        store.dispatch(setUser({
          id: data.data.id,
          username: data.data.username,
          email: data.data.email,
          token: '', // Токен теперь в httpOnly cookie
        }));

        // НЕ сохраняем токен в localStorage - он в httpOnly cookie!
        // localStorage.setItem('authToken', data.data.token); //

        return data;
      } else {
        const error = data?.message || 'Ошибка входа в систему';
        store.dispatch(setSignInError(error));
        return { success: false, message: error };
      }
    } catch {
      const errorMessage = 'Ошибка соединения с сервером';
      store.dispatch(setSignInError(errorMessage));
      return { success: false, message: errorMessage };
    } finally {
      store.dispatch(setSignInLoading(false));
    }
  },

  async register(registerData: RegisterData): Promise<RegisterResponse> {
    try {
      store.dispatch(setSignUpLoading(true));
      store.dispatch(setSignUpError(null));

      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Важно! Для работы с cookies
        body: JSON.stringify(registerData),
      });

      const data = await response.json();
      console.log("Register response:", data);

      if (data && data.success) {
        // Сохраняем данные пользователя в store (БЕЗ токена!)
        store.dispatch(setUser({
          id: data.data.id.toString(),
          username: data.data.username,
          email: data.data.email,
          token: '', // Токен теперь в httpOnly cookie
        }));

        // НЕ сохраняем токен в localStorage - он в httpOnly cookie!
        // localStorage.setItem('authToken', data.data.token); //

        return data;
      } else {
        const error = data?.message || 'Ошибка регистрации';
        store.dispatch(setSignUpError(error));
        return { success: false, message: error };
      }
    } catch {
      const errorMessage = 'Ошибка соединения с сервером';
      store.dispatch(setSignUpError(errorMessage));
      return { success: false, message: errorMessage };
    } finally {
      store.dispatch(setSignUpLoading(false));
    }
  },

  logout() {
    store.dispatch(clearUser());
    // НЕ удаляем токен из localStorage - он в httpOnly cookie
    // localStorage.removeItem('authToken'); //

    // TODO: Вызов API для logout и очистки cookie на сервере
    fetch('/api/auth/logout', {
      method: 'POST',
      credentials: 'include',
    });
  }
};