import { createContext, useState } from "react";

export const GlobalContext = createContext();

export function ContextProvider(props) {
  const [cart, setCart] = useState([]);
  const [fav, setFav] = useState([]);
  const [price, setPrice] = useState(0);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const [post, setPost] = useState([]);

  {
    /* Add to Logic */
  }

  const handleClickCart = (products) => {
    if (cart.indexOf(products) !== -1) return;
    setCart([...cart, products]);
  };

  const handleClickfav = (products) => {
    if (fav.indexOf(products) !== -1) return;
    setFav([...fav, products]);
  };

  {
    /* Show Post */
  }

  const handleClickPost = (products) => {
    if (post.indexOf(products) !== -1) return;
    setPost([...post, products]);
  };

  {
    /* Change Amount */
  }

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  {
    /* Price Logic */
  }

  const handlePrice = () => {
    let ans = 0;

    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  {
    /* Remove Logic */
  }

  const handleRemoveCart = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handleRemoveFav = (id) => {
    const arr = fav.filter((item) => item.id !== id);
    setFav(arr);
    handlePrice();
  };

  {
    /* Size */
  }

  function handleSizeChange(size) {
    setSelectedSize(size);
  }

  {
    /* Color */
  }

  function handleColorChange(color) {
    setSelectedColor(color);
  }

  {
    /* Range Price */
  }

  function handleMinPriceChange(event) {
    setMinPrice(event.target.value);
  }

  function handleMaxPriceChange(event) {
    setMaxPrice(event.target.value);
  }

  function handleFilterButtonClick() {
    filterByPriceRange(minPrice, maxPrice);
  }

  const selectedRange = {
    minPrice,
    maxPrice,
  };

  {
    /* Reset List Whitout filter */
  }

  function reset() {
    setSelectedColor("");
    setSelectedSize("");
    setMaxPrice(Infinity);
    setMinPrice(0);
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
        handleColorChange,
        handleFilterButtonClick,
        handleMaxPriceChange,
        handleMinPriceChange,
        handleSizeChange,
        reset,
        minPrice,
        maxPrice,
        selectedColor,
        selectedSize,
        selectedRange,
        cart,
        fav,
        price,
        handleClickPost,
        post, 
        setPost
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
