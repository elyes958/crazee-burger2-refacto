import { useState } from "react";
import { fakeMenu2 } from "../fakeData/fakeMenu";
import { deepClone } from "../utils/array";


export const useMenu = () => {
  // State
  const [menu, setMenu] = useState(fakeMenu2);


    // Comportement (gestionnaire de state ou "state handlers")
  const handleAddProduct = (newProduct) => { 
    const copy = deepClone(menu);  
    const newMenu = [newProduct, ...copy];
    setMenu(newMenu);     // bonne pratique on modifie le state toujour proche de la ou il est défini

  }

  const handleDeleteCard = (id) => { 
    const copy = deepClone(menu);  
    const newMenu = copy.filter((product) => product.id !== id );
    setMenu(newMenu);
  }

  const handleResetMenu = () => { 
    setMenu(fakeMenu2);
  }

  const handleEditProduct = (productToEdit) => { 
    const copy = deepClone(menu);  // la on a une copy en deepClone(en profondeur, voir explication)
    const indexProductInMenu = copy.findIndex((product) => product.id === productToEdit.id);
    copy[indexProductInMenu] = productToEdit;
    setMenu(copy);
  }

  return {menu, setMenu, handleAddProduct, handleDeleteCard, handleResetMenu, handleEditProduct}
}