import styled from "styled-components";
import {theme} from "../../../theme";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";
import OrderContext from "../../../context/OrderContext";
import { useRef, useState } from "react";
import { fakeMenu2 } from "../../../fakeData/fakeMenu";


export default function OrderPage() {
  // State
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [displayPanel, setDisplayPanel] = useState(true);
  const [selectTab, setSelectTab] = useState("add");
  const [menu, setMenu] = useState(fakeMenu2);
  const [newProduct, setNewProduct] = useState({   // on le remonte ici plutot que dans addForm pour eviter le bug quand on entre des valeur dans le form et qu'on collapse avant de soumettre
    title: "",
    imageSource:  "",
    price:  "",
   });
   const [productIsSelected, setProductIsSelected] = useState("");
   const inputComponentRef = useRef();


  // Comportement
  const handleAddProduct = (newProduct) => { 

    const copy    = [...menu];
    const newMenu = [newProduct, ...copy];
    setMenu(newMenu);     // bonne pratique on modifie le state toujour proche de la ou il est défini

  }

  const handleDeleteCard = (id) => { 
    const copy    = [...menu];
    const newMenu = copy.filter((product) => product.id !== id );
    setMenu(newMenu);
  }

  const handleResetMenu = () => { 
    setMenu(fakeMenu2);
  }

  const handleEditProduct = (productToEdit) => { 
    const copy = [...menu];
    const indexProductInMenu = copy.findIndex((product) => product.id === productToEdit.id);
    copy[indexProductInMenu] = productToEdit;
    setMenu(copy);
  }

  const orderContextValue = {
    isModeAdmin: isModeAdmin,             // cle et valeur ont le meme nom donc on peu l'ecrire sans preciser la cle sinon il aurais fallu ecrire isModeAdmin: isModeAdmin
    setIsModeAdmin: setIsModeAdmin,

    displayPanel,
    setDisplayPanel,

    selectTab,
    setSelectTab,

    menu,
    setMenu,

    handleAddProduct,
    handleDeleteCard,
    handleResetMenu,

    newProduct,
    setNewProduct,

    productIsSelected,
    setProductIsSelected,

    handleEditProduct,
    
    inputComponentRef,
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
