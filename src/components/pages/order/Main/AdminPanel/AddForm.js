import styled from "styled-components";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { theme } from "../../../../../theme";


export default function AddForm() {
  return (
    <AddFormStyled>
        <div className="image">Aucune image</div>
        <div className="inputs-andicons">
            <div>
                <FaHamburger />
                <input type="text" placeholder="Nom du produit (ex: Super Burger)" />
            </div>
            <div>
                <BsFillCameraFill />
                <input type="text" placeholder="Lien URL d'une image (ex: http://la-photo-de-mon-produit.png)"/>
            </div>
            <div>
                <MdOutlineEuro />
                <input type="text" placeholder="Prix" />
            </div>
        </div>
        <button className="add-btn">Ajouter un nouveau produit au menu</button>
    </AddFormStyled>
  )
}

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
