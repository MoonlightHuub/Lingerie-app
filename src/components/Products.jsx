import Addto from "./addto";
import Buy from "./buy";

function Products({ products, selectedColor, selectedSize }) {
  //operador ternario en cascada
  const filteredProducts = products.filter((product) => {
    const hasSelectedColor = !selectedColor || product.color === selectedColor;
    const hasSelectedSize =
      !selectedSize || product.size.includes(selectedSize);
    return hasSelectedColor && hasSelectedSize;
  });

  return (
    <section className="text-center w-[100%]">
      <h2
        className="text-4xl text-pink-600 font-bold
       m-3"
      >
        Find that you looking for!
      </h2>
      <article className="grid grid-cols-3 place-content-center">
        {filteredProducts.map((p, i) => (
          <div
            className="w-[350px] h-[450px] shadow-lg bg-[#333] bg-opacity-50 p-3 m-3 rounded-[15px] transition-[.2s]"
            key={p.id}
          >
            <div className="relative w-full h-full">
              <img
                src={p.img}
                alt="Produc"
                className="w-[250px] h-[250px] mx-auto shadow-lg rounded-lg"
              />
              <div className="absolute top-0 right-0 bg-[#121212] bg-opacity-80 rounded-[50px] w-[120px] p-2 shadow-2xl">
                <Addto />
              </div>
              <div className="w-full flex justify-center">
                {p.size.map((s) => (
                  <div className="w-[40px] h-[40px] border-2 border-solid border-pink-600 flex items-center justify-center bg-[#121212] bg-opacity-50 m-3">
                    <p className="text-[#f1f1f1] font-bold">{s}</p>
                  </div>
                ))}
              </div>
              <div className="w-full">
                <h3 className="text-2xl text-[#f1f1f1] font-semibold">
                  {p.title}
                </h3>
              </div>
              <div className="w-full flex flex-row justify-around m-3 p-3">
                  <div className="h-full w-[150px] flex items-center justify-center">
                    <p className="text-[#f1f1f1] font-bold text-2xl">{p.price}</p>
                  </div>
                  <button
                    className="bg-[#3CCF4E] text-[#f1f1f1] w-[150px] h-[50px] rounded-[50px] font-bold text-2xl active:bg-[#57ff6e] active:scale-[0.9] transition-[.01s]"
                  >
                    Buy
                  </button>
              </div>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}

export default Products;
