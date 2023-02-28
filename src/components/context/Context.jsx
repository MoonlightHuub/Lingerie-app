import { createContext, useState } from "react";

export const GlobalContext = createContext();

export function ContextProvider(props) {

  const [cart, setCart] = useState([]);
  const [fav, setFav] = useState([])
  const [price, setPrice] = useState(0)

  const handleClickCart = (products) => {
    if (cart.indexOf(products) !== -1) return; 
    setCart([...cart, products])
  }

  const handleClickfav = (products) => {
    if (fav.indexOf(products) !== -1) return; 
    setFav([...fav, products])
  }

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  const handlePrice = () => {
    let ans = 0

    cart.map((item) => (ans += item.amount * item.price))
    setPrice(ans)
  }

  const handleRemoveCart = (id) => {
    const arr = cart.filter((item) => item.id !== id)
    setCart(arr)
    handlePrice()
  }


  const handleRemoveFav = (id) => {
    const arr = fav.filter((item) => item.id !== id)
    setFav(arr)
    handlePrice()
  }

  return (
    <GlobalContext.Provider
      value={{
        handleClickCart,
        handleChange,
        handlePrice,
        handleRemoveCart,
        handleRemoveFav,
        handleClickfav,
        cart,
        fav,
        price
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
