import { createContext, useState } from "react";

export const EditContex=createContext()

export function EditContexProvider({children}){

    const [id,setid]=useState("")

    return <EditContex.Provider  value={{id,setid}}>{children}</EditContex.Provider>
}