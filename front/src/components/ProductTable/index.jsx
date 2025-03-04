import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../../services/repository";
import { UserContext } from "../../Context/UserContext";
import { TABLE_HEADER } from "../../config/constants";

const ProductTable = () => {
  const { user } = useContext(UserContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setLoading(true);
    async function fetchProducts() {
      const response = await getProducts(user._id);
      if (response.error) {
        setMessage(`Ha ocurrido un error: ${response.error}`);
      } else {
        setProducts(response);
      }
      setLoading(false);
    }
    fetchProducts();
  }, []);

  return (
    <div className="overflow-x-auto">
      <div className="flex justify-between items-center">
        <p className="flex text-2xl font-bold">Listado de productos</p>
        <Link to="/">
          <button className="bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-3  cursor-pointer">
            Regresar
          </button>
        </Link>
      </div>
      <table className="min-w-full bg-white mt-4">
        <thead className="border  border-gray-200">
          <tr>
            {TABLE_HEADER.map((element) => {
              return (
                <th
                  key={element.key}
                  className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700"
                >
                  {element.title}
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody className="border  border-gray-200">
          {products.map((product) => (
            <tr key={product._id}>
              {TABLE_HEADER.map((element) => {
                if (element.key === "tags") {
                  return (
                    <td className="py-2 px-4 border-b border-gray-200">
                      {product[element.key].map((tag) => (
                        <span
                          key={`${product._id}-${tag}`}
                          className="bg-gray-200 text-gray-800 rounded-full text-xs px-2 py-1 mr-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </td>
                  );
                }
                return (
                  <td className="py-2 px-4 border-b border-gray-200">
                    <div className="text-left">{product[element.key]}</div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      {loading && <p className="">Cargando...</p>}
      {message && (
        <div className="flex w-full  mx-auto p-4 bg-yellow-100 shadow-xl rounded-xl mt-6">
          <p> {message}</p>
        </div>
      )}
    </div>
  );
};

export { ProductTable };
