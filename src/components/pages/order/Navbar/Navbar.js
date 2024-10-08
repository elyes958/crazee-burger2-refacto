import LogoBurger from "../../../reusable-ui/LogoBurger";
import styled from "styled-components";
import { theme } from "../../../../theme";
import { refreshPage } from "../../../../utils/window";
import NavbarRightSide from "./NavbarRightSide";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import { useState } from "react";
import { toast } from 'react-toastify';
import ToastAdmin from "./ToastAdmin";


export default function Navbar() {
  // State
  const [isModeAdmin, setIsModeAdmin] = useState(false);

  // Comportement
  const notify = () => {
    if(!isModeAdmin){     // cet ligne verifie si(if) isModeAdmin === false
      toast.info("Mode admin activé", {
        // icon: <FaUserSecret size={30} />,
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
    setIsModeAdmin(!isModeAdmin);     // cet ligne change la valeur de isModeAdmin avec le contraire de la valeur actuel
  }

  // Affichage
    return (
        <NavbarStyled>
            <div className="left">
                <LogoBurger onClick={refreshPage} />
            </div>
            <div className="right">
              <ToggleButton
              onToggle={notify} 
              labelIfChecked={"DESACTIVER LE MODE ADMIN"} 
              labelIfUnchecked={"ACTIVER LE MODE ADMIN"} 
              />
              <NavbarRightSide/>
              <ToastAdmin/>
            </div>
        </NavbarStyled>
    )
}

const NavbarStyled = styled.nav`
    box-sizing: border-box;
    padding: 0 70px 0 20px;
    /* border: 1px solid blue; */
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom: 1px solid ${theme.colors.greyLight};
    width: 1400px;
    height: 98px;
    background: ${theme.colors.white};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .left{
      cursor: pointer;

      div{
        h1{
          font-size: 36px;
          line-height: 46px;
        }

        img{
          width: 80px;
          height: 60px;
        }
      }
    }

    .right{
      display: flex;
    }
`;

