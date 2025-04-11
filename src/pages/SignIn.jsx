import { NavLink } from "react-router-dom";
import img from "../assets/sigla-3d-Telem-Iasi.png";

function SignIn() {
  return (
    <div className="h-[93vh]  bg-gray-900 flex flex-col justify-center items-center">

      <div className="flex justify-center">
        <img className="w-28 h-auto" src={img} alt="Logo" />
      </div>

      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 space-y-6">
        <form className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              required
              className="mt-1 block w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              autoComplete="off"
              className="mt-1 block w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition"
          >
            Sign In
          </button>

          <p className="text-center text-gray-500 text-sm">or continue with</p>
        </form>

        <div className="flex flex-col gap-2">
          <button className="w-full py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl">
            Google
          </button>
          <button className="w-full py-2 bg-blue-800 hover:bg-blue-900 text-white font-semibold rounded-xl">
            Facebook
          </button>
          <button className="w-full py-2 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-xl">
            GitHub
          </button>
        </div>

        <div className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?{" "}
          <NavLink
            to="/getStarted"
            className="text-blue-600 hover:underline font-medium"
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
