import styled from "styled-components";
import { FiChevronDown, FiChevronUp  } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { theme } from "../../../../../theme";
import Tab from "../../../../reusable-ui/Tab";


export default function AdminTab() {

    // State
    const { displayPanel, setDisplayPanel, selectTab, setSelectTab } = useContext(OrderContext); // on recupere displayPanel via le context sur le composant parent car quand le composant AdminPanel est demonter au clic quand on quitte le mode Admin  quand on le remonte il ce remet à true du coup il ne concerve pas le state quand on quitte et revient sur le mode admin par contre le composant parent n'est pas demonter et il conserve le state


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
        <AdminTabStyled >
            <Tab
             id={"chevron"}
             label={""}
             Icon={displayPanel ? <FiChevronDown /> : <FiChevronUp />}
             onClick={handleClicked} 
             className={!displayPanel ? "onglet-select" : ""} 
             />
            <Tab
             id={"add"}
             label={"Ajouter un produit"}
             Icon={<AiOutlinePlus />}
             onClick={() => handleSelected("add")} 
             className={selectTab === "add" ? "onglet-select" : ""} 
             />
            <Tab
             id={"edit"}
             label={"Modifier un produit"}
             Icon={<MdModeEditOutline />}
             onClick={() => handleSelected("edit")} 
             className={selectTab === "edit" ? "onglet-select" : ""} 
            />
        </AdminTabStyled>
    )
}

const AdminTabStyled = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    height: 44px;
    display: flex;

    .onglet-select{
        background: ${theme.colors.background_dark};
        color: ${theme.colors.white};
        border-color: ${theme.colors.background_dark};
    }

    button{
        margin-left: 1px;
    }
`;

