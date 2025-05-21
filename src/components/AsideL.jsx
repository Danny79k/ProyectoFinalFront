import { NavLink } from "react-router-dom";
import Seguidos from "./Seguidos";

import { IoPersonSharp } from "react-icons/io5";
import { BsClipboard2PlusFill } from "react-icons/bs";
import { RiUserFollowFill } from "react-icons/ri";
import { useUtilityMenu, useNewsStore } from "../store/useStore";
import { HiArrowNarrowLeft } from "react-icons/hi";

function AsideL() {
  const { isDarkMode, toggleTheme } = useUtilityMenu();
  const { setSearchTerm } = useNewsStore();

  const handleLogout = () => {
    try {
      fetch("https://jeffrey.informaticamajada.es/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      });
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("user");

      // Redirect to login page
      window.location.href = "/signin";
    } catch (error) {
      console.log(error);
    }
    // Clear session storage
  };
  return (
    <div className="asideL flex flex-col bg-gray-100 basis-[15%]">
      <div className="asideL__container mt-4 flex flex-col flex-grow">
        <div className="flex items-center ml-2 p-1">
          <h3>Usuario</h3>
        </div>

        <div className="buscador w-full mb-3 p-4 flex items-center justify-start">
          <input
            type="text"
            placeholder="Search..."
            className="block w-40 p-1 border rounded-md focus:outline-none placeholder:text-sm placeholder:text-gray-400"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="ml-2 w-40 flex flex-col items-start justify-start mb-4 space-y-1">
          <NavLink className="w-full" to="/home/my_posts">
            <div className="admin-options flex flex-row items-center p-2 hover:bg-gray-200">
              <IoPersonSharp className="text-cyan-900" />
              <p className="text-sm ml-2">My Posts</p>
            </div>
          </NavLink>
          <NavLink className="w-full" to="/home/add_news">
            <div className="admin-options w-full flex flex-row items-center p-2 hover:bg-gray-200">
              <BsClipboard2PlusFill className="text-green-900" />
              <p className="text-sm ml-2">New Posts</p>
            </div>
          </NavLink>
        </div>

        <div className="ml-2 flex flex-col items-start justify-center mb-4 space-y-1">
          <div className="flex flex-row items-center p-2">
            <RiUserFollowFill className="text-cyan-900" />
            <p className="text-sm ml-2">Following</p>
          </div>
          <Seguidos />
        </div>

        <div className="ml-2 mt-5 flex flex-col items-start justify-center">
          <div className="w-full flex flex-col p-2 space-y-2">
            <NavLink to="/home">
              <p className="text-xs Al-links">Suport</p>
            </NavLink>
            <NavLink to="/home">
              <p className="text-xs  Al-links">Rules</p>
            </NavLink>
            <NavLink to="/home">
              <p className="text-xs  Al-links">Documentation</p>
            </NavLink>
          </div>
        </div>
      </div>

      <div className="dark-mode-asideL mt-auto p-2 mb-0">
        <button
          onClick={toggleTheme}
          className="flex items-center w-full px-4 py-3 text-gray-800 hover:bg-gray-200 transition-colors"
        >
          {isDarkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
            </svg>
          )}
          <span className="ml-3 text-sm">Dark Mode</span>
        </button>
      </div>

      <div className="logout mt-auto p-2 mb-0">
        <button
          onClick={handleLogout}
          className="flex items-center w-full px-4 py-3 text-gray-800 transition-colors"
        >
          <HiArrowNarrowLeft className="text-dark" />

          <span className="ml-3 text-sm">Logout</span>
        </button>
      </div>
    </div>
  );
}

export default AsideL;
