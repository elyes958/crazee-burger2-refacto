import styled from "styled-components";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { theme } from "../../../../../theme";
import { useContext, useState } from "react";
import OrderContext from "../../../../../context/OrderContext";
import TextInput from "../../../../reusable-ui/TextInput";
import PrimaryButton from "../../../../reusable-ui/PrimaryButton";
import Image from "./Image";
import SubmitMessage from "./SubmitMessage";


export default function AddForm() {
   // State
   const { newProduct, setNewProduct } = useContext(OrderContext);
   const { handleAddProduct } =  useContext(OrderContext);
   const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Comportements
  const handleSubmit =  (event) => {
    event.preventDefault();

    const newProductToAdd = {
        id: Date.now(),
        imageSource: newProduct.url || "/images/coming-soon.png",    // si inputUrl n'est pas vide tu l'affiche sinon tu affiche l'image
        title: newProduct.nom,
        price: newProduct.prix,
    }

    handleAddProduct(newProductToAdd);

    setNewProduct({
        nom: "",
        url:  "",
        prix:  "",
    })

    success();
  }


  const handleChange = (event) => {
    // console.log("event.target.name :" , event.target.name);
    // console.log("event.target.value :" , event.target.value);

    const name  = event.target.name;
    const value = event.target.value;

    setNewProduct({...newProduct, [name] : value});
  }


  const success = () => { 
    setShowSuccessMessage(true);

    setTimeout(() => {
      setShowSuccessMessage(false);  
    }, 2000);
 }

  // Affichage
  return (
    <AddFormStyled onSubmit={handleSubmit} >
        <Image image={newProduct.url} /> 
        <div className="inputs-andicons">
            <TextInput
                Icon={<FaHamburger />}
                onChange={handleChange}
                value={newProduct.nom}
                type={"text"}
                name={"nom"}
                placeholder={"Nom du produit (ex: Super Burger)"}
                version={"minimalist"}
            />
            <TextInput
                Icon={<BsFillCameraFill />}
                onChange={handleChange}
                value={newProduct.url}
                type={"url"}
                name={"url"}
                placeholder={"Lien URL d'une image (ex: http://la-photo-de-mon-produit.png)"}
                version={"minimalist"}
            />
            <TextInput
                Icon={<MdOutlineEuro />}
                onChange={handleChange}
                value={newProduct.prix}
                type={"number"}
                name={"prix"}
                placeholder={"Prix"}
                version={"minimalist"}
            />
        </div>
        <div className="btn-and-success">
            <PrimaryButton isSuccess={showSuccessMessage} className={`${showSuccessMessage && "successStyle"}`} version={"success"} value={"Ajouter un nouveau produit au menu"} />
            <SubmitMessage showSuccessMessage={showSuccessMessage} />
        </div>
    </AddFormStyled>
  )
}
// ligne 40 dans les class, image est toujours appliquer et si ont a quelque chose dans inputUrl on ajoute la classe with-image
// ligne 98 je garde la className avec showSuccessMessage juste pour me rappeler comment ont ajoute une class sous condition mais maintenat qu'on a refacto en utilisant le composant reutilisable et qu'on lui passse le state en props cet class ne sert plus à rien

const AddFormStyled = styled.form`
  /* border: 2px solid black; */

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

 .btn-and-success{
    width: 645px;
    margin-left: 235px;
    display: flex;
 }
`;
