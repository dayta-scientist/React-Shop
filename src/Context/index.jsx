import { createContext } from "react";

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
  return(
    <ShoppingCartContext.Provider>
      {children}
    </ShoppingCartContext.Provider>
  )
}