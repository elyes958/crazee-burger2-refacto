import styled from "styled-components";
import {theme} from "../../../theme";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";
import OrderContext from "../../../context/OrderContext";
import { useRef, useState } from "react";
import { useMenu } from "../../../hooks/useMenu";
import { deepClone } from "../../../utils/array";


export default function OrderPage() {
  // State
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [displayPanel, setDisplayPanel] = useState(true);
  const [selectTab, setSelectTab] = useState("add");
  const [newProduct, setNewProduct] = useState({   // on le remonte ici plutot que dans addForm pour eviter le bug quand on entre des valeur dans le form et qu'on collapse avant de soumettre
    title: "",
    imageSource:  "",
    price:  "",
   });
   const [productIsSelected, setProductIsSelected] = useState("");
   const inputComponentRef = useRef();
   const {menu, handleAddProduct, handleDeleteCard, handleResetMenu, handleEditProduct} = useMenu(); // on recupere tout via le custom hooks qui nous permet d'avoir beaucoup moins de ligne de state dans la page order en extrayant le state et les comportement qui lui sont lie dans un custom hook
   const [basket, setBasket] = useState([]);

   const handleAddToBasket = (productToAdd) => { 
    const copy       = deepClone(basket);
    const copyUpdate = [productToAdd, ...copy];
    setBasket(copyUpdate);
  }


  const orderContextValue = {
    isModeAdmin: isModeAdmin,             // cle et valeur ont le meme nom donc on peu l'ecrire sans preciser la cle sinon il aurais fallu ecrire isModeAdmin: isModeAdmin
    setIsModeAdmin: setIsModeAdmin,

    displayPanel,
    setDisplayPanel,

    selectTab,
    setSelectTab,

    menu,

    handleAddProduct,
    handleDeleteCard,
    handleResetMenu,

    newProduct,
    setNewProduct,

    productIsSelected,
    setProductIsSelected,

    handleEditProduct,
    
    inputComponentRef,

    basket,
    handleAddToBasket,
  };

  // affichage
  return (
    <OrderContext.Provider value={orderContextValue}>
    <OrderPageStyled>
      <div className="container">
        <Navbar/>
        <Main/>
      </div>
    </OrderPageStyled>
    </OrderContext.Provider>
  )
}


const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  padding: 25px 56px 25px 56px;
  display: flex;
  justify-content: center;

  .container{
    /* border: 1px solid red; */
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
