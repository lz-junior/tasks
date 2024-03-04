import { IoMenu } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import './header.css';


const Header = ()=> {
  return (
    <div className='div-header'>
      <button>
        <FaRegUserCircle size={50}/>
      </button>
      <h1 className='title-header'>tasks</h1>
      <button>
        <IoMenu size={50}/>
      </button>
    </div>
  )
}

export default Header;