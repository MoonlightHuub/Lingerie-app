import Button from "./Button";
import { useState, useEffect } from "react";

function Carrousel({ 
    children: slides, 
    autoslide = false, 
    autoslideinterval = 3500 }) {

  const [current, setCurrent] = useState(0);
  
  useEffect(() => {
    if (!autoslide) return
    const slideinterval = setInterval(next, autoslideinterval)
    return () => clearInterval(slideinterval)
  }, [])

  const prev = () =>
    setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1));

  const next = () =>
    setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1));

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between">
        <Button id={0} prev={prev} next={next} />
        <Button id={1} prev={prev} next={next} />
      </div>
      <div className="absolute bottom-0 right-4 left-0">
        <div className="flex items-center justify-center gap-2">
            {slides.map((_, i) => (
                <div className={`transition-all w-3 h-3 bg-white rounded-full ${current === i ? 'p-2' : 'bg-opacity-50'}`} key={i}/>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Carrousel;
