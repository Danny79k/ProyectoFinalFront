import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import GetStarted from "./pages/GetStarted";
import Contact from "./pages/Contact";
import PrivateLayout from "./layouts/PrivateLayout";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import Home from "./components/Home";
import Settings from "./components/Settings";
import NewsDetail from "./components/NewsDetail";
import { useUtilityMenu } from "./store/useStore";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { isDarkMode } = useUtilityMenu();

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light"
    );
  }, [isDarkMode]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<About />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/getStarted" element={<GetStarted />} />
            <Route path="/contact" element={<Contact />} />
          </Route>

          <Route element={<PrivateLayout />}>
            <Route path="/home" element={<Main />}>
              <Route index element={<Home />} />
              <Route path="settings" element={<Settings />} />
              <Route path="newsDetail/:id" element={<NewsDetail />} />
              <Route path="blog" element={<h1>Blog page</h1>} />
              <Route path="add_news"></Route>
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

      {/* Toast notifications usando la libreria de ReactToastif para tener unos alerts esteticos y facil*/}

      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={isDarkMode ? "dark" : "light"}
      />
    </>
  );
}

export default App;
