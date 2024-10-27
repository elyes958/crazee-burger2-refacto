import { useState } from "react";


export  const useSuccessMessage = () => {  // ne pas oublier use au debut du nom de la fct
    // state
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    // comportement
    const displaySuccessMessage = () => { 
    setShowSuccessMessage(true);

    setTimeout(() => {
        setShowSuccessMessage(false);  
    }, 2000);
    }

    return {showSuccessMessage, displaySuccessMessage}   // ne pas oublier de return tout ça, car dans addForm on va avoir besoin du state showSuccessMessage et de la fonction displaySuccessMessage
    // nous return un objet qui contient ici le state et la fct
}
// uniquement state et comportement dans un customHook, pas d'affichage