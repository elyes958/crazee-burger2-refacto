import { useNavigate } from "react-router-dom"


export default function ErrorPage() {
  // State
  const navigate = useNavigate();

  // comportement
  const handleClicked = () => {
    navigate("/");
  }

  // Affichage
  return (
    <div>
        <h1>ErrorPage</h1>
        <button onClick={handleClicked} >Retourner à la page d'accueil</button>
    </div>
  )
}
