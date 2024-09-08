import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Register.css";
import axios from "axios";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";


export const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [lastname, seLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerService = async (e) => {
    e.preventDefault();

    const URL = import.meta.env.VITE_URL_BASE;

    const data = {
        name: name,
        lastname: lastname,
        email: email,
        password: password
    }

    try {
        const resp = await axios.post(`${URL}/usuarios/registrar`,
          data
        );
  
        if (resp.status === 201) {
          Swal.fire({
            title: '¡Bienvenido!',
                  text: 'Registro exitoso',
                  icon: 'success',
                  confirmButtonText: 'Entendido',
          }).then(() => {
            navigate("/login");
          });
        }
      } catch (err) {
        if (err.response) {
            Swal.fire({
                title: 'Error',
                text: 'Hubo un problema al registrarse. Por favor, verifica tus credenciales e intenta nuevamente.',
                icon: 'error',
                confirmButtonText: 'Entendido'
            });
          
        }
      }
    };
  

  return (
    <div className="register-container">
      <div className="register-header">
        <h2>Create Account</h2>
        <p>Lets Create Account Together</p>
      </div>
      <form className="register-form">
      <label htmlFor="email">Your Name</label>
        <input
          type="text"
          id="email"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
      <label htmlFor="email">Your Last Name</label>
        <input
          type="text"
          id="email"
          placeholder="last name"
          onChange={(e) => seLastname(e.target.value)}
        />
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

        <button type="submit" className="register-button" onClick={registerService}>
          Sign In
        </button>
      </form>

      <div className="signin-link">
        <p className="linkSignin">
            Already Have An Account? <a href="/login">Sign in</a>
        </p>
      </div>
    </div>
  );
};
