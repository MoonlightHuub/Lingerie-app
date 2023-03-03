import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { benefits } from "../data";

function Benefits() {
  return (
    <section className="flex flex-wrap justify-evenly p-10 w-[100vw] sm:justify-evenly max-w-screen-md sm:max-w-full sm:w-full mt-[4em] mb-[4em]">
      {benefits.map((benefit) => (
        <div
          key={benefit.id}
          className={`w-[8em] h-[8em] sm:w-[10em] sm:h-[10em] text-center p-5 cursor-pointer sm:hover:bg-neutral-700 rounded-xl`}
        >
          <FontAwesomeIcon
            icon={benefit.fontaaw}
            className="text-[1.5em] sm:text-3xl text-pink-600"
          />
          <h4 className="font-semibold sm:font-bold text-[#f1f1f1]">{benefit.h4}</h4>
          <p className="text-[#f1f1f1] hidden sm:block pt-3 ">{benefit.p}</p>
        </div>
      ))}
    </section>
  );
}

export default Benefits;
