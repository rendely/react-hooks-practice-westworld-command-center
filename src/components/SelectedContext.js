import React, { createContext, useContext,useState } from 'react';

export const SelectedContext = createContext({});

export const SelectedProvider = ({ children }) => {
  const [selectedId, setSelectedId] = useState(1);
  // the value passed in here will be accessible anywhere in our application 
  // you can pass any value, in our case we pass our state and it's update method 
  return (
      <SelectedContext.Provider value={{selectedId, setSelectedId}}>
          {children}
      </SelectedContext.Provider>
  )
}