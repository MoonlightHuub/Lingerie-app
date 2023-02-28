import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { benefits } from "../data";

function Benefits() {
  return (
    <section className="flex flex-wrap justify-around p-8 w-[100vw] max-w-screen-md sm:w-full mt-[2em]">
      {benefits.map((benefit) => (
        <div
          key={benefit.id}
          className={`w-[8em] h-[8em] text-center p-5 cursor-pointer sm:hover:bg-neutral-700 rounded-xl`}
        >
          <FontAwesomeIcon
            icon={benefit.fontaaw}
            className="text-[1.5em] sm:text-3xl text-pink-600"
          />
          <h4 className="font-semibold sm:font-bold text-[#f1f1f1]">{benefit.h4}</h4>
          <p className="text-[#f1f1f1] hidden sm:flex">{benefit.p}</p>
        </div>
      ))}
    </section>
  );
}

export default Benefits;
