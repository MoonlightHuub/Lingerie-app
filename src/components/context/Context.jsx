import { createContext, useState } from "react";

export const GlobalContext = createContext();

export function ContextProvider(props) {

  const [cart, setCart] = useState([]);

  const handleClickCart = (products) => 
    setCart([...cart, products])

  return (
    <GlobalContext.Provider
      value={{
        handleClickCart,
        cart,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
