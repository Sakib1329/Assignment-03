import React, { createContext, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export const DataContext = createContext()

export default function DataContextProvider({ children }) {

    const [data, setData] = useState(()=>{
        let values = localStorage.getItem("data");
        return (values != null ? JSON.parse(values) : []) 
    });

   useEffect(() => {
    localStorage.setItem("data",JSON.stringify(data));
   }, [data])
   
    
    const totalIncome = data
    .filter((item) => item.type === "income")
    .reduce((sum,item) => sum+item.ammount,0);

    const totalExpense = data
    .filter((item) => item.type === "expense")
    .reduce((sum,item) => sum+item.ammount,0);
    

    return (
        <DataContext.Provider value={{data, setData, totalIncome, totalExpense}}>
            {children}
        </DataContext.Provider>
    )
}
