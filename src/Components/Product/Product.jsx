
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      setProducts(data.products);
      setFilteredProducts(data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchTerm(query);
    filterProducts(query);
  };

  const filterProducts = (query) => {
    if (!query) {
      setFilteredProducts(products);
      return;
    }
    const lowerCaseQuery = query.toLowerCase();
    const filteredData = products.filter((product) =>
      product.title.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredProducts(filteredData);
  };

  return (
    <div className="products-container">
      <input
        placeholder="Search Product Title here"
        className="searchInput"
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul className="products-list display-flex flex-wrap justify-content-center">
        {filteredProducts.map((product) => (
          <li key={product.title} className="product-card">
            <img src={product.thumbnail} alt={product.title} height={200} />
            <h2>{product.title}</h2>
            <p>{ product.id}</p>
            <h3>Price: &#8377;{product.price}</h3>
            {/* <h3>{product.discountPercentage}</h3> */}
            <h3> rating:{product.rating}</h3>
            <h6> { product.returnPolicy}</h6>
            <Link className="btn btn-primary m-1" to={`/ProductInfo/${product.title}`} state={product}>
              View
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
