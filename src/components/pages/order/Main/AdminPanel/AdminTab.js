import styled from "styled-components";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { theme } from "../../../../../theme";
import Tab from "../../../../reusable-ui/Tab";
import { getTabsConfig } from "./tabsConfig";



export default function AdminTab() {

    // State
    const { displayPanel, setDisplayPanel, selectTab, setSelectTab } = useContext(OrderContext); // on recupere displayPanel via le context sur le composant parent car quand le composant AdminPanel est demonter au clic quand on quitte le mode Admin  quand on le remonte il ce remet à true du coup il ne concerve pas le state quand on quitte et revient sur le mode admin par contre le composant parent n'est pas demonter et il conserve le state


    // Comportement
    const handleClicked = () => {
        setDisplayPanel(!displayPanel);
    }

    const handleSelected = (id) => {
        // console.log("id : " + id)
        setSelectTab(id);
        setDisplayPanel(true);
    }

    const tabs = getTabsConfig( displayPanel, handleClicked , selectTab, handleSelected ); // ont met la fct dans une variable pour pouvoir lui passer les parametre et après map dessus

    // Affichage
    return (
        <AdminTabStyled >
            {tabs.map((tab) => {
               return <Tab
               key={tab.id}
               label={tab.label}
               Icon={tab.Icon}
               onClick={tab.onClick} 
               className={tab.className}
               />
            })}
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

