import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { INPUT_STYLE } from "../../config/constants";
import { UserContext } from "../../Context/UserContext";
import { getAllProducts, saveSpecialPrice } from "../../services/repository";

const FormNewPrice = () => {
  const { user } = useContext(UserContext);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setLoading(true);
    async function fetchProducts() {
      const response = await getAllProducts();
      if (response.error) {
        setMessage(
          `Ha ocurrido un error obteniendo los productos: ${response.error}`
        );
      } else {
        setProducts(response);
      }
      setLoading(false);
    }
    fetchProducts();
  }, []);

  const handleProductChange = (e) => {
    setSelectedProduct(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    const priceData = {
      productId: selectedProduct,
      price: price,
      userId: user._id,
    };
    const response = await saveSpecialPrice(priceData);
    setLoading(false);
    setMessage(response);
  };

  return (
    <div className="flex flex-col justify-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md mx-auto p-4 bg-white shadow-md rounded"
      >
        <div className="text-left mb-4">
          <h1 className="text-2xl font-bold">Nuevo precio especial</h1>
          <p className="text-gray-500">
            Por favor seleccione el producto y establezca el precio
          </p>
        </div>
        <div className="my-4">
          <p className="flex text-gray-700 font-bold mb-2">Producto:</p>
          <select
            id="product"
            value={selectedProduct}
            onChange={handleProductChange}
            className={INPUT_STYLE}
            required
          >
            <option value="">Seleccione un producto</option>
            {products.map((product) => (
              <option key={product._id} value={product._id}>
                {product.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <p className="flex text-gray-700 font-bold mb-2">Precio:</p>
          <input
            type="number"
            id="price"
            value={price}
            onChange={handlePriceChange}
            className={INPUT_STYLE}
            required
          />
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700 cursor-pointer mt-4">
          Guardar
        </button>
        <Link to="/">
          <button className=" w-full bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 rounded mt-3  cursor-pointer">
            Regresar
          </button>
        </Link>
      </form>
      {loading && <p className="">Cargando...</p>}
      {message && (
        <div className="flex w-full max-w-md mx-auto p-4 bg-yellow-100 shadow-xl rounded-xl mt-6">
          <p> {message}</p>
        </div>
      )}
    </div>
  );
};

export { FormNewPrice };
