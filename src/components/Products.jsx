import Addto from "./addto";
import Buy from "./buy";

function Products({products, selectedColor, selectedSize}) {

  //operador ternario en cascada
  const filteredProducts = 
       selectedColor 
        ? products.filter((product) => product.color === selectedColor)
        : selectedSize 
          ? products.filter((product) => product.size.includes(selectedSize))
          : selectedColor && selectedSize 
          ? products.filter((product) => product.color === selectedColor && products.filter((product) => product.size.includes(selectedSize)))
          : products;
    
  return (
    <section className="text-center w-[100%]">
      <h2
        className="text-4xl text-pink-600 font-bold
       m-3"
      >
        Find that you looking for!
      </h2>
      <article className="grid grid-cols-3">
        {filteredProducts.map((p, i) => (
          <div
            className="w-[350px] h-[350px] shadow-lg bg-neutral-200 p-3 m-3 rounded-[20px] transition-[.2s]"
            key={p.id}
          >
            <div className="flex flex-row justify-around">
              <div className="m-3 w-[150px] max-h-[150px] overflow-hidden rounded-lg">
                <img
                  src={p.img}
                  alt={i}
                  className={`w-[150px] h-[150px] ${p.style} rounded-lg shadow-2xl`}
                />
              </div>
              <div className="grid grid-rows-2 w-[40%]">
                <div className="border-2 border-red-300 text-end">
                  <Addto />
                </div>
                <div className="border-2 border-blue-200">
                  <p>{p.price}</p>
                  <Buy />
                </div>
              </div>
            </div>
            <div className="border-2 border-orange-200">
              <h3 className="font-bold text-2xl">{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}

export default Products;
