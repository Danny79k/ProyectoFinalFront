import { NavLink } from "react-router-dom";
import { useUtilityMenu } from "../store/useStore";
import { useEffect } from "react";
import img from "../assets/Tele M.png";
import "../styles/Header.css";

function Header() {
  const { isDarkMode, menuOpen, toggleTheme, toggleMenu } = useUtilityMenu();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      <header className="header-div w-[100%] flex justify-between items-center">
        <NavLink to="/" className="overflow-hidden">
          <img src={img} alt="Tele M" className="size-20" />
        </NavLink>

        <button
          className={`butom-header mr-2 ${
            menuOpen ? "header-rotate-y-hidden" : "header-rotate-y"
          }`}
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
        </button>

        <button
          className={`butom-header absolute right-4 ${
            menuOpen ? "header-rotate-y" : "header-rotate-y-hidden"
          }`}
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
        </button>
      </header>

      <div
        className={`headerMenu-div flex flex-col absolute overflow-auto ${
          menuOpen ? "header-fade" : "header-fade-hidden"
        }`}
      >
        <ul
          className=" px-4 py-4 space-y-2 divide-y divide-gray-500"
          onClick={toggleMenu}
        >
          <li className="py-2">Prcing</li>
          <li className="py-2">
            Resources
            <div>
              <ul className="text-sm  ml-5 mt-2 space-y-1">
                <li>
                  <div className="inline-flex items-center">
                    <NavLink className="flex flex-row" to="/documentation">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-clipboard-text mr-1"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                        <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
                        <path d="M9 12h6" />
                        <path d="M9 16h6" />
                      </svg>
                      Documentation
                    </NavLink>
                  </div>
                </li>

                <li>
                  <div className="inline-flex items-center">
                    <NavLink className="flex flex-row" to="/rules">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-book mr-1"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                        <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                        <path d="M3 6l0 13" />
                        <path d="M12 6l0 13" />
                        <path d="M21 6l0 13" />
                      </svg>
                      Rules
                    </NavLink>
                  </div>
                </li>

                <li>
                  <div className="inline-flex items-center">
                    <NavLink className="flex flex-row" to="/suport">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-message-report mr-1"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" />
                        <path d="M12 8v3" />
                        <path d="M12 14v.01" />
                      </svg>
                      Suport
                    </NavLink>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li className="py-2">
            Community
            <div>
              <ul className="text-sm  ml-5 mt-2 space-y-1">
                <li>
                  <div className="inline-flex items-center">
                    <NavLink
                      target="_blank"
                      className="flex flex-row"
                      to="https://www.facebook.com/Telem.ro"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook mr-1"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                      </svg>
                      Facebook
                    </NavLink>
                  </div>
                </li>
                <li>
                  <div className="inline-flex items-center">
                    <NavLink
                      target="_blank"
                      className="flex flex-row"
                      to="https://www.tiktok.com/@telem.ro?_t=ZN-8vNqXtge5DS&_r=1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-brand-tiktok mr-1"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z" />
                      </svg>
                      Tiktok
                    </NavLink>
                  </div>
                </li>
                <li>
                  <div className="inline-flex items-center">
                    <NavLink
                      target="_blank"
                      className="flex flex-row"
                      to="https://github.com/Danny79k/ProyectoFinalFront"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github mr-1"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                      </svg>
                      GitHub
                    </NavLink>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>

        <div className="px-4 border-t border-gray-500">
          <li className="pt-4 flex">
            <button onClick={toggleTheme} className="flex items-center">
              <span className="mr-2">Dark Mode</span>

              {isDarkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="mx-auto"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mx-auto"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                </svg>
              )}
            </button>
          </li>
        </div>

        <div className="headerWelcome-div flex mt-auto" onClick={toggleMenu}>
          <ul className="flex flex-col md:flex-row md:justify-around w-full px-4 py-4 items-center md:items-center">
            <li className="text-sm bg-slate-300 w-[70%] md:w-[40%] text-center rounded-full border-none mb-4 md:mb-0 ">
              <NavLink to="/signIn" className="block w-full h-full p-3">
                SIGN IN
              </NavLink>
            </li>
            <li className="text-sm bg-slate-300 w-[70%] md:w-[40%] text-center rounded-full border-none">
              <NavLink to="/getStarted" className="block w-full h-full p-3">
                GET STARTED
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
