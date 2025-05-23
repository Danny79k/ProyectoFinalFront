import { NavLink, useNavigate } from "react-router-dom";
import { useUtilityMenu } from "../store/useStore";
import { useState, useEffect } from "react";
import "../styles/signIn.css";
import img from "../assets/login.png";

function SignIn() {

  const navigate = useNavigate();  

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      navigate("/home");
    }
  }, [navigate]);
  

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
      const res = await fetch("https://jeffrey.informaticamajada.es/api/login", /*esta url es un ejemplo local hay que cambiarlo cuando se vaya a desplegar*/{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (!res.ok) {
        // Mostrar error si las credenciales no son válidas
        console.error("Credenciales incorrectas");
        alert(data.message || "Email o contraseña incorrectos.");
        return; // detenemos aquí para que no siga
      }
      //guardamos el token en el sessionStorage
      // ================================================================
      sessionStorage.setItem("token", data.token);
      // ================================================================

      // guardamos el usuario en el sessionStorage
      // ================================================================
      sessionStorage.setItem("user", JSON.stringify(data.user));
      // ================================================================ 

      console.log(data);
      console.log(email, password);
      navigate('/home');
    } catch (error) {
      console.error(error);
    }
  };

  //#endregion
  // ======================================================================
  return (
    <>
      <div className="signIn-div flex flex-col justify-center items-center">
        <div className="signIn-img-div flex justify-center items-center w-full">
          <img className="w-48 h-48 md:w-64 md:h-64" src={img} alt="img" />
        </div>

        <div className="signIn-form-div w-full max-w-md rounded-3xl shadow-2xl shadow-sky-900 p-8 space-y-4">
          <form className="space-y-4" method="POST">
            <div>
              <label
                htmlFor="username"
                className={`block text-sm font-medium `}
              >
                Email
              </label>
              <input
                type="email"
                id="username"
                name="username"
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full py-1 border rounded-md focus:outline-none  bg-gray-100"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className={`block text-sm font-medium `}
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
                className="mt-1 block w-full py-1 border rounded-md focus:outline-none bg-gray-100"
              />
            </div>
            {/*este button no puede ser un submit a pesar de que sea el envio de un formulario, muy importante*/}
            <button
              onClick={handleLogin}
              className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition"
            >
              Sign In
            </button>

            <p className={`text-center text-sm `}>or continue with</p>
          </form>

          <div className="continueWith-div flex flex-row gap-2">
            <button className="w-full py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl flex flex-row items-center justify-center gap-2">
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
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-google"
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
              </svg>
              Facebook
            </button>
            <button className="w-full py-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-xl flex flex-row items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="icon icon-tabler icons-tabler-filled icon-tabler-brand-github"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z" />
              </svg>
              GitHub
            </button>
          </div>

          <div className={`text-center text-sm `}>
            Don't have an account?{" "}
            <NavLink
              to="/getStarted"
              className="text-blue-600 hover:underline font-medium ml-1"
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
