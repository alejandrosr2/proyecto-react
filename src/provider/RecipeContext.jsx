import { createContext, useEffect, useState } from "react";
import api from "../service/api"

export const RecipeContext = createContext();

export const RecipeProvider = ({children}) => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
    const getData = async() => {
        const dataRecipes = await api.getDataApi();
        
        setRecipes(dataRecipes.items)
    }
    getData()
    }, []);

    return (

        <RecipeContext.Provider value={recipes}>
            {children}
        </RecipeContext.Provider>
    )
}