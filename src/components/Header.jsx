import { logo } from "../assets";
import { navBar } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState, useContext } from "react";
import { GlobalContext } from "./context/Context";
import "../index.css";
function Header() {
  const { cart } = useContext(GlobalContext);

  const [toggleFav, setToggleFav] = useState(false);
  const [toggleCart, settoggleCart] = useState(false);
  const [count, setCount] = useState(1);

  if (count < 1){
    setCount(1)
  }

  const handleCountAd = () => {
    setCount( count + 1)
  }

  const handleCountDel = () => {
    setCount( count - 1 )
  }

  return (
    <header className="flex flex-row bg-[#121212] shadow-slate-900 fixed w-[100%] top-0 border-solid border-b-[2.5px] border-pink-600 z-10">
      <div className="w-[30%]">
        <img
          src={logo}
          alt="logo"
          title="Lingerie"
          className="w-[64px] m-3 ml-5 rounded-[20px]"
        />
      </div>
      <ul className="flex flex-row w-[40%] items-center justify-center">
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
      <div className="w-[30%] flex flex-row justify-end items-center p-5">
        <button
          onClick={() => {
            settoggleCart((prev) => !prev);
            setToggleFav(false);
          }}
        >
          <FontAwesomeIcon
            icon={faCartShopping}
            className="text-white text-3xl hover:text-pink-600 transition-[.2s] cursor-pointer pr-8"
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
            className="text-white text-3xl hover:text-pink-600 transition-[.2s] cursor-pointer pr-5"
            title="Favourites"
          />
        </button>
      </div>

      <div
        className={`${
          toggleCart ? "flex" : "hidden"
        } absolute top-20 right-20 mx-4 my-2 max-w-[500px] w-[500px] max-h-[700px] h-[700px] bg-[#222] text-[#f1f1f1] transition-[.2s] rounded-lg p-3 div_shadow overflow-y-scroll div_scroll`}
      >
        <div className="w-full h-full flex flex-col">
          <div className="w-full text-center">
            <h3>Your Cart</h3>
          </div>
          {cart.map((p, i) => (
            <div key={p.id} className="w-full flex flex-row m-3 p-3 bg-[#333]">
              <div key={i} className="flex flex-row mr-3">
                <img src={p.img} alt="pro" className="w-[60px] h-[60px] mr-3" />
                <h3>
                  {p.title} {p.id}
                </h3>
              </div>
              <div className="">
                <p>$ {p.price}</p>
              </div>
              <div className="ml-3 flex flex-row items-center">
                <button
                  onClick={handleCountDel}
                >
                  -
                </button>
                <p className="p-3">
                  {count}
                </p>
                <button
                  onClick={handleCountAd}
                >
                  +
                </button>
              </div>
            </div>
          ))}
          <div className="static bottom-0 left-0 bg-[#121212] bg-opacity-20 w-full p-3 flex flex-row justify-between text-[20px]">
            <p>Total: </p>
            <p>$ 12345</p>
            <button>Buy All</button>
          </div>
        </div>
      </div>

      <div
        className={`${
          toggleFav ? "flex" : "hidden"
        } absolute top-20 right-0 mx-4 my-2 min-w-[500px] min-h-[700px] bg-[#222] text-[#f1f1f1] transition-[.2s] rounded-lg p-3 div_shadow`}
      >
        <div className="w-full text-center">
          <h3>Your Favourites</h3>
        </div>
      </div>
    </header>
  );
}

export default Header;
