import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { benefits } from "../data";

function Benefits() {
  return (
    <section className="flex flex-row justify-around p-8">
      {benefits.map((benefit, index) => (
        <div
          key={benefit.id}
          className={`text-center p-5 cursor-pointer hover:bg-neutral-700 rounded-xl`}
        >
          <FontAwesomeIcon
            icon={benefit.fontaaw}
            className="text-3xl text-pink-600"
          />
          <h4 className="font-bold text-[#f1f1f1]">{benefit.h4}</h4>
          <p className="text-[#f1f1f1]">{benefit.p}</p>
        </div>
      ))}
    </section>
  );
}

export default Benefits;
