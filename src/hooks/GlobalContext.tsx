import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';
import { IGlobalContext, IGlobalVrtContext } from '../types/globalContext';

export const useGlobalContext = () => {
  const context = useContext<IGlobalContext>(GlobalContext);

  if (context === undefined) {
    throw new Error('useGlobalContext was used outside of its Provider');
  }

  return context;
};

export const useVrtGlobalContext = () => {
  const context = useContext<IGlobalVrtContext>(GlobalContext);

  if (context === undefined) {
    throw new Error('useGlobalContext was used outside of its Provider');
  }

  return context;
};
