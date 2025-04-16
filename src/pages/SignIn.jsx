import { NavLink } from "react-router-dom";
import { useUtilityMenu } from "../store/useStore";
import { useState } from "react";
import img from "../assets/login.png";

function SignIn() {

  //useState para guardar el email y la contraseña y el modo oscuro de manera global
  // ===================================================================
  const [email, setEmail] = useState("usuario@ejemplo.com");
  const [password, setPassword] = useState("password");
  const { isDarkMode } = useUtilityMenu();
  // ===================================================================

//#region handleLogin
// =====================================================================
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost/api/login", /*esta url es un ejemplo local hay que cambiarlo cuando se vaya a desplegar*/{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      //guardamos el token en el localStorage

      localStorage.setItem("token", data.token);
      console.log(data);
      console.log(email, password);
    } catch (error) {
      console.error(error);
    }
  };

//#endregion
// ======================================================================
  return (
    <>
      <div
        className={`${
          isDarkMode ? "bg-slate-950" : "bg-gray-100"
        } h-[93vh] flex flex-col justify-center items-center`}
      >
        <div className="flex justify-center items-center h-full">
          <img className="w-60 h-60" src={img} alt="img" />
        </div>

        <div
          className={`
            w-full max-w-md 
            ${isDarkMode ? "bg-slate-900" : "bg-white"}
            rounded-t-3xl shadow-2xl p-8 space-y-6 mt-auto
          `}
        >
          <form className="space-y-4" method="POST">
            <div>
              <label
                htmlFor="username"
                className={`block text-sm font-medium ${
                  isDarkMode ? "text-white" : "text-gray-700"
                }`}
              >
                Username
              </label>
              <input
                type="email"
                id="username"
                name="username"
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className={`block text-sm font-medium ${
                  isDarkMode ? "text-white" : "text-gray-700"
                }`}
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="off"
                className="mt-1 block w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
              />
            </div>
            {/*este button no puede ser un submit a pesar de que sea el envio de un formulario, muy importante*/}
            <button
              onClick={handleLogin}
              className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition"
            >
              Sign In
            </button>

            <p
              className={`text-center text-sm ${
                isDarkMode ? "text-white" : "text-gray-500"
              }`}
            >
              or continue with
            </p>
          </form>

          <div className="flex flex-col gap-2">
            <button className="w-full py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl flex flex-row items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-brand-google"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M20.945 11a9 9 0 1 1 -3.284 -5.997l-2.655 2.392a5.5 5.5 0 1 0 2.119 6.605h-4.125v-3h7.945z" />
              </svg>
              Google
            </button>
            <button className="w-full py-2 bg-blue-800 hover:bg-blue-900 text-white font-semibold rounded-xl flex flex-row items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
              </svg>
              Facebook
            </button>
            <button className="w-full py-2 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-xl flex flex-row items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="icon icon-tabler icons-tabler-filled icon-tabler-brand-github"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z" />
              </svg>
              GitHub
            </button>
          </div>

          <div
            className={`text-center text-sm mt-4 ${
              isDarkMode ? "text-white" : "text-gray-600"
            }`}
          >
            Don't have an account?{" "}
            <NavLink
              to="/getStarted"
              className="text-blue-600 hover:underline font-medium ml-4"
            >
              Sign Up
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
