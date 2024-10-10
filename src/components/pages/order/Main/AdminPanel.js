import styled from "styled-components";
import { FiChevronDown, FiChevronUp  } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { theme } from "../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";


export default function AdminPanel({selectTab}) {
  // State
  const { displayPanel, setDisplayPanel, setSelectTab } = useContext(OrderContext); // on recupere displayPanel via le context sur le composant parent car quand le composant AdminPanel est demonter au clic quand on quitte le mode Admin  quand on le remonte il ce remet à true du coup il ne concerve pas le state quand on quitte et revient sur le mode admin par contre le composant parent n'est pas demonter et il conserve le state

  // Comportement
  const handleClicked = () => {
    setDisplayPanel(!displayPanel);
  }

  const handleSelected = (id) => {
    console.log("id : " + id)
    setSelectTab(id);
    setDisplayPanel(true);
  }

  // Affichage
  return (
    <AdminPanelStyled selectTab={selectTab}>
        <div className="AdminTab">
            <button className="btnchevron" onClick={handleClicked} >{displayPanel ? <FiChevronDown /> : <FiChevronUp/> }</button>
            <button id="add" className="btnadd" onClick={() => handleSelected("add")}><AiOutlinePlus /><span>Ajouter un produit</span></button>
            <button id="edit" className="btnedit" onClick={() => handleSelected("edit")}><MdModeEditOutline /><span>Modifier un produit</span></button>
        </div>
        {displayPanel && <div className="AdminContent">{selectTab === "add" ? <span>Ajouter un produit</span> : <span>Modifier un produit</span>}</div>}
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
        border: 1px ${theme.colors.greyLight};
        border-top-left-radius: ${theme.borderRadius.round};
        border-top-right-radius: ${theme.borderRadius.round};
        background: #FFFFFF;
        cursor: pointer;
        padding: 10px 22px 11px 22px;
    }

    .btnadd{
        width: 212px;
        height: 43px;
        margin-top: 1px;
        border-top-left-radius: ${theme.borderRadius.round};
        border-top-right-radius: ${theme.borderRadius.round};
        background: ${({ selectTab }) => selectTab === "add" ? "#292729" : "#FFFFFF"};
        color: ${({selectTab}) => selectTab === "add" ? "#FFFFFF" : "#292729"};
        cursor: pointer;
        padding: 10px 22px 11px 22px;
        border: 1px ${theme.colors.greyLight};

        svg{
            margin-right: 14px;
        }

        span{
            font-family: 'Open Sans', cursive;
        }

        &:hover{
            text-decoration: underline;
        }
    }

    .btnedit{
        width: 220px;
        height: 43px;
        margin-top: 1px;
        border-top-left-radius: ${theme.borderRadius.round};
        border-top-right-radius: ${theme.borderRadius.round};
        border: 1px ${theme.colors.greyLight};
        cursor: pointer;
        padding: 10px 22px 11px 22px;
        background: ${( props ) => props.selectTab === "edit" ? "#292729" : "#FFFFFF"};
        color: ${(props) => props.selectTab === "edit" ? "#FFFFFF" : "#292729"};

        svg{
            margin-right: 14px;
        }

        span{
            font-family: 'Open Sans', cursive;
        }

        &:hover{
            text-decoration: underline;
        }
    }
  }

  .AdminContent{
    border: 1px solid #E4E5E9;
    width: 100%;
    height: 250px;
    background: #FFFFFF;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    box-shadow: ${theme.shadows.subtle};

    span{
        font-size: ${theme.fonts.P0};
        font-weight: ${theme.weights.regular};
        line-height: 21px;
        margin-top: 17px;
        margin-left: 21px;
    }
  }
`;
