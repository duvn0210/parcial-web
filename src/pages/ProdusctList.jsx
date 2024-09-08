import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'; // Importa el hook useNavigate
import axios from "axios";
import '../styles/ProductList.css';
import Swal from "sweetalert2";
import tenis1 from '../assets/tenis1.png';
import tenis2 from '../assets/tenis2.png';
import tenis3 from '../assets/tenis3.png';
import tenis4 from '../assets/tenis4.png';
import tenis5 from '../assets/tenis5.png';
import tenis6 from '../assets/tenis6.png';
import { FaHeart } from 'react-icons/fa';  // Importar el ícono del corazón

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); // Hook para navegar entre rutas

  const localProducts = [
    {
      id: 1,
      nombre: "Nike Jordan",
      precio: "58.7",
      imagen: tenis1,
      colores: ['yellow', 'green']
    },
    {
      id: 2,
      nombre: "Nike Air Max",
      precio: "37.8",
      imagen: tenis2,
      colores: ['blue', 'gray']
    },
    {
      id: 3,
      nombre: "Nike Club Max",
      precio: "47.7",
      imagen: tenis3,
      colores: ['yellow', 'blue']
    },
    {
      id: 4,
      nombre: "Nike Air Max Pro",
      precio: "57.6",
      imagen: tenis4,
      colores: ['orange', 'blue']
    },
    {
      id: 5,
      nombre: "Nike Jordan X",
      precio: "37.8",
      imagen: tenis5,
      colores: ['yellow', 'green']
    },
    {
      id: 6,
      nombre: "Nike Jordan",
      precio: "40",
      imagen: tenis6,
      colores: ['blue', 'green']
    },
  ];


  // Consumo de la API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${URL}/productos/listar`);

        if (response.status === 200) {
          setProducts(localProducts);
        }
      } catch (err) {
        if (err.response) {
            Swal.fire({
                title: 'Error',
                text: 'Hubo un problema al mostrar los productos. Por favor intenta más tarde.',
                icon: 'error',
                confirmButtonText: 'Entendido'
            })
        }
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="main-container">
        <p>Products</p>
    <div className="product-grid">
      {products.map((product, index) => (
        <div
          key={product.id}
          className="product-card"
          onClick={index === 0 ? () => navigate('/primer-producto') : null}
        >
          <div className="heart-icon">
            <FaHeart />
          </div>
          <img src={product.imagen} alt={product.nombre} className="product-image" />
          <div className="product-info">
            <p className="product-status">BEST SELLER</p>
            <h3 className="product-name">{product.nombre}</h3>
            <div className="price-colors">
              <p className="product-price">${product.precio}</p>
              <div className="color-options">
                {product.colores.map((color, index) => (
                  <div key={index} className={`color-circle ${color}`}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ProductList;
