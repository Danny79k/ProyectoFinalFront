import { Outlet } from "react-router-dom";
import AsideL from "../components/AsideL";
import AsideR from "../components/AsideR";
import "../styles/main.css";

function PrivateLayout() {
  return (
    <>
      <div className="Playout flex fex-row  min-h-screen bg-gray-100">
        <AsideL />
        <Outlet />
        <AsideR />
      </div>
    </>
  );
}

export default PrivateLayout;
