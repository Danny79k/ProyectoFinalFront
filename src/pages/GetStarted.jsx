import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "../styles/getStarted.css";
import img from "../assets/Tele M.png";
import { HiArrowRight } from "react-icons/hi";

function SignUp() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [name, setName] = useState("Usuario de prueba");
  const [email, setEmail] = useState("usuario@ejemplo.com");
  const [password, setPassword] = useState("password");
  const [passwordConfirmation, setPasswordConfirmation] = useState("password");
  const [imgUrl, setImgUrl] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!termsAccepted) {
      alert("Debes aceptar los términos y condiciones.");
      return;
    }

    try {
      const res = await fetch(
        "https://jeffrey.informaticamajada.es/api/signin",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            password,
            password_confirmation: passwordConfirmation,
            img: imgUrl,
            type: "standard",
          }),
        }
      );

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
    <div className="getStarted-div flex flex-col  justify-center items-center">

      <div className="getStarted-img-div flex flex-col justify-center items-center w-full ">
        <h1 className="text-1 text-3xl font-bold text-center">Get Started</h1>
        <img className="w-28 h-28" src={img} alt="img" />

        <h1 className="text-2 text-3xl font-bold text-center">Get Started</h1>
      </div>

      <div className="getStarted-form-div w-full max-w-md shadow-2xl shadow-sky-900 p-8 space-y-4">
        <form className="space-y-4" onSubmit={handleRegister}>
          <div className="flex flex-row justify-around items-center">
            {[1, 2, 3].map((num) => (
              <span
                key={num}
                className={`rounded-full p-3 w-5 h-5 flex items-center justify-center font-semibold text-base ${
                  step === num
                    ? "bg-blue-300 text-black"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                {num}
              </span>
            ))}
          </div>

          {step === 1 && (
            <>
              <div>
                <label htmlFor="Email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  className="mt-1 block w-full py-1 border rounded-md focus:outline-none bg-gray-100"
                />
              </div>

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
                  autoComplete="off"
                  className="mt-1 block w-full py-1 border rounded-md focus:outline-none bg-gray-100"
                />
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div>
                <label
                  htmlFor="newPassword"
                  className="block text-sm font-medium"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  id="newPassword"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="new-password"
                  className="mt-1 block w-full py-1 border rounded-md focus:outline-none bg-gray-100"
                />
              </div>

              <div>
                <label
                  htmlFor="passwordConfirmation"
                  className="block text-sm font-medium"
                >
                  Confirmar contraseña
                </label>
                <input
                  type="password"
                  id="passwordConfirmation"
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  required
                  autoComplete="new-password"
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

              <div className="space-y-2">
                <label htmlFor="terms" className="block text-sm font-medium">
                  Términos y condiciones
                </label>
                <div className="check-form flex items-center p-3 border rounded-md bg-gray-100">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                    className="w-5 h-5 text-red-600 bg-white border-gray-300 rounded focus:ring-red-500"
                  />
                  <label
                    htmlFor="terms"
                    className="check-text ml-3 text-sm text-gray-700"
                  >
                    Acepto los{" "}
                    <NavLink
                      to="/terms"
                      target="_blank"
                      className="check-link text-red-700 hover:underline"
                    >
                      términos de servicio y políticas de seguridad
                    </NavLink>
                  </label>
                </div>
              </div>
            </>
          )}

          <div className="flex flex-row justify-around w-full mx-auto">
            {step > 1 && (
              <button
                type="button"
                className="w-20 py-2 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-xl transition"
                onClick={prevStep}
              >
                Back
              </button>
            )}
            {step < 3 && (
              <button
                type="button"
                className="w-20 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition"
                onClick={nextStep}
              >
                Next
              </button>
            )}
            {step === 3 && (
              <button
                type="submit"
                className="flex items-center justify-center text-2xl w-20 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition"
              >
                <HiArrowRight />
              </button>
            )}
          </div>

          <p className="text-center text-sm">or continue with</p>
        </form>

        {/* Aquí puedes añadir los botones de redes sociales si lo deseas */}
      </div>
    </div>
  );
}

export default SignUp;
