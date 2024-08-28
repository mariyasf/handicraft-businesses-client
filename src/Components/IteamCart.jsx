import React from 'react';

const IteamCart = ({ data }) => {
    const { image, price, quantity, productName } = data || {}
   


    return (
        <tr>

            <td className="h-12 w-12">
                <img src={image} alt={productName} />
            </td>
            <td>{productName}</td>
            <td>{quantity}</td>
            <td>${price}</td>
            <td>${price * quantity}</td>
            
        </tr>
    );
};

export default IteamCart;