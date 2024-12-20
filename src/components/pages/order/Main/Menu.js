import { useContext} from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import Product from "./Product";
import OrderContext from "../../../../context/OrderContext";

export default function Menu() {
  // State
  const { menu, handleDeleteCard, isModeAdmin, setDisplayPanel ,setSelectTab, productIsSelected , setProductIsSelected, inputComponentRef, selectTab, handleAddToBasket, basket, handleQuantityProductInBasket, handleDeleteProductInBasket } = useContext(OrderContext);

  // Comportements
  const handleSelectedCard = async (event, id) => {
    event.stopPropagation();

    // console.log("id: " + id);

    await setProductIsSelected(id);
    await setDisplayPanel(true);
    await setSelectTab("edit");

    inputComponentRef.current.focus();
  }

  const handleDelete = (event, id) => { 
    event.stopPropagation();

    if(productIsSelected === id){
      setProductIsSelected("");
    }

    handleDeleteCard(id);
    handleDeleteProductInBasket(id); // supprime egalement du basket
    
    if(selectTab === "edit" && productIsSelected !== ""){  // cet condition ma regler le bug que j'avais avec le focus(msg d'erreur) quand je supprimer un produit sur l'onglet ajout(enleve cet condition pour revoir ce bug)
       inputComponentRef.current.focus(); // corrige le bug quand on supprime une card on perdais le focus
    }
  }

  const handleAddProductInBasket = (event, id) => { 
    event.stopPropagation();

    const productAddInBasket = menu.find((product) => product.id === id);

    const productAlreadyInBasket = basket.find((product) => product.id === productAddInBasket.id);

    if(productAlreadyInBasket === undefined){
      handleAddToBasket(productAddInBasket); 
    } else {
      productAlreadyInBasket.quantity += 1;
      handleQuantityProductInBasket(productAlreadyInBasket, id);
    }
  }

  // Affichage
    return (
        <MenuStyled>
        {menu.map((product) =>
            <Product
             key={product.id}
             id={product.id}
             imageSource={product.imageSource}
             title={product.title}
             price={product.price}
             onDelete={(event) => handleDelete(event, product.id)}
             isModeAdmin={isModeAdmin}
             onSelected={(event) => handleSelectedCard(event, product.id)}
             productSelected={productIsSelected}
             addProductInBasket={(event) => handleAddProductInBasket(event, product.id)}
            />
        ) 
        }
        </MenuStyled>
    )
}

const MenuStyled = styled.div`
    /* border: 1px solid green; */
    width: 100%;
    height: 750px;
    background: ${theme.colors.white};
    border-bottom-right-radius: 15px;
    /* border-bottom-left-radius: 15px; */
    background: #F5F5F7;
    box-shadow:${theme.shadows.strong};
    box-sizing: border-box;
    padding: 50px 92px;

    display: grid;     // initialiser grid
    grid-template-columns:repeat(3, 240px);
    grid-template-rows: repeat(3, 330px);
    grid-row-gap: 60px;
    grid-column-gap: 85px;
    overflow: hidden;      // on cache tout ce qui depasse du container
    overflow-y: scroll;    // et avec cet propriete les card passe sous la navBar et  celle qui depasser tu container devienne visible au scroll et inclus dans le container */
`;