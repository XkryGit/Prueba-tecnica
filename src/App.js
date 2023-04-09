import { useEffect, useState } from "react";
import "./App.scss";

function App() {
  const [products, setProducts] = useState([]);
  const [productsFilter, setProductsFilter] = useState([]);
  const [categories, setCategories] = useState([]);

  let productsInitial = [];

  function handleProductInitial(x) {
    productsInitial = [...x];
  }

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((response) => response.json())
      .then((json) => handleProductInitial(json))
      .then(() => setProductsFilter(productsInitial))
      .then(() => setProducts(productsInitial))
      .catch((error) => alert("Ha ocurrido un error, inténtelo más tarde."));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/categories`)
      .then((response) => response.json())
      .then((json) => setCategories(json))
      .catch((error) => alert("Ha ocurrido un error, inténtelo más tarde."));
  }, []);

  return (
    <>
      <h1 className="title">Prueba técnica Adolfo Zambrana</h1>
      <div className="filter-button-container">
        <button
          className="filter-button"
          onClick={() => setProductsFilter(products)}
        >
          ALL CATEGORIES
        </button>
        {categories.map((categorie) => (
          <>
            <button
              className="filter-button"
              onClick={() =>
                setProductsFilter(
                  products.filter((product) => product.category === categorie)
                )
              }
            >
              {categorie.toUpperCase()}
            </button>
          </>
        ))}
      </div>
      <ul className="product-list-container">
        <li className="product-list-headers">
          <span className="list-header">Image</span>
          <span className="list-header">Name</span>
          <span className="list-header">Price</span>
        </li>

        {productsFilter.map((product) => (
          <>
            <li className="product-list-product">
              <img
                className="list"
                src={product.image}
                alt="../public/imgAlt.png"
              />
              <h3 className="list">{product.title}</h3>
              <span className="list">{product.price}€</span>
            </li>
          </>
        ))}
      </ul>
    </>
  );
}

export default App;
