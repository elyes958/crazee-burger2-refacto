import { useState } from "react";
import { deepClone } from "../utils/array";

export const useBasket = () => { 
   const [basket, setBasket] = useState([]);

   const handleAddToBasket = (productToAdd) => { 
    const copy       = deepClone(basket);
    const copyUpdate = [productToAdd, ...copy];
    setBasket(copyUpdate);
  }

  const handleQuantityProductInBasket = (productUpQuantity, id) => { 
    const copy       = deepClone(basket);
    const findIndex  = copy.findIndex((product) => product.id === id);
    copy[findIndex] = productUpQuantity;
    setBasket(copy);
  }

  const handleDeleteProductInBasket = (idToDelete) => { 
    const copy       = deepClone(basket);
    const copyUpdate = copy.filter((product) => product.id !== idToDelete);
    setBasket(copyUpdate);
  }

   return {basket, handleAddToBasket ,handleQuantityProductInBasket ,handleDeleteProductInBasket}
}