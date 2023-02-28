import Addto from "./addto";
import Buy from "./buy";
import { useState } from "react";

function Products({
  products,
  selectedColor,
  selectedSize,
  minPrice,
  maxPrice,
  selectedRange,
}) {
  const filteredProducts = products.filter((product) => {
    const hasSelectedColor = !selectedColor || product.color === selectedColor;
    const hasSelectedSize =
      !selectedSize || product.size.includes(selectedSize);
    const hasSelectedRangePrice =
      !selectedRange ||
      (product.price >= minPrice && product.price <= maxPrice);
    return hasSelectedColor && hasSelectedSize && hasSelectedRangePrice;
  });

  const [toggle, settoggle] = useState(false);

  if(toggle == true){
    document.body.style.overflow = 'hidden'
  }else{
    document.body.style.overflow = 'auto'
  }

  return (
    <section className="text-center w-[100%] max-w-screen-sm">
      <div
        className={`w-full h-full bg-[#121212] bg-opacity-80 ${
          toggle ? "fixed inset-0 h-[100%] z-50" : "hidden"
        }`}
        onClick={() => settoggle(false)}
      />
        <h2 className="text-[2em] sm:text-4xl text-pink-600 font-bold m-3">
          Find that you looking for!
        </h2>
        <article className="grid grid-cols-2 sm:grid-cols-3 place-content-center justify-evenly">
          {filteredProducts.map((p, i) => (
            <div
              className="w-[11em] h-[11em] sm:w-[20em] sm:h-[28em] shadow-lg bg-[#333] bg-opacity-50 p-3 m-3 rounded-[15px] transition-[.2s]"
              key={i}
            >
              <div className="relative w-full h-full" key={i}>
                <img
                  src={p.img}
                  alt="Produc"
                  className="hidden w-[5em] h-[5em] sm:w-[250px] sm:h-[250px] mx-auto shadow-lg rounded-lg"
                />
                {/* Mobile Onclick */}
                <img
                  src={p.img}
                  alt="Produc"
                  className="sm:hidden w-[5em] h-[5em] sm:w-[250px] sm:h-[250px] mx-auto shadow-lg rounded-lg"
                  onClick={() => settoggle(true)}
                />
                <div className="hidden sm:absolute top-0 right-0 bg-[#121212] bg-opacity-80 rounded-[50px] w-[120px] p-2 shadow-2xl">
                  <Addto product={p} />
                </div>
                <div className="w-full flex justify-center">
                  {p.size.map((s, i) => (
                    <div
                      className="hidden sm:flex w-[40px] h-[40px] border-2 border-solid border-pink-600 items-center justify-center bg-[#121212] bg-opacity-50 m-3"
                      key={i}
                    >
                      <p className="text-[#f1f1f1] font-bold">{s}</p>
                    </div>
                  ))}
                </div>
                <div className="w-full">
                  <h3 className="text-2xl text-[#f1f1f1] font-semibold">
                    {p.title} {p.id}
                  </h3>
                </div>
                <div className="w-full hidden sm:flex flex-row justify-around m-3 p-3">
                  <div className="h-full w-[150px] flex items-center justify-center">
                    <p className="text-[#f1f1f1] font-semibold text-2xl  p-2">
                      $ {p.price}
                    </p>
                  </div>
                  <Buy />
                </div>
              </div>
            </div>
          ))}
        </article>
    </section>
  );
}

export default Products;
