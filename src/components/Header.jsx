import {logo} from '../assets'
import { navBar } from '../data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping, faUser} from '@fortawesome/free-solid-svg-icons'
function Header() {
  return (
    <header className='flex flex-row bg-[#121212] shadow-slate-900 fixed w-[100%] top-0 border-solid border-b-[2.5px] border-pink-600 z-10'>
      <div className='w-[30%]'>
        <img src={logo} alt="logo" title='Lingerie' className='w-[64px] m-3 ml-5 rounded-[20px]'/>
      </div>
      <ul className='flex flex-row w-[40%] items-center justify-center'>
        {navBar.map((short, index) => (
          <li key={short.id} className={`${index !== navBar.length - 1 ? 'mr-5' : 'mr-0'} text-[#f1f1f1] text-[20px] font-semibold hover:text-pink-600 transition-[.2s]`} ><a href="#">{short.link}</a></li>
        ))}
      </ul>
      <div className='w-[30%] flex flex-row justify-end items-center p-5'>
        <FontAwesomeIcon icon={faCartShopping} className='text-white text-3xl hover:text-pink-600 transition-[.2s] cursor-pointer pr-8' title='Cart' />
        <FontAwesomeIcon icon={faUser} className='text-white text-3xl hover:text-pink-600 transition-[.2s] cursor-pointer pr-5' title='User'/>
      </div>
    </header>
  )
}

export default Header