import { colorfilter, sizefillter } from "../data";

function Filters({
  onColorChange,
  onSizeChange,
  onPriceChangeMax,
  onPriceChangeMin,
  reset,
  minPriceFilter,
  maxPriceFilter,
  handleFilterButtonClick
}) {
  return (
    <section className="flex flex-col w-full sm:max-w-[250px] sm:bg-[#121212] sm:border-solid sm:border-r-[2.5px] sm:border-pink-600 items-center">

      {/* Reset */}

      <div className="w-full flex justify-center mb-10 mt-20">
        <button
          onClick={() => reset("")}
          className="text-[#f1f1f1] border-solid border-[2.5px] border-pink-600 p-3 hover:scale-[1.2] hover:text-pink-600 active:scale-1 transition-[.2s] rounded-lg"
        >
          Show All
        </button>
      </div>

      {/* Price */}

      <div className="p-5 mb-20 bg-[#121212] border-solid border-[2.5px] border-[#333] rounded-[10px] sm:border-none">
        <h3 className="font-bold text-2xl text-pink-600 p-2">Price</h3>
        <div className="m-2">
          <input
            type="number"
            onChange={onPriceChangeMin}
            value={minPriceFilter}
            placeholder="$ Min"
            className="rounded-[10px] p-[2.5px] text-[#f1f1f1] bg-[#121212] border-neutral-700 border-solid border-[3px] focus:border-pink-600 focus:outline-none appearance-none focus:appearance-none"
          />
        </div>
        <p className="text-[#f1f1f1] text-center">To</p>
        <div className="m-2">
          <input
            type="number"
            onChange={onPriceChangeMax}
            value={maxPriceFilter}
            placeholder="$ Max"
            className="rounded-[10px] p-[2.5px] text-[#f1f1f1] bg-[#121212] border-neutral-700 border-solid border-[3px] focus:border-pink-600 focus:outline-none appearance-none focus:appearance-none"
          />
        </div>
        <div
          className="w-full flex justify-center"
        >
          <button
            className="text-[#f1f1f1] w-[5em] h-[2.5em] m-3 rounded-[20px] border-solid border-[2.5px] border-[#db2777]"
            onClick={handleFilterButtonClick}
          >
            filter
          </button>
        </div>
      </div>

      {/* Colors */}

      <div className="w-[250px] mb-20 p-5 bg-[#121212] border-solid border-[2.5px] border-[#333] rounded-[10px] sm:border-none">
        <h3 className="font-bold text-2xl text-pink-600 p-2">Colors</h3>
        <ul className="grid grid-cols-3 justify-around p-2">
          {colorfilter.map((cf) => (
            <li key={cf.id}>
              <div
                className={`w-[40px] h-[40px] ${cf.colorStyle} hover:scale-[1.2] transition-[.2s] m-2 rounded-full cursor-pointer active:scale-[1]`}
                title={cf.color}
                onClick={() => onColorChange(cf.color)}
              />
            </li>
          ))}
        </ul>
      </div>

      {/* Sizes */}

      <div className="p-5 mb-20 bg-[#121212] border-solid border-[2.5px] border-[#333] rounded-[10px] sm:border-none">
        <h3 className="font-bold text-2xl text-pink-600 p-2">Sizes</h3>
        <ul className="grid grid-cols-3 place-items-center">
          {sizefillter.map((sf) => (
            <li key={sf.id}>
              <div
                className="text-[#F1F1F1] w-[40px] h-[40px] border-solid border-[2.5px] hover:border-pink-600 hover:text-pink-600 hover:scale-[1.2] transition-[.2s] text-center rounded-lg m-2 font-semibold cursor-pointer active:scale-[1]"
                onClick={() => onSizeChange(sf.size)}
              >
                {sf.size}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Filters;
