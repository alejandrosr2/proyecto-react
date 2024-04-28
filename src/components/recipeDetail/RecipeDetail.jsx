import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { RecipeContext } from "../../provider/RecipeContext";


function RecipeDetail() {
    
    const recipes = useContext(RecipeContext);
    const {idrecipe} = useParams();
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        
        if (recipes && recipes.length > 0) {
            setLoading(false); 
        }
    }, [recipes]);

    if (loading) {
        return <div>Cargando recetas...</div>;
    }
    
    const recipe = recipes.find(recipe => recipe.recipeId === parseInt(idrecipe));
    

    return (
        <div className="flex flex-col">
            <h1 className="font-bold">{recipe.name}</h1>
            <img className="h-60 w-60 mt-4 mb-4 rounded-xl" src={recipe.imageUrl} alt="" />
            <h2 className="font-bold">Ingredientes:</h2>
            <ul>
                {recipe.ingredients.map((ingredient, i) => (
                    <li key={i}>-{ingredient}</li>
                ))}
            </ul>
            <h2 className="font-bold mt-4">Preparation:</h2>
            <ul>
                {recipe.directions.map((direction, i) => (
                    <li key={i}>{i + 1 + "º"}: {direction}</li>
                ))}
            </ul>
        </div>
    )
}

export default RecipeDetail
