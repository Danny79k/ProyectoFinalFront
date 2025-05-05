import { NavLink } from "react-router-dom";
import { FiMoreVertical } from "react-icons/fi";

function Main() {
  return (
    <div className="main basis-[75%] bg-white p-2">
      <div className="main__container">
        <div className="main__container__header flex flex-row items-center justify-between p-2 mb-4">
          <h1 className="text-2xl font-bold p-2">News</h1>
          <NavLink to="settings">
            <div className="p-2 cursor-pointer hover:bg-gray-200">
              <FiMoreVertical className="size-6" />
            </div>
          </NavLink>
        </div>

        <div className="main__container__content">
          <h1>Welcome to the Main Component</h1>
          <p>This is the main content area.</p>
        </div>
      </div>
    </div>
  );
}

export default Main;
