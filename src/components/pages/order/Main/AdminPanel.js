import styled from "styled-components";
import { FiChevronDown, FiChevronUp  } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { theme } from "../../../../theme";
import { useState } from "react";


export default function AdminPanel() {
  // State
  const [displayPanel, setDisplayPanel] = useState(true);

  // Comportement
  const handleClicked = () => {
    setDisplayPanel(!displayPanel);
  }

  // Affichage
  return (
    <AdminPanelStyled>
        <div className="AdminTab">
            <button className="btnchevron" onClick={handleClicked} ><FiChevronDown /></button>
            <button className="btnadd"><AiOutlinePlus /><span>Ajouter un produit</span></button>
            <button className="btnedit"><MdModeEditOutline /><span>Modifier un produit</span></button>
        </div>
        {displayPanel && <div className="AdminContent"><span>Ajouter un produit</span></div>}
    </AdminPanelStyled>
  )
}


const AdminPanelStyled = styled.div`
  /* border: 1px solid green; */
  width: 100%;
  /* height: 295px; ne pas mettre de height ici ça ma provoquer une erreur car quand tu fais disparaitre adminPanel le parent garde la meme hauteur, du coup admin Tab reste en haut et ne descend pas en bas ce qui laisse un espace vide */
  position: absolute;
  bottom: 0;     // Aligne AdminPanel en bas du conteneur Main(sans ça il ce met à la suite de main et depasse du container) 
  z-index: 1;   // Pour s’assurer qu'il se superpose au Menu 

  .AdminTab{
    /* border: 1px solid red; */
    width: 100%;
    height: 44px;

    .btnchevron{
        width: 60px;
        height: 43px;
        margin-top: 1px;
        margin-left: 71px;
        border: 1px #E4E5E9;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        background: #FFFFFF;
        cursor: pointer;
        padding: 10px 22px 11px 22px;
    }

    .btnadd{
        width: 212px;
        height: 43px;
        margin-top: 1px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        background: #292729;
        cursor: pointer;
        color: #FFFFFF;
        padding: 10px 22px 11px 22px;

        svg{
            margin-right: 14px;
        }

        span{
            font-family: 'Open Sans', cursive;
        }
    }

    .btnedit{
        width: 220px;
        height: 43px;
        margin-top: 1px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        border: 1px #E4E5E9;
        cursor: pointer;
        padding: 10px 22px 11px 22px;
        background: #FFFFFF;

        svg{
            margin-right: 14px;
        }

        span{
            font-family: 'Open Sans', cursive;
        }
    }
  }

  .AdminContent{
    border: 1px solid #E4E5E9;
    width: 100%;
    height: 250px;
    background: #FFFFFF;
    span{
        font-size: ${theme.fonts.P0};
        font-weight: ${theme.weights.regular};
        line-height: 21px;
        margin-top: 17px;
        margin-left: 21px;
    }
  }
`;
