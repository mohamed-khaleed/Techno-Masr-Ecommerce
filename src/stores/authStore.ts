import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { loginUser } from '../services/authService';

interface AuthState {
  user: { id: number; username: string; token: string } | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: async (username, password) => {
        const userData = await loginUser(username, password);
        set({ user: userData, isAuthenticated: true });
      },
    }),
    { name: 'auth' }
  )
);
