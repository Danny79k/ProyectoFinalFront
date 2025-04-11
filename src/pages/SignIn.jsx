import Login from "../components/Login.jsx";
import GetStarted from "../components/GetStarted.jsx";

function SignIn() {

  

  if (localStorage.getItem("token")) {
    return <GetStarted />;
  }

  else {
    return <Login />;
  }
}

export default SignIn;
