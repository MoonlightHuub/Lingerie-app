import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function Button({ id, prev, next }) {

  return (
    <>
      <button
        className={`relative text-3xl bg-white opacity-80 hover:bg-[#121212] hover:text-pink-600 p-2 rounded-full shadow`}
        onClick={id == 0 ? prev : next}
      >
        <FontAwesomeIcon icon={id == 1 ? faArrowRight : faArrowLeft} />
      </button>
    </>
  );
}

export default Button;
