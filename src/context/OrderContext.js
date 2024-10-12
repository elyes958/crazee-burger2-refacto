import { createContext } from "react";


export default createContext({
    isModeAdmin: false,
    setIsModeAdmin: () => {},

    displayPanel : true,
    setDisplayPanel: () => {},

    selectTab: "",
    setSelectTab: () => {},

    menu: [],
    setMenu: () => {},
});