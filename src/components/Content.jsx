import Products from "./Products"
import Filters from "./Filters"
import { useState } from "react";
import { products } from "../data/products";

function Content() {

  const [selectedColor, setSelectedColor] = useState('');

  function handleColorChange(color) {
    setSelectedColor(color)
  }

  return (
    <section className="flex flex-row">
        <Filters onColorChange={handleColorChange} />
        <Products products={products} selectedColor={selectedColor} />
    </section>
  )
}

export default Content