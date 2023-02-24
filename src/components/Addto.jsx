import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { GlobalContext } from "./context/Context";

function Addto({ product }) {

  const {handleClickCart} = useContext(GlobalContext)

  return (
    <div className="flex flex-row justify-around text-3xl">
      <span>
        <button
          className="h-[32px] w-[32px]"
        >
          <FontAwesomeIcon
            icon={faHeart}
            className="text-[#f1f1f1] hover:scale-[1.2] hover:text-[#db2777] active:scale-[1] transition-[.2s]"
            title="Add to your favorites list"
          />
        </button>
      </span>
      <span className="text-[#f1f1f1] hover:scale-[1.2] hover:text-[#db2777] active:scale-[1] transition-[.2s]">
        <button 
          className="w-[32px] h-[32px]"
          onClick={() => handleClickCart(product)}
        >
          <FontAwesomeIcon icon={faCartPlus} title="Add to Cart" />
        </button>
      </span>
    </div>
  );
}

export default Addto;
