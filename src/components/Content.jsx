import Products from "./Products"
import Filters from "./Filters"
import { useState } from "react";
import { products } from "../data/products";

function Content() {

  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);


  {/* Cart */}

 

  {/* Size */}

  function handleSizeChange(size){
    setSelectedSize(size)
  }

  {/* Color */}

  function handleColorChange(color) {
    setSelectedColor(color)
  }

  {/* Range Price */}

  function handleMinPriceChange(event) {
    setMinPrice(event.target.value)
  }
  
  function handleMaxPriceChange(event) {
    setMaxPrice(event.target.value)
  }

  function handleFilterButtonClick() {
    filterByPriceRange(minPrice, maxPrice)
  }

  const selectedRange = {
    minPrice, maxPrice
  } 

  {/* Reset List Whitout filter */}

  function reset(){
    setSelectedColor('')
    setSelectedSize('')
    setMaxPrice(Infinity)
    setMinPrice(0)
  }

  return (
    <section className="flex flex-row">
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
        <Products 
          products={products} 
          selectedColor={selectedColor} 
          selectedSize={selectedSize}
          selectedRange={selectedRange}
          minPrice={minPrice}
          maxPrice={maxPrice}
        />
    </section>
  )
}

export default Content