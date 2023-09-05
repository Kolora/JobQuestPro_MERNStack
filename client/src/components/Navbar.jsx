import React, { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ImHome3 } from "react-icons/im";
import { BiChevronsDown } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { AiOutlineLogout, AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";
import { users } from "../utilis/data";
import { useSelector, useDispatch } from "react-redux";
// import icon from "../assets/react.svg";

const LogOut = () => {
  localStorage.removeItem("userInfo");
  // setUser({});
};

// return (
//   <ul id="navbar">
//     <li>
//       <Link to="/">
//         <img src={icon} alt="React Icon" id="icon" />
//       </Link>
//     </li>
//     {username ? (
//       <>
//         <li style={{ color: "black" }}>Welcome {username}!</li>
//         <li onClick={logout}>
//           <Link to="/posts">Logout</Link>
//         </li>
//       </>
//     ) : (
//       <>
//         <li>
//           <Link to="/login">Login</Link>
//         </li>
//         <li>
//           <Link to="/register">Register</Link>
//         </li>
//       </>
//     )}
//   </ul>
// );

function MenuList({ user, onClick }) {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(LogOut());
    window.location.replace("/");
  };

  return (
    <div>
      <Menu as="div" className="inline-block text-left">
        <div className="flex">
          <Menu.Button className="inline-flex gap-2 w-full rounded-md bg-white md:px-4 py-2 text-sm font-medium text-slate-700 hover:bg-opacity-20 ">
            <div className="leading[80px] flex flex-col items-start">
              <p className="text-sm font-semibold ">
                {users?.firstName ?? users?.name}
              </p>
              <span className="text-sm text-purple-600 ">
                {user?.jobTitle ?? user?.email}
              </span>
            </div>

            <img
              src={
                user?.profileUrl ||
                "https://walnuteducation.com/static/core/images/icon-profile.png"
              }
              alt="user profile"
              className="w-10 h-10 rounded-full object-cover "
              onLoad={() => console.log("Image loaded successfully")}
              onError={() => console.error("Image loading error")}
              //image on navbar
            />

            <BiChevronsDown
              className="h-8 w-8 text-slate-600"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute z-50 right-2 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg focus:outline-none ">
            <div className="p-1 ">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to={`${
                      user?.accountType ? "user-profile" : "company-profile"
                    }`}
                    className={`${
                      active ? "bg-blue-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md p-2 text-sm`}
                    onClick={onClick}
                  >
                    <CgProfile
                      className={`${
                        active ? "text-white" : "text-gray-600"
                      } mr-2 h-5 w-5  `}
                      aria-hidden="true"
                    />
                    {user?.accountType ? "User Profile" : "Company Profile"}
                  </Link>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => handleLogout()}
                    className={`${
                      active ? "bg-purple-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <AiOutlineLogout
                      className={`${
                        active ? "text-white" : "text-gray-600"
                      } mr-2 h-5 w-5  `}
                      aria-hidden="true"
                    />
                    Log Out
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

const Navbar = () => {
  const user = useSelector((state) => state.user);
  // console.log("check_user", user);
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseNavbar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className="relative bg-[#f7fdfd] z-50">
        <nav className="container mx-auto flex items-center justify-between p-5">
          <div>
            <Link to="/" className="text-purple-600 font-bold text-xl">
              Job<span className="text-purple-400">QuestPro</span>
            </Link>
          </div>

          <ul className="hidden lg:flex text-purple-600 gap-10 text-base">
            <li>
              <Link to="/about-us">About</Link>
            </li>
            <li>
              <Link to="/">Find Job</Link>
            </li>
            <li>
              <Link to="/companies">Companies</Link>
            </li>
            <li>
              <Link to="/upload-job">Upload Job</Link>
            </li>
          </ul>

          <div className="hidden lg:block">
            {!user?.user?.token ? (
              <Link to="/user-auth">
                <CustomButton
                  title="Sign In"
                  containerStyles="text-purple-600 py-1.5 px-5 focus:outline-none hover:bg-blue-700 hover:text-white rounded-full text-base border border-purple-600"
                />
              </Link>
            ) : (
              <div>
                <MenuList user={users} />
              </div>
            )}
          </div>

          <button
            className="block lg:hidden text-slate-900"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <AiOutlineClose size={26} /> : <HiMenuAlt3 size={26} />}
          </button>
        </nav>

        {/* MOBILE MENU */}
        <div
          className={`${
            isOpen ? "absolute flex bg-[#f7fdfd] " : "hidden"
          } container mx-auto lg:hidden flex-col pl-8 gap-3 py-5`}
        >
          <Link to="/" onClick={handleCloseNavbar}>
            Find Job
          </Link>
          <Link to="/companies" onClick={handleCloseNavbar}>
            Companies
          </Link>
          <Link
            onClick={handleCloseNavbar}
            to={
              user?.user?.accountType === "seeker"
                ? "apply-history"
                : "upload-job"
            }
          >
            {user?.user?.accountType === "seeker"
              ? "Applications"
              : "Upload Job"}
          </Link>
          <Link to="/about-us" onClick={handleCloseNavbar}>
            About
          </Link>

          <div className="w-full py-10">
            {!user?.user?.token ? (
              <a href="/user-auth">
                <CustomButton
                  title="Sign In"
                  containerStyles={`text-blue-600 py-1.5 px-5 focus:outline-none hover:bg-blue-700 hover:text-white rounded-full text-base border border-blue-600`}
                />
              </a>
            ) : (
              <div>
                <MenuList user={users} onClick={handleCloseNavbar} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
