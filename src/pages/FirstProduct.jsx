import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/FirstProduct.css";
import tenis1 from "../assets/tenis1.png";

const FirstProduct = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [error, setError] = useState(null);
  const selectedProductId = "66dc725208f4bb2943b62e00";

  useEffect(() => {
    if (selectedProductId) {
      const fetchProductDetails = async () => {
        try {
          const response = await axios.get(
            `https://parcial.nucleoslabs.com.co/api/v1/productos/listar/${selectedProductId}`
          );
          if (response.status === 200) {
            setSelectedProduct(response.data.result || {});
          } else {
            throw new Error(
              `No se encontraron registros. Código de estado: ${response.status}`
            );
          }
        } catch (err) {
          console.error(
            "Error al cargar los detalles del producto:",
            err.message
          );
          setError(
            "No se encontraron registros. Mostrando datos predeterminados."
          );
          setSelectedProduct({
            nombre: "Nike Air Jordan",
            descripcion:
              "Air Jordan is an American brand of basketball shoes athletic, casual, and style clothing produced by Nike...",
            precio: "849.69",
            imagen: tenis1,
            tallas: [38, 39, 40, 41, 42, 43],
          });
        }
      };

      fetchProductDetails();
    }
  }, [selectedProductId]);

  if (error) {
    console.warn(error);
  }

  if (!selectedProduct) {
    return <div>Loading...</div>;
  }

  return (
    <div className="first-product-container">
      <div className="product-header">
        <h1>MEN SHOE</h1>
        <img
          src={selectedProduct.imagen}
          alt={selectedProduct.nombre || "Nike Air Jordan"}
          className="product-image-first-product"
        />
      </div>
      <div className="product-details">
        <p className="best-seller">BEST SELLER</p>
        <h2 className="product-title">
          {selectedProduct.nombre || "Nike Air Jordan"}
        </h2>
        <p>$967.800</p>
        <p className="product-description">
          {selectedProduct.descripcion ||
            "Air Jordan is an American brand of basketball shoes athletic, casual, and style clothing produced by Nike..."}
        </p>
        <div className="product-sizes">
          <div className="title-sizes">
            <h3>Size</h3>
            <p>EU US UK</p>
          </div>
          <div className="size-options">
            {selectedProduct.tallas.map((talla) => (
              <span key={talla}>{talla}</span>
            ))}
          </div>
        </div>
        <div className="text-button">
          <div className="product-price">
            <h3>Price</h3>
            <p>${selectedProduct.precio}</p>
          </div>
          <button className="add-to-cart-button">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FirstProduct;
