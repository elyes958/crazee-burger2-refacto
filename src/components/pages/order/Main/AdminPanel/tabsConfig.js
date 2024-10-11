import { FiChevronDown, FiChevronUp  } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

export const getTabsConfig = (displayPanel, handleClicked ,selectTab, handleSelected) =>  [ // on transforme notre fichier de config en fct qui return un tableau pour pouvoir lui passer en parametre tout ce qu'il a besoin     
    {
      id: "chevron",
      label: "",
      Icon: displayPanel ? <FiChevronDown /> : <FiChevronUp />,
      onClick: handleClicked,
      className: !displayPanel ? "onglet-select" : "",
    },
    {
      id: "add",
      label: "Ajouter un produit",
      Icon: <AiOutlinePlus />,
      onClick: () => handleSelected("add"),
      className: selectTab === "add" ? "onglet-select" : "",
    },
    {
      id: "edit",
      label: "Modifier un produit",
      Icon: <MdModeEditOutline />,
      onClick: () => handleSelected("edit"),
      className: selectTab === "edit" ? "onglet-select" : "",
    },
]