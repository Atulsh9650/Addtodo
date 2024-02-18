import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaShoppingCart } from "react-icons/fa";
import { TbShoppingCartOff } from "react-icons/tb";

const Fooditem = ({ items, handleBuyClick, boughtItems }) => {
  return (
    <>
      {items.map((item) => (
        <li className="list-group-item d-flex justify-content-between align-items-center" key={item}>
          {item}
          {boughtItems.includes(item) ? (
            
            <Button className='m-2' variant="success" disabled><TbShoppingCartOff /></Button>
            
          ) : (
            <Button className='buy-button' onClick={() => handleBuyClick(item)} variant="primary"><FaShoppingCart /></Button>
          )}
        </li>
      ))}

      
    </>
  );
};

export default Fooditem;
