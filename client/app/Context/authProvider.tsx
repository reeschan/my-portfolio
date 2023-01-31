"use client";

import { createContext, ReactNode, useState } from "react";

export interface IAuthContext {
  isAutherized: boolean;
  setIsAutherized: (value: boolean) => void;
}

export const AuthContext = createContext<IAuthContext>(null!);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAutherized, setIsAutherized] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        isAutherized,
        setIsAutherized,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
