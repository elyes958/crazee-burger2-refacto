import { useState } from "react";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import styled from "styled-components";
import { theme } from "../../../../theme";
import Product from "./Product";

export default function Menu() {
  // State
  const [menu, setMenu] = useState(fakeMenu2);

    return (
        <MenuStyled>
          {menu.map((product) =>
            <Product
             key={product.id}
             imageSource={product.imageSource}
             title={product.title}
             price={product.price}
            />
        )}
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
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
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