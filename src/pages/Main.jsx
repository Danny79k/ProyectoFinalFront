import { NavLink, useLocation, Outlet } from "react-router-dom";
import { FiMoreVertical } from "react-icons/fi";
import { HiHome } from "react-icons/hi";

function Main() {
  const location = useLocation();

  const getTitle = () => {
    if (location.pathname === "/home") return "News";
    if (location.pathname === "/home/settings") return "Settings";
    if (location.pathname.startsWith("/home/blog")) return "Blog";
    if (location.pathname.startsWith("/home/newsDetail")) return "News Detail";
    if (location.pathname.startsWith("/home/add_news")) return "Add News";
    if (location.pathname.startsWith("/home/my_posts")) return "My Posts";
    if (location.pathname.startsWith("/home/writers")) return "Writers";
    return "Error";
  };

  const getIcon = () => {
    if (location.pathname !== "/home") return <HiHome className="size-6" />;
    return <FiMoreVertical className="size-6" />;
  };

  const getIconLink = () => {
    if (location.pathname === "/home") return "/home/settings";
    return "/home";
  };

  return (
    <div className="main basis-[80%] bg-white p-2">
      <div className="main__container">
        <div className="main__container__header flex flex-row items-center justify-between p-2 mb-4">
          <h1 className="text-2xl font-bold p-2 ml-6">{getTitle()}</h1>

          <NavLink to={getIconLink()}>
            <div className="p-2 cursor-pointer hover:bg-gray-200">
              {getIcon()}
            </div>
          </NavLink>
        </div>

        <div className="main__container__content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Main;
