import { IoMenu } from "react-icons/io5";
import './header.css';


const Header = ()=> {
  return (
    <div className='div-header'>
      <h1 className='title-header'>tasks</h1>
      <div className="teste">
      <IoMenu size={50}/>
      </div>
    </div>
  )
}

export default Header;