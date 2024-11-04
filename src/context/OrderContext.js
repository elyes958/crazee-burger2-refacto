import { createContext } from "react";


export default createContext({
    isModeAdmin: false,
    setIsModeAdmin: () => {},

    displayPanel : true,
    setDisplayPanel: () => {},

    selectTab: "",
    setSelectTab: () => {},

    menu: [],

    handleAddProduct: () => {},
    handleDeleteCard: () => {},
    handleResetMenu: () => {},

    newProduct: {},
    setNewProduct:() => {},

    productIsSelected: "",
    setProductIsSelected: () => {},

    handleEditProduct: () => {},

    inputComponentRef: {},

    basket: [],
    handleAddToBasket: () => {},
    handleQuantityProductInBasket: () => {},
    handleDeleteProductInBasket: () => {},
    handleEditProductInBasket: () => {},
});