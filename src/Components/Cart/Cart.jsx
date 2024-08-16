
import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

const Cart = () => {
  // const navigate = useNavigate();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('cart')) || [];
    setFavorites(storedFavorites);
  }, []);

  
  const removeFromCart = (index) => {
    const updatedFavorites = favorites.filter((_, i) => i !== index);
    setFavorites(updatedFavorites);
    localStorage.setItem('cart', JSON.stringify(updatedFavorites));
  };

  return (
    <>
      <h2 className='text-center'>Your Cart</h2>
      <div className="text-center pt-5 cart border border-dark w-50 m-auto bg-info text-dark">
        {favorites.length === 0 ? (
          <p>Your Cart is empty</p>
        ) : (
          favorites.map((product, index) => (
            <div key={index} className='d-flex justify-content-around align-items-center gap-5 border border-1 m-1 p-2'>
              <div>
                <img src={product.thumbnail} alt="" height={100} />
              </div>
              <div>
                <p>{product.title}</p>
              </div>
              <div>
                <p>Price: &#8377;{product.price}</p>
              </div>
              <div>
                <button onClick={() => removeFromCart(index)}>Remove</button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Cart;
