import React, { useState } from "react";

const EssentialContext = React.createContext();

const EssentialContextProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [darkmode, setDarkmode] = useState(false);

  const values = {
    isMenuOpen,
    setIsMenuOpen,
    darkmode,
    setDarkmode
  };

  return (
    <EssentialContext.Provider value={{ ...values }}>
      {children}
    </EssentialContext.Provider>
  );
}


export { EssentialContextProvider, EssentialContext };
