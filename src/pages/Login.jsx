import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import axios from "axios";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";


export const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginService = async (e) => {
    e.preventDefault();

    const URL = import.meta.env.VITE_URL_BASE;

    const data = {
      email: email,
      password: password,
    };

    try {
        const resp = await axios.post(`${URL}/usuarios/login`,
          data
        );
  
        if (resp.status === 200) {
          Swal.fire({
            title: "¡Bienvenido!",
            text: "Inicio de sesión exitoso",
            icon: "success",
            confirmButtonText: "Entendido",
          }).then(() => {
            navigate("/productos");
          });
        }
      } catch (err) {
        if (err.response) {
          if (err.response.status === 404) {
            Swal.fire({
              title: "Error",
              text: "El usuario no ha sido encontrado, por favor verifica tus credenciales",
              icon: "question",
              confirmButtonText: "Entendido",
            });
          }
        } else {
          Swal.fire({
            title: "Error",
            text: "No se pudo conectar con el servidor. Por favor, intenta más tarde.",
            icon: "error",
            confirmButtonText: "Entendido",
          });
        }
      }
    };
  

  return (
    <div className="login-container">
      <div className="login-header">
        <h2>Hello Again!</h2>
        <p>Welcome Back Youve Been Missed!</p>
      </div>
      <form className="login-form">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          placeholder="alissonbecker@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <div className="password-container">
          <input
            type={passwordVisible ? "text" : "password"}
            id="password"
            placeholder="••••••••"
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="toggle-password" onClick={togglePasswordVisibility}>
            {passwordVisible ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>

        <button type="submit" className="login-button" onClick={loginService}>
          Sign In
        </button>
      </form>

      <div className="signup-link">
        <p className="linkSignup">
          Dont Have An Account? <a href="/register">Sign Up For Free</a>
        </p>
      </div>
    </div>
  );
};
