import { createContext, ReactNode } from 'react';
import React from 'react';
import { transformNightwatchReport } from '../transform';

const GlobalContext = createContext<any>(null);

type GlobalContextProps = {
  children: ReactNode;
};

const GlobalContextProvider: React.FC<GlobalContextProps> = ({ children }) => {
  const value = transformNightwatchReport();

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};

export { GlobalContext, GlobalContextProvider };
