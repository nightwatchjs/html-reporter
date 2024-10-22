import React, { ReactNode } from 'react';
import { GlobalContext } from '../../src/contexts/GlobalContext';

type GlobalContextProps = {
  children: ReactNode;
  value: unknown;
};

export const GlobalContextProvider: React.FC<GlobalContextProps> = ({ children, value }) => {
  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};
