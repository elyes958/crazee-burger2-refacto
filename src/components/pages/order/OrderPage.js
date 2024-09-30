import { useNavigate, useParams } from "react-router-dom";


export default function OrderPage() {
  // state
  const { userId } = useParams();    // useParams nous renvoie un objet
  const navigate   = useNavigate();

  // comportement
  const handleClicked = () => {
    navigate("/");
  }

  return (
    <div>
      <h1>Bonjour {userId}</h1>
      <button onClick={handleClicked} >Déconnexion</button>
    </div>
  )
}
