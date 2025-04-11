import { Outlet } from "react-router-dom";
import Header from "./Header";

function layout() {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default layout;
