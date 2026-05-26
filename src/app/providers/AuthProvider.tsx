import {
  GoogleAuthProvider,
  User,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { auth, googleProvider, isFirebaseConfigured } from '../../lib/firebase';

type AuthContextValue = {
  adminEmails: string[];
  isAdmin: boolean;
  isConfigured: boolean;
  isLoading: boolean;
  signInWithGoogle: () => Promise<void>;
  signOutUser: () => Promise<void>;
  user: User | null;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

function parseAdminEmails() {
  const raw = import.meta.env.VITE_ADMIN_EMAILS ?? '';
  return raw
    .split(',')
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(isFirebaseConfigured);
  const adminEmails = useMemo(() => parseAdminEmails(), []);

  useEffect(() => {
    if (!auth) {
      setIsLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (nextUser) => {
      setUser(nextUser);
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = useMemo<AuthContextValue>(() => {
    const email = user?.email?.toLowerCase() ?? '';
    return {
      adminEmails,
      isAdmin: adminEmails.includes(email),
      isConfigured: isFirebaseConfigured,
      isLoading,
      async signInWithGoogle() {
        if (!auth || !googleProvider) {
          throw new Error('Firebase has not been configured yet.');
        }

        await signInWithPopup(auth, googleProvider as GoogleAuthProvider);
      },
      async signOutUser() {
        if (!auth) {
          return;
        }

        await signOut(auth);
      },
      user,
    };
  }, [adminEmails, isLoading, user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }

  return context;
}
