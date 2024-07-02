import { PostType } from '@/pages/blog/types';
import { Portfolio } from '@/pages/portfolio/types';
import { VacationType } from '@/pages/vacations/types';
import React, { createContext, useContext, ReactNode, useState } from 'react';

type ContextValue = { 
  vacations: VacationType[],
  portfolio: Portfolio[],
  posts: PostType[],
 };

type AppContextType = {
  value: ContextValue;
  setValue: (value: ContextValue) => void;
};

const AppContext = createContext<AppContextType | null>(null);

const initialValue: ContextValue = {
  vacations: [],
  portfolio: [],
  posts: [],
};

const AppContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [value, setValue] = useState<ContextValue>(initialValue);

  return (
    <AppContext.Provider value={{ value, setValue }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === null) {
    throw new Error('useAppContext must be used within a AppContextProvider');
  }
  return context;
};

export { AppContextProvider, useAppContext };
