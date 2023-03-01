import Products from "./Products"
import Filters from "./Filters"
import { products } from "../data/products";
import { useContext, useState, useEffect } from "react";
import { GlobalContext } from "./context/Context";

function Content() {

  const {handleColorChange, handleFilterButtonClick, handleMaxPriceChange, handleMinPriceChange, handleSizeChange, reset, minPrice, maxPrice, selectedColor, selectedSize, selectedRange, post, handleClickPost, setPost} = useContext(GlobalContext)
  
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

    <section className="flex sm:flex-row flex-col">
        <div
          className={`${screenWidth < 640 ? 'hidden' : 'flex'}`}
        >
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
        <Products 
          products={products} 
          selectedColor={selectedColor} 
          selectedSize={selectedSize}
          selectedRange={selectedRange}
          minPrice={minPrice}
          maxPrice={maxPrice}
          handleClickPost={handleClickPost}
          post={post}
          setPost={setPost}
        />
    </section>
  )
}

export default Content