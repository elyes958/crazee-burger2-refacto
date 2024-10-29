import styled from "styled-components";
import { theme } from "../../../../../theme";
import { useContext} from "react";
import OrderContext from "../../../../../context/OrderContext";
import TextInput from "../../../../reusable-ui/TextInput";
import PrimaryButton from "../../../../reusable-ui/PrimaryButton";
import Image from "./Image";
import SubmitMessage from "./SubmitMessage";
import { getInputTextsConfig } from "./InputTextConfig";
import { useSuccessMessage } from "../../../../../hooks/useSuccessMessage";


export default function AddForm() {
   // State
   const { newProduct, setNewProduct } = useContext(OrderContext);
   const { handleAddProduct } =  useContext(OrderContext);
   const {showSuccessMessage, displaySuccessMessage} = useSuccessMessage();
   // utilisation du custom hooks à la place du state avant(ci dessous)
   // const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Comportements
  const handleSubmit =  (event) => {
    event.preventDefault();

    const newProductToAdd = {
        id: new Date().getTime(),
        title: newProduct.title,
        imageSource: newProduct.imageSource || "/images/coming-soon.png",    // si imageSource n'est pas vide tu l'affiche sinon tu affiche l'image
        price: newProduct.price,
    }
    // console.log(newProductToAdd.id)

    handleAddProduct(newProductToAdd);

    setNewProduct({
        title: "",
        imageSource:  "",
        price:  "",
    })

    displaySuccessMessage();
  }


  const handleChange = (event) => {
    // console.log("event.target.name :" , event.target.name);
    // console.log("event.target.value :" , event.target.value);

    const name  = event.target.name;
    const value = event.target.value;

    setNewProduct({...newProduct, [name] : value});
  }


//   const successMessage = () => { 
//     setShowSuccessMessage(true);

//     setTimeout(() => {
//       setShowSuccessMessage(false);  
//     }, 2000);
//  }

 const inputTexts = getInputTextsConfig(handleChange, newProduct);

  // Affichage
  return (
    <AddFormStyled onSubmit={handleSubmit} >
        <Image image={newProduct.imageSource} /> 
        <div className="inputs-andicons">
            {inputTexts.map((input) =>
                <TextInput
                  key={input.id}
                  id={input.id}
                  Icon={input.Icon}
                  onChange={input.onChange}
                  value={input.value}
                  type={input.type}
                  name={input.name}
                  placeholder={input.placeholder}
                  version={input.version}
                />
            )}
        </div>
        <div className="btn-and-success">
            <PrimaryButton isSuccess={showSuccessMessage} className={`${showSuccessMessage && "successStyle"}`} version={"success"} value={"Ajouter un nouveau produit au menu"} />
            <SubmitMessage showSuccessMessage={showSuccessMessage} />
        </div>
    </AddFormStyled>
  )
}
// ligne 40 dans les class, image est toujours appliquer et si ont a quelque chose dans inputimageSource on ajoute la classe with-image
// ligne 98 je garde la className avec showSuccessMessage juste pour me rappeler comment ont ajoute une class sous condition mais maintenat qu'on a refacto en utilisant le composant reutilisable et qu'on lui passse le state en props cet class ne sert plus à rien

const AddFormStyled = styled.form`
  /* border: 2px solid black; */

  display: grid;
  grid-template-columns: 215px 645px;
  grid-template-rows: repeat(2, 121px);
  grid-column-gap: 20px;

  margin-top: 31px;
  margin-left: 71px;

 

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
    }
 }

 .btn-and-success{
    width: 645px;
    margin-left: 235px;
    display: flex;
 }
`;
