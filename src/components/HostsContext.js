import React, { createContext, useState } from 'react';

export const HostsContext = createContext({});

export const HostsProvider = ({ children }) => {
  const [selectedId, setSelectedId] = useState(1);
  // the value passed in here will be accessible anywhere in our application 
  // you can pass any value, in our case we pass our state and it's update method 
  return (
      <HostsContext.Provider value={{selectedId, setSelectedId}}>
          {children}
      </HostsContext.Provider>
  )
}