import Products from "./Products"
import Filters from "./Filters"
import { useState } from "react";
import { products } from "../data/products";

function Content() {

  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  function handleSizeChange(size){
    setSelectedSize(size)
  }

  function handleColorChange(color) {
    setSelectedColor(color)
  }

  function reset(){
    setSelectedColor('')
    setSelectedSize('')
  }


  return (
    <section className="flex flex-row">
        <Filters onColorChange={handleColorChange} onSizeChange={handleSizeChange} reset={reset} />
        <Products products={products} selectedColor={selectedColor} selectedSize={selectedSize} />
    </section>
  )
}

export default Content