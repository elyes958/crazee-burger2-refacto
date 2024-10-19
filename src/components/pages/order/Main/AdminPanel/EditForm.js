import styled from "styled-components";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import Image from "./Image";
import TextInput from "../../../../reusable-ui/TextInput";
import { FaHamburger } from "react-icons/fa";
import { theme } from "../../../../../theme";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";

export default function EditForm() {
  // State
  const {productIsSelected, menu, handleEditProduct, inputComponentRef} = useContext(OrderContext);

  // Comportements
  const productToEdit = menu.find((product) => product.id === productIsSelected);

  const handleEditForm = (event) => { 
    const name = event.target.name;
    const value = event.target.value;

    productToEdit[name] = value;

    handleEditProduct(productToEdit);
 }

  // Affichage
  return (
    <EditFormStyled>
        {productToEdit.imageSource === "/images/coming-soon.png" ? <Image image={""} /> : <Image image={productToEdit.imageSource}/>}
        <div className="inputs-andicons">
        <TextInput
            id={"0"} 
            Icon={<FaHamburger />} 
            onChange={handleEditForm} 
            value={productToEdit.title} 
            type={"text"} 
            name={"title"} 
            placeholder={"Nom du produit (ex= Super Burger)"} 
            version={"minimalist" }
            ref={inputComponentRef} 
        />
        <TextInput
            id={"1"} 
            Icon={<BsFillCameraFill />} 
            onChange={handleEditForm} 
            value={productToEdit.imageSource === "/images/coming-soon.png" ? "" : productToEdit.imageSource} 
            type={"url"} 
            name={"imageSource"} 
            placeholder={"Lien URL d'une image (ex: http://la-photo-de-mon-produit.png)"} 
            version={"minimalist" } 
        />
        <TextInput
            id={"2"} 
            Icon={<MdOutlineEuro />} 
            onChange={handleEditForm} 
            value={productToEdit.price} 
            type={"number"} 
            name={"price"} 
            placeholder={"Prix"} 
            version={"minimalist" } 
        />
        </div>
        <span>Cliquer sur un produit du menu pour le modifier en temps réel</span>
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

    span{
        font-size: ${theme.fonts.SM};
        font-weight: ${theme.weights.regular};
        font-family: "Open Sans", cursive;
        line-height: 20px;
        color: #FFA01B;
        grid-area: 2 / 2 / 3 / 3;  // ma permis de le placer ou je voulais dans la grille
        margin-top: 15px;
    }
`;
