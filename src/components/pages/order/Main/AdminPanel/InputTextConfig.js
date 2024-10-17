import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";

export const getInputTextsConfig = (handleChange, newProduct) => [  // attention ici c'est juste une fct on attend juste des parametres pas de props(javais fait cet erreur)
    {
        id: "0",
        Icon: <FaHamburger />,
        onChange: handleChange,
        value: newProduct.nom,
        type: "text",
        name: "nom",
        placeholder: "Nom du produit (ex: Super Burger)",
        version: "minimalist", 
    },
    {
        id: "1",
        Icon: <BsFillCameraFill />,
        onChange: handleChange,
        value: newProduct.url,
        type: "url",
        name: "url",
        placeholder: "Lien URL d'une image (ex: http://la-photo-de-mon-produit.png)",
        version: "minimalist", 
    },
    {
        id: "2",
        Icon: <MdOutlineEuro />,
        onChange: handleChange,
        value: newProduct.prix,
        type: "number",
        name: "prix",
        placeholder: "Prix",
        version: "minimalist", 
    },
 ]