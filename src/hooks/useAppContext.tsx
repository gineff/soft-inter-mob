import React, { createContext, useContext, ReactNode, useState } from 'react';

interface MyContextType {
  value: object;
  setValue: (value: object) => void;
}

const AppContext = createContext<MyContextType | undefined>(undefined);

const AppContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [value, setValue] = useState<object>({});

  return (
    <AppContext.Provider value={{ value, setValue }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = (): MyContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
};

export { AppContextProvider, useAppContext };
