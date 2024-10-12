import styled from "styled-components";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { theme } from "../../../../../theme";
import { useContext, useState } from "react";
import OrderContext from "../../../../../context/OrderContext";


export default function AddForm() {
   // State
   const [inputName, setInputName] = useState("");
   const [inputUrl, setInputUrl] = useState("");
   const [inputPrice, setInputPrice] = useState("");
   const { menu, setMenu } =  useContext(OrderContext);

  // Comportements
  const handleSubmit = (event) => {
    event.preventDefault();

    const newProduct = {
        id: Date.now(),
        imageSource: inputUrl,
        title: inputName,
        price: inputPrice,
    }

    const copy    = [...menu];
    const newMenu = [newProduct, ...copy];
    setMenu(newMenu);
  }

  const handleChange = (event) => {
    console.log("event.target.name :" , event.target.name);
    console.log("event.target.value :" , event.target.value);

    const name  = event.target.name;
    const value = event.target.value;

    if(name === "nom") {
        setInputName(value);
    } else if (name === "url") {
        setInputUrl(value);
    } else if (name === "prix") {
        setInputPrice(value);
    }
  }

  // Affichage
  return (
    <AddFormStyled onSubmit={handleSubmit} >
        <div className={`image ${inputUrl ? "with-image" : ""}`}>{inputUrl ? <img src={inputUrl} alt="img" /> : "Aucune image" }</div>
        <div className="inputs-andicons">
            <div>
                <FaHamburger />
                <input 
                 onChange={handleChange}
                 value={inputName}
                 type="text"
                 name="nom"
                 id=""
                 placeholder="Nom du produit (ex: Super Burger)" />
            </div>
            <div>
                <BsFillCameraFill />
                <input 
                 onChange={handleChange}
                 value={inputUrl}
                 type="url"
                 name="url"
                 id=""
                 placeholder="Lien URL d'une image (ex: http://la-photo-de-mon-produit.png)" />
            </div>
            <div>
                <MdOutlineEuro />
                <input 
                 onChange={handleChange}
                 value={inputPrice}
                 type="number"
                 name="prix"
                 id=""
                 placeholder="Prix" />
            </div>
        </div>
        <button className="add-btn">Ajouter un nouveau produit au menu</button>
    </AddFormStyled>
  )
}
// ligne 40 dans les class, image est toujours appliquer et si ont a quelque chose dans inputUrl on ajoute la classe with-image

const AddFormStyled = styled.form`
  /* border: 2px solid black; */

  display: grid;
  grid-template-columns: 215px 645px;
  grid-template-rows: repeat(2, 121px);
  grid-column-gap: 20px;

  margin-top: 31px;
  margin-left: 71px;

 .image{
    border: 1px solid ${theme.colors.greyLight};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.greySemiDark};

    &.with-image {
    border: none; /* classe qui Retire la bordure si une image est présente, qu'on a ajouter en plus de classe image sous conditions dans des */
   }

    img{
        object-fit: contain;
    }
 }

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
        

        input{
            width: 100%;
            padding: 1px 2px 1px 2px;
            margin-left: 13px;
            border: none;   // avec ces 3 propriete tu enleve les bordure de l'input la noir au focus et la blanche qui reste après
            outline: none;
            background-color: transparent;

            &::placeholder{
                background: ${theme.colors.background_white};
            }
        }
    }
 }

 .add-btn{
    height: 34px;
    width: 275px;
    margin-left: 235px;
    margin-top: 12px;
    border-radius: ${theme.borderRadius.round};
    border: 1px;
    padding: 10px 29px 9px 29px;
    background: ${theme.colors.success};
    color: ${theme.colors.white};
    cursor: pointer;
 }
`;
