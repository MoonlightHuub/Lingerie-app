import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons"


function Addto() {
  return (
    <div className="flex flex-row justify-around text-3xl">
      <span><button><FontAwesomeIcon icon={faHeart} className='text-[#f1f1f1]' /></button></span>
      <span className='text-[#f1f1f1]'><button><FontAwesomeIcon icon={faCartPlus} /></button></span>
    </div>
  )
}

export default Addto