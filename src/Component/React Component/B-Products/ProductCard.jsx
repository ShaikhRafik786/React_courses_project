import React from 'react';

const ProductCard = ({item}) => {
    return (
        <div>
            <h3>{item.title.slice(0, 20)+ "..."}</h3>
            <img src={item.image}width="250px" height="250px" alt="" />
            <h3>Price: ${item.price}</h3>
            <button>Add To Cart</button>
         
                <button>View Details</button>
            
        </div>
    );
};

export default ProductCard;