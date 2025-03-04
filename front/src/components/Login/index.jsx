import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { INPUT_STYLE } from "../../config/constants";
import { signInUser } from "../../services/repository";
import { UserContext } from "../../Context/UserContext";

const Login = () => {
  let navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const [message, setMessage] = useState(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    console.log("Form data:", formData);
    const userInfo = await signInUser(formData);
    console.log("userInfo:", userInfo);
    if (userInfo.error)
      setMessage(`Ha ocurrido un error intentando acceder: ${userInfo.error}`);
    else {
      console.log("user3 ", userInfo);
      setUser(userInfo);
      navigate("/");
    }
  };

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="text-center mb-4">
        <h1 className="text-2xl font-bold">Bienvenido</h1>
        <p className="text-gray-500">Ingresa tus datos para continuar</p>
      </div>
      <div>
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto p-4 bg-white shadow-2xl rounded-xl"
        >
          <div className="mb-4">
            <p className="flex text-gray-700 font-bold mb-2">Nombre:</p>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Ingrese su nombre"
              value={formData.firstName}
              onChange={handleChange}
              required
              className={INPUT_STYLE}
            />
          </div>
          <div className="mb-4">
            <p className="flex text-gray-700 font-bold mb-2">Apellido:</p>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Ingrese su apellido"
              value={formData.lastName}
              onChange={handleChange}
              required
              className={INPUT_STYLE}
            />
          </div>
          <div className="mb-4">
            <p className="flex text-gray-700 font-bold mb-2">Correo:</p>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Ingrese su correo"
              value={formData.email}
              onChange={handleChange}
              required
              className={INPUT_STYLE}
            />
          </div>
          <button
            type="submit"
            className="px-6 bg-blue-500 text-white py-2 mt-5 rounded hover:bg-blue-700 cursor-pointer"
          >
            Ingresa
          </button>
        </form>
      </div>
      {message && (
        <div className="flex w-full max-w-md mx-auto p-4 bg-yellow-100 shadow-xl rounded-xl mt-6">
          <p> {message}</p>
        </div>
      )}
    </div>
  );
};

export { Login };
