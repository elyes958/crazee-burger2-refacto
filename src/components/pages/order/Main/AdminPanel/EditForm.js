import styled from "styled-components";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import Image from "./Image";
import TextInput from "../../../../reusable-ui/TextInput";
import { theme } from "../../../../../theme";
import EditFormInfoMesssage from "./EditFormInfoMesssage";
import { getInputTextsConfig } from "./InputTextConfig";

export default function EditForm() {
  // State
  const {productIsSelected, menu, handleEditProduct, inputComponentRef, basket, handleEditProductInBasket} = useContext(OrderContext);

  // Comportements (gestionnaires d'événement ou "event handlers")
  const productToEdit         = menu.find((product) => product.id === productIsSelected);
  const productToEditInBasket = basket.find((product) => product.id === productIsSelected);

  const handleEditForm = (event) => { 
    const name = event.target.name;
    const value = event.target.value;

    productToEdit[name]         = value;
    productToEditInBasket[name] = value;

    handleEditProduct(productToEdit);
    handleEditProductInBasket(productToEditInBasket);
 }

 const inputTexts = getInputTextsConfig(handleEditForm, productToEdit);

  // Affichage
  return (
    <EditFormStyled>
        {productToEdit.imageSource === "/images/coming-soon.png" ? <Image image={""} /> : <Image image={productToEdit.imageSource}/>}
        <div className="inputs-andicons">
           {inputTexts.map((input) =>
             <TextInput
             key={input.id}
             id={input.id}
             Icon={input.Icon}
             onChange={input.onChange}
             value={input.value}
             type={input.type}
             name={input.name}
             placeholder={input.placeholder}
             version={input.version}
             ref={input.name === "title" ? inputComponentRef : null}
             />
           )}
        </div>
        <EditFormInfoMesssage />
    </EditFormStyled>
  )
}

const EditFormStyled = styled.form`
  display: grid;
  grid-template-columns: 215px 645px;
  grid-template-rows: repeat(2, 121px);
  grid-column-gap: 20px;

  margin-top: 31px;
  margin-left: 71px;

  .inputs-andicons{
    /* border: 1px solid blue; */
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 35px;
    grid-row-gap: 8px;

    div{
        /* border: 1px solid green; */
        display: flex;
        padding: 8px 16px 8px 24px;
        border-radius: ${theme.borderRadius.round};
        background: ${theme.colors.background_white};
        color: ${theme.colors.greySemiDark};
    }
 }
`;
