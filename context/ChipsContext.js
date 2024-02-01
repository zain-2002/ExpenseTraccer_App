// ChipsContext.js
'use client'
import React, { createContext, useContext, useState } from 'react';

const ChipsContext = createContext();

export const ChipsProvider = ({ children }) => {
  const [type, setType] = useState('Income');

  const setChipsType = (newType) => {
    setType(newType);
  };

  return (
    <ChipsContext.Provider value={{ type, setChipsType }}>
      {children}
    </ChipsContext.Provider>
  );
};

export const useChipsContext = () => {
  return useContext(ChipsContext);
};
