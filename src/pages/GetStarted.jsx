import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/signIn.css";
import img from "../assets/login.png";

function SignUp() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);

  const [name, setName] = useState("Usuario de prueba");
  const [email, setEmail] = useState("usuario@ejemplo.com");
  const [password, setPassword] = useState("password");
  const [passwordConfirmation, setPasswordConfirmation] = useState("password");
  const [imgUrl, setImgUrl] = useState("");
  const [type, setType] = useState("standard");

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://jeffrey.informaticamajada.es/api/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          password,
          password_confirmation: passwordConfirmation,
          img: imgUrl,
          type,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Error al registrar usuario");
        console.error(data.errors);
        return;
      }

      sessionStorage.setItem("token", data.token);
      sessionStorage.setItem("user", JSON.stringify(data.user));
      navigate("/home");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="signIn-div flex flex-col justify-center items-center">
      <div className="signIn-img-div flex justify-center items-center w-full">
        <img className="w-48 h-48 md:w-64 md:h-64" src={img} alt="img" />
      </div>

      <div className="signIn-form-div w-full max-w-md rounded-3xl shadow-2xl shadow-sky-900 p-8 space-y-4">
        <form className="space-y-4" onSubmit={handleRegister}>
          {step === 1 && (
            <>
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="mt-1 block w-full py-1 border rounded-md focus:outline-none bg-gray-100"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 block w-full py-1 border rounded-md focus:outline-none bg-gray-100"
                />
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div>
                <label htmlFor="password" className="block text-sm font-medium">
                  Contraseña
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mt-1 block w-full py-1 border rounded-md focus:outline-none bg-gray-100"
                />
              </div>

              <div>
                <label htmlFor="passwordConfirmation" className="block text-sm font-medium">
                  Confirmar contraseña
                </label>
                <input
                  type="password"
                  id="passwordConfirmation"
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  required
                  className="mt-1 block w-full py-1 border rounded-md focus:outline-none bg-gray-100"
                />
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div>
                <label htmlFor="img" className="block text-sm font-medium">
                  URL de imagen (opcional)
                </label>
                <input
                  type="url"
                  id="img"
                  value={imgUrl}
                  onChange={(e) => setImgUrl(e.target.value)}
                  className="mt-1 block w-full py-1 border rounded-md focus:outline-none bg-gray-100"
                />
              </div>

              {/* <div>
                <label htmlFor="type" className="block text-sm font-medium">
                  Tipo de cuenta
                </label>
                <select
                  id="type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="mt-1 block w-full py-1 border rounded-md focus:outline-none bg-gray-100"
                >
                  <option value="standard">Standard</option>
                  <option value="premium">Premium</option>
                  <option value="writer">Writer</option>
                </select>
              </div> */}
            </>
          )}

          <div className="flex justify-between">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-black font-medium rounded-xl transition"
              >
                Atrás
              </button>
            )}

            {step < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition ml-auto"
              >
                Siguiente
              </button>
            ) : (
              <button
                type="submit"
                className="w-full py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition"
              >
                Crear cuenta
              </button>
            )}
          </div>
        </form>

        <div className={`text-center text-sm`}>
          ¿Ya tienes cuenta?
          <a
            href="/signIn"
            className="text-blue-600 hover:underline font-medium ml-1"
          >
            Iniciar sesión
          </a>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
