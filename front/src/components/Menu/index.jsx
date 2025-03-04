import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

const Menu = () => {
  let navigate = useNavigate();
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);

  if (!user) {
    return <div></div>;
  }

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="w-full max-w-md mx-auto py-10 bg-white shadow-2xl rounded-xl bg">
        <p className="text-2xl font-bold">Por favor escoge una opción</p>
        <div className="flex  w-full max-w-md flex-col items-center mt-4">
          <Link to="/productos">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 w-xs cursor-pointer">
              Ver articulos
            </button>
          </Link>
          <Link to="/agregar">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 w-xs cursor-pointer">
              Subida de precios especiales
            </button>
          </Link>
          <Link to="/login">
            <button className="bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-3 w-xs cursor-pointer">
              Salir
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export { Menu };
