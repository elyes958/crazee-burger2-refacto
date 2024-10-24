import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";

export const getInputTextsConfig = (handleChange, newProduct) => [  // attention ici c'est juste une fct on attend juste des parametres pas de props(javais fait cet erreur)
    {
        id: "0",
        Icon: <FaHamburger />,
        onChange: handleChange,
        value: newProduct.title,
        type: "text",
        name: "title",
        placeholder: "Nom du produit (ex: Super Burger)",
        version: "minimalist", 
    },
    {
        id: "1",
        Icon: <BsFillCameraFill />,
        onChange: handleChange,
        value: newProduct.imageSource,
        type: "url",
        name: "imageSource",
        placeholder: "Lien URL d'une image (ex: http://la-photo-de-mon-produit.png)",
        version: "minimalist", 
    },
    {
        id: "2",
        Icon: <MdOutlineEuro />,
        onChange: handleChange,
        value: newProduct.price,
        type: "number",
        name: "price",
        placeholder: "Prix",
        version: "minimalist", 
    },
 ]