import { Outlet } from "react-router-dom";
import AsideL from "../components/AsideL";
import "../styles/main.css";

function PrivateLayout() {
  return (
    <>
      <div className="Playout flex fex-row  min-h-screen bg-gray-100">
        <AsideL />
        <Outlet />
      </div>
    </>
  );
}

export default PrivateLayout;
