import { navBar } from "../data";
import Filters from "./Filters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faMinus,
  faPlus,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useContext, useEffect } from "react";
import { GlobalContext } from "./context/Context";
import "../index.css";
function Header() {
  const {
    cart,
    price,
    fav,
    handleChange,
    handlePrice,
    handleRemoveCart,
    handleRemoveFav,
    handleColorChange,
    handleFilterButtonClick,
    handleMaxPriceChange,
    handleMinPriceChange,
    handleSizeChange,
    reset,
    minPrice,
    maxPrice,
  } = useContext(GlobalContext);

  const [toggleFav, setToggleFav] = useState(false);
  const [toggleCart, settoggleCart] = useState(false);
  const [menuFilter, setMenuFilter] = useState(false);

  useEffect(() => {
    handlePrice();
  });

  {
    /* Size Indicator */
  }

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="flex flex-row bg-[#121212] shadow-slate-900 fixed w-[100vw] max-w-screen-sm sm:max-w-[100%] top-0 left-0 border-solid border-b-[2.5px] border-pink-600 z-10 transition-[.2s] justify-between h-[110px]">
      {/* Toggle Menu Mobile */}
      <div
        className={`${
          menuFilter ? "absolute h-screen w-screen z-50" : "hidden"
        } bg-[#222] anim_menu overflow-y-scroll div_scroll`}
      >
        <div className="w-full flex justify-end p-3">
          <FontAwesomeIcon
            icon={faXmark}
            className="text-4xl m-3 cursor-pointer text-[#f1f1f1]"
            onClick={() => setMenuFilter(false)}
          />
        </div>
        <div className="w-full text-center">
          <h3 className="text-[#db2777] text-4xl font-bold">Filters</h3>
        </div>
        <div className="w-full">
          <Filters
            onColorChange={handleColorChange}
            onSizeChange={handleSizeChange}
            reset={reset}
            onPriceChangeMin={handleMinPriceChange}
            onPriceChangeMax={handleMaxPriceChange}
            handleFilterButtonClick={handleFilterButtonClick}
            minPrice={minPrice}
            maxPrice={maxPrice}
          />
        </div>
      </div>
      <div className="hidden sm:flex justify-center items-center p-5 m-5">
        <h1 className="text-[#db2777] text-2xl font-serif cursor-pointer">
          Lingerie Shop
        </h1>
      </div>
      <div className="sm:hidden flex w-[64px] ml-6">
        <button>
          <FontAwesomeIcon
            icon={faBars}
            className="w-[40px] h-[40px] text-[#f1f1f1]"
            onClick={() => setMenuFilter(true)}
          />
        </button>
      </div>
      <ul className="hidden sm:flex flex-row items-center justify-center">
        {navBar.map((short, index) => (
          <li
            key={short.id}
            className={`${
              index !== navBar.length - 1 ? "mr-5" : "mr-0"
            } text-[#f1f1f1] text-[20px] font-semibold hover:text-pink-600 transition-[.2s]`}
          >
            <a href="#">{short.link}</a>
          </li>
        ))}
      </ul>
      <div className=" flex flex-row justify-end items-center p-5">
        <button
          onClick={() => {
            settoggleCart((prev) => !prev);
            setToggleFav(false);
          }}
        >
          <FontAwesomeIcon
            icon={faCartShopping}
            className="text-white text-3xl active:text-[#db2777] sm:hover:text-pink-600 transition-[.2s] cursor-pointer pr-8"
            title="Cart"
          />
        </button>

        <button
          onClick={() => {
            setToggleFav((prev) => !prev);
            settoggleCart(false);
          }}
        >
          <FontAwesomeIcon
            icon={faHeart}
            className="text-white text-3xl active:text-[#db2777] sm:hover:text-pink-600 transition-[.2s] cursor-pointer pr-5"
            title="Favourites"
          />
        </button>
      </div>

      {/* Cart Menu */}

      <div
        className={`${
          toggleCart ? "flex" : "hidden"
        } absolute sm:top-20 sm:right-20 sm:mx-4 sm:my-2 p-3 sm:w-[600px] sm:h-[750px] bg-[#222] text-[#f1f1f1] transition-[.2s] sm:rounded-lg div_shadow overflow-y-scroll div_scroll h-screen w-screen ${
          screenWidth < 640 ? "anim_menu_reverse" : ""
        }`}
      >
        <div className="w-full h-full flex flex-col items-center">
          <div className="w-full flex justify-end">
            <FontAwesomeIcon
              icon={faXmark}
              className="text-4xl m-3 cursor-pointer"
              onClick={() => settoggleCart(false)}
            />
          </div>
          <h3 className="text-2xl text-[#db2777] font-bold p-3">
            Your Cart
          </h3>
          {cart.map((p, i) => (
            <div
              key={p.id}
              className="w-[90%] flex flex-col sm:flex-row m-2 p-3 bg-[#333] justify-evenly items-center rounded-[15px]"
            >
              <div key={i} className="w-full">
                <div className="flex flex-col sm:flex-row justify-between items-center">
                  <div className="flex flex-row mr-3 justify-between items-center">
                    <img
                      src={p.img}
                      alt="pro"
                      className="h-[10em] sm:w-[60px] sm:h-[60px] mr-5 rounded-[10px]"
                    />
                    <h3>
                      {p.title} {p.id}
                    </h3>
                  </div>
                  <div className="m-3">
                    <p className="font-semibold text-2xl">$ {p.price}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-row w-full justify-between sm:justify-around">
                <div className="ml-3 flex flex-row items-center bg-opacity-50 bg-[#121212] rounded-[10px] p-3 h-[40px]">
                  <button onClick={() => handleChange(p, -1)}>
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <p className="p-3 text-[18px] font-semibold">{p.amount}</p>
                  <button onClick={() => handleChange(p, 1)}>
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>

                <div className="flex items-center">
                  <button
                    onClick={() => handleRemoveCart(p.id)}
                    className="cursor-pointer bg-[#DC0000] p-2 rounded-[50px] font-semibold active:scale-[0.9] transition-[.2s]"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="static bottom-0 left-0 bg-[#121212] bg-opacity-20 w-[90%] p-3 m-3 flex flex-row justify-between text-[20px]">
            <p>Total: </p>
            <p>$ {price}</p>
            <button className="cursor-pointer bg-[#3CCF4E] py-2 px-3 rounded-[50px] font-semibold">
              Buy All
            </button>
          </div>
        </div>
      </div>

      {/* Favourites menu */}

      <div
        className={`${
          toggleFav ? "flex" : "hidden"
        } absolute sm:top-20 sm:right-0 sm:mx-4 sm:my-2 sm:w-[600px] sm:h-[750px] bg-[#222] text-[#f1f1f1] transition-[.2s] sm:rounded-lg div_shadow overflow-y-scroll div_scroll h-screen w-screen ${
          screenWidth < 640 ? "anim_menu_reverse" : ""
        }`}
      >
        <div className="flex flex-col px-3 w-full py-4">
          <div className="w-full flex justify-end">
            <FontAwesomeIcon
              icon={faXmark}
              className="text-4xl m-3 cursor-pointer"
              onClick={() => setToggleFav(false)}
            />
          </div>
          <div className="w-full text-center">
            <h3 className="text-2xl text-[#db2777] font-bold p-3">
              Your Favourites
            </h3>
          </div>
          {fav.map((p, i) => (
            <div key={i} className='flex flex-col sm:flex-row justify-center bg-[#333] m-3 rounded-[15px]'>
              <div className="flex flex-row justify-evenly sm:justify-between items-center w-full m-3 p-3 transition-[.2s]">
                <div>
                  <img
                    src={p.img}
                    alt="product"
                    className="h-[10em] sm:h-[5em] sm:w-[5em] rounded-[10px]"
                  />
                </div>
                <div className="m-3 font-semibold text-2xl">
                  <h3>
                    {p.title} {p.id}
                  </h3>
                </div>
              </div>
              <div className=" flex justify-center sm:items-center p-4">
                <button
                  className="cursor-pointer bg-[#DC0000] p-2 rounded-[50px] font-semibold active:scale-[0.9] transition-[.2s] h-[3em]"
                  onClick={() => handleRemoveFav(p.id)}
                >
                  Remove
                </button>
              </div>
              <div className="h-[10px]" />
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
