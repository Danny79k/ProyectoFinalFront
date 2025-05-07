import { NavLink } from "react-router-dom";
import "../styles/home.css";
import { HiTemplate } from "react-icons/hi";
import { ImCalendar } from "react-icons/im";
import { SiExercism } from "react-icons/si";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";


export function Home() {


  
  return (
    <div className="home flex flex-col w-full h-full p-4">
      <div className="home-opcion flex flex-row w-full h-full px-2">
        <div className="home-opcions flex flex-row justify-center items-center space-x-1 cursor-pointer">
          <SiExercism className="size-5" />
          <p>Follow</p>
        </div>
        <div className="home-opcions opicions-active flex flex-row justify-center items-center ml-7 space-x-1 cursor-pointer">
          <HiTemplate className="size-5" />
          <p>List</p>
        </div>
        <div className="home-opcions flex flex-row justify-center items-center ml-7 space-x-1 cursor-pointer">
          <ImCalendar className="size-4" />
          <p>breaking news</p>
        </div>

        <div className="cambio h-8 flex flex-row justify-center items-center px-4 ml-auto cursor-pointer hover:bg-gray-200 rounded-xl">
          <NavLink
            className={"flex flex-row justify-center items-center space-x-1"}
            to="/home/blog"
          >
            <HiArrowPathRoundedSquare className="size-5" />
            <p>Blog</p>
          </NavLink>
        </div>
      </div>

      <div className="home-content flex flex-col w-full h-full p-2 mt-4"></div>
    </div>
  );
}

export default Home;
