import React, { useContext, useState } from 'react';

type IAppContext = {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
};

const AppContext = React.createContext<Partial<IAppContext>>({});

export function useApp() {
  return useContext(AppContext);
}

type IAppProviderProps = {
  children: React.ReactNode;
};

export default function AppProvider({ children }: IAppProviderProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function toggleSidebar() {
    setSidebarOpen(!sidebarOpen);
  }

  const value = { sidebarOpen, toggleSidebar };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
