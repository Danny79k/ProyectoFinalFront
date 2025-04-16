import { Outlet } from "react-router-dom";
import Header from "./Header";

function layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default layout;
