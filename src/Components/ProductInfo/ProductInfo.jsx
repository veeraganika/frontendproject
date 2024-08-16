
import React from "react";
import { useLocation } from "react-router-dom";
import { useCart } from "../../CartContext";
import './ProductInfo.css'; 
import { toast } from "react-toastify";

const ProductInfo = () => {
  const { state } = useLocation();
  const { title, images, description, price, category, id,thumbnail,product,rating ,discountPercentage,returnPolicy} = state;
  
  const addToCart = () => {
    const newCart = {title,thumbnail,price}
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = [...storedCart, newCart];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    toast.success('Book added to cart!');
  };

  return (
    <div className="product-info">
      <img src={thumbnail} alt={title} height={200} />
      <h1>Title: {title}</h1>
      <p>Id: {id}</p>
      <h2>Category: {category}</h2>
      <h4>Price: &#8377;{price}</h4>
<h3>Rating:{rating}</h3>
<h5> Discount:{discountPercentage}</h5>
            <h3> rating:{rating}</h3>
            <h6> { returnPolicy}</h6>
      <div>
        <button className="btn btn-outline-primary" onClick={() => addToCart(state)}>Buy Now</button>
       
        <button className='btn btn-danger m-3' onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductInfo;
