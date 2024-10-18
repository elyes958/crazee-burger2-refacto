import { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import Product from "./Product";
import OrderContext from "../../../../context/OrderContext";

export default function Menu() {
  // State
  const { menu, handleDeleteCard, isModeAdmin, setDisplayPanel ,setSelectTab, productIsSelected , setProductIsSelected } = useContext(OrderContext);

  // Comportements
  const handleSelectedCard = (id) => {
    // console.log("id: " + id);
    setProductIsSelected(id);
    setDisplayPanel(true);
    setSelectTab("edit");
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
             onDelete={() => handleDeleteCard(product.id)}
             isModeAdmin={isModeAdmin}
             onSelected={() => handleSelectedCard(product.id)}
             productSelected={productIsSelected}
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
    border-bottom-left-radius: 15px;
    background: #F5F5F7;
    box-shadow:${theme.shadows.strong};
    box-sizing: border-box;
    padding: 50px 92px;

    display: grid;     // initialiser grid
    grid-template-columns:repeat(4, 240px);
    grid-template-rows: repeat(4, 330px);
    grid-row-gap: 60px;
    grid-column-gap: 85px;
    overflow: hidden;      // on cache tout ce qui depasse du container
    overflow-y: scroll;    // et avec cet propriete les card passe sous la navBar et  celle qui depasser tu container devienne visible au scroll et inclus dans le container */
`;