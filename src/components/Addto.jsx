import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { GlobalContext } from "./context/Context";

function Addto({ product }) {

  const {handleClickCart, handleClickfav} = useContext(GlobalContext)

  return (
    <div className="flex flex-row justify-around text-3xl">
      <span>
        <button
          className="h-[32px] w-[32px]"
          onClick={() => handleClickfav(product)}
        >
          <FontAwesomeIcon
            icon={faHeart}
            className="text-[#f1f1f1] sm:hover:scale-[1.2] sm:hover:text-[#db2777] sm:active:scale-[1] transition-[.2s] active:scale-[0.9] active:text-[#db2777]"
            title="Add to your favorites list"
          />
        </button>
      </span>
      <span className="text-[#f1f1f1] sm:hover:scale-[1.2] sm:hover:text-[#db2777] sm:active:scale-[1] transition-[.2s]">
        <button 
          className="w-[32px] h-[32px] active:scale-[0.9] active:text-[#db2777]"
          onClick={() => handleClickCart(product)}
        >
          <FontAwesomeIcon icon={faCartPlus} title="Add to Cart" />
        </button>
      </span>
    </div>
  );
}

export default Addto;
