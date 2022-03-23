import React from "react";

export const ContextoGlobal = React.createContext();

export const ProviderContext = ({ children }) => {
  const [contar, setContar] = React.useState(0);

  const diminuirContar = () => setContar(contar - 1);
  const aumentarContar = () => setContar(contar + 1);
  const limparContar = () => setContar(0);

  return (
    <ContextoGlobal.Provider
      value={{
        contar,
        setContar,
        diminuirContar,
        aumentarContar,
        limparContar,
      }}
    >
      {children}
    </ContextoGlobal.Provider>
  );
};
