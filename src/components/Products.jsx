import Addto from "./addto";
import Buy from "./buy";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import '../index.css'

function Products({
  products,
  selectedColor,
  selectedSize,
  minPrice,
  maxPrice,
  selectedRange,
  handleClickPost,
  post,
  setPost,
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

  if (toggle == true) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  {
    /* Width Indicator */
  }

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

  {
    /* Select and close post*/
  }

  const handleSelectPost = (products) => {
    handleClickPost(products);
    settoggle(true);
  }

  const closePost = () => {
    settoggle(false);
    setPost([]);
  }

  return (
    <section className="text-center sm:w-full max-w-screen-sm sm:max-w-full">
      {/* Mobile Show Post */}
      <div
        className={`w-full h-full bg-[#121212] bg-opacity-80 ${
          toggle ? "fixed inset-0 h-[100%] z-40" : "hidden"
        }`}
        onClick={() => closePost()}
      >
        {post.map((p, i) => (
          <div
            key={i}
            className='h-full'
          >
            <div className="w-full flex justify-end p-5">
              <FontAwesomeIcon
                icon={faXmark}
                onClick={() => closePost}
                className="text-4xl text-[#f1f1f1] bg-[#121212] bg-opacity-90 div_shadow"
              />
            </div>
            <div
              className=" w-full h-full flex items-center justify-center"
            >
              <div
                className="bg-[#222] post_anim w-[20em] h-[25em] p-5 mb-[10em] flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img src={p.img} alt="Post" className="w-[15em] h-[15em]" />
                <h3
                  className="text-[#f1f1f1]"
                >
                {p.title} {p.id}
                </h3>
                <div 
                  className="absolute top-0 right-0 w-[120px] bg-[#121212] bg-opacity-90 m-3 p-2 rounded-[50px]"
                >
                  <Addto product={p}/>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-[2em] sm:text-4xl text-pink-600 font-bold m-3">
        Find that you looking for!
      </h2>
      <article className="grid grid-cols-2 sm:grid-cols-3 place-content-center sm:justify-evenly justify-center w-full">
        {filteredProducts.map((p, i) => (
          <div
            className="w-[10.5em] h-[10.5em] sm:w-[20em] sm:h-[28em] shadow-lg bg-[#333] bg-opacity-50 p-3 mx-auto my-3 rounded-[15px] transition-[.2s]"
            key={i}
          >
            <div className="relative w-full h-full" key={i}>
              <img
                src={p.img}
                alt="Produc"
                className="hidden sm:flex w-[5em] h-[5em] sm:w-[250px] sm:h-[250px] mx-auto shadow-lg rounded-lg"
              />
              <div
                className={`${
                  screenWidth < 640 ? "hidden" : "absolute"
                } top-0 right-0 bg-[#121212] bg-opacity-80 rounded-[50px] w-[120px] p-2 shadow-2xl`}
              >
                <Addto product={p} />
              </div>
              {/* ----------------- Mobile Onclick ------------*/}
              <img
                src={p.img}
                alt="Produc"
                className="sm:hidden w-[5em] h-[5em] sm:w-[250px] sm:h-[250px] mx-auto shadow-lg rounded-lg"
                onClick={() => handleSelectPost(p)}
              />
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
