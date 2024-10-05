import LogoBurger from "../../reusable-ui/LogoBurger";
import styled from "styled-components";
import { theme } from "../../../theme";
import NavbarRightSide from "./NavbarRightSide";
import { refreshPage } from "../../../utils/window";


export default function Navbar() {
    return (
        <NavbarStyled>
            <div className="left">
                <LogoBurger onClick={refreshPage} />
            </div>
            <NavbarRightSide/>
        </NavbarStyled>
    )
}

const NavbarStyled = styled.nav`
    box-sizing: border-box;
    padding: 0 70px 0 20px;
    /* border: 1px solid blue; */
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
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
`;

