import React, { createContext, useEffect, useState } from 'react';

export const HostsContext = createContext({});

export const HostsProvider = ({ children }) => {
  const [hosts, setHosts] = useState([]);

  useEffect(()=> {
    fetch('http://localhost:3001/hosts')
    .then(r=> r.json())
    .then(hosts => setHosts(hosts));
  },[]);


  const [selectedId, setSelectedId] = useState(null);
  // the value passed in here will be accessible anywhere in our application 
  // you can pass any value, in our case we pass our state and it's update method 
  return (
      <HostsContext.Provider value={{selectedId, setSelectedId, hosts, setHosts}}>
          {children}
      </HostsContext.Provider>
  )
}