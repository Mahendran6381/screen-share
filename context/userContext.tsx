'use client';
import React, { useContext, createContext, useState, ReactNode } from 'react';

interface UserContextValue {
  user: object | null; 
  setUser: React.Dispatch<React.SetStateAction<object | null>>;
}

const UserContext = createContext<UserContextValue | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<object | null>(null); 

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
