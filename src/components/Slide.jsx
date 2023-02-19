import Carrousel from "./Carrousel";
import { slides } from "../data";

function Slide() {
  return (
    <div className="flex justify-center">
      <div className="max-w-[680px]">
        <Carrousel autoslide={true}>
          {slides.map((s,i) => (
            <img src={s} alt="carousel" key={i} />
          ))}
        </Carrousel>
      </div>
    </div>
  );
}

export default Slide;
