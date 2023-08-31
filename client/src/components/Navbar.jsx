import React, { Fragment, UseState } from "react";
import { Menu, Transition, State } from "@headlessui/react";
import { ImHome3 } from "react-icons/im";
import { BiChevronsDown } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { AiOutlineLogout, AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import {Link} from react-router-dom;
import Signin from "./Signin";



const Navbar = () => {
  const user ={}
  const [Open,setOpen] = useState(false)

  const handleClose=() => {
    setOpen((prev)=!prev)
  }

  return (
   <>
  <div className='relative bg-red-100 z-50'>
    <nav className='container mx-auto flex items-center justify-between p-5'>
      <div><Link to='/' className='text-red-600 font-bold text-xl'>Job<span className="text-red-800">QuestPro</span>
      </Link> </div>

      <ul className="hidden lg:flex gap-10 text-base">
        <li>
          <Link to='/'> Find Job </Link>
        </li>
        <li>
          <Link to='/'> Companies</Link>
        </li>
        <li>
          <Link to='/upload-job'> Upload Job</Link>
        </li>
        <li>
          <Link to='/about'> About</Link>
        </li>
      </ul>
      <div className ="lg:block">
        {!user?.token?(
            <Link to='/user-auth'>
              <Signin title="Sign In"  containerStyles="text-red-600 py-1.5 px-5 focus:outline-none hover:bg-blue-800 hover:text-white rounded-full text-base border border-red-600"/>

            </Link>
          ):(
            <div>
              {/* <MenuList */}
            </div>

        )}
      </div>
      </nav>
      </div>
  </>
)};

export default Navbar;
