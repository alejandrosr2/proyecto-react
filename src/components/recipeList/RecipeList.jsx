
import { useContext, useEffect, useState } from "react";
import "./recipelist.css"
import { Link } from "react-router-dom";
import { RecipeContext } from "../../provider/RecipeContext";
import { RiHeart3Line  } from "react-icons/ri";


function RecipeList({setArrFav, fav}) {

    const recipes = useContext(RecipeContext);
    const [loading, setLoading] = useState(true);
/*     const [fav, setFav] = useState([]) */
    console.log(fav)

    useEffect(() => {
        
        if (recipes && recipes.length > 0) {
            setLoading(false); 
        }
    }, [recipes]);

    if (loading) {
        return <div>Loading recipes...</div>;
    }

    const addFav = (recipe) => {
        setArrFav([...fav, recipe])
        /* favouriteList([...fav, recipe])
         */
    }

    return (
        
        <div className='grid grid-cols-1 lg:grid-cols-10'>
            {recipes.map((item) => 
            <div className="lg:col-span-2 bg-red-300 text-white rounded-xl m-3 flex flex-col items-center relative" key={item.recipeId}>
                    <img className="w-40 h-40 object-cover rounded-xl m-4" src={item.imageUrl}/>
                <Link to={`/recipe/${item.recipeId}`}>
                    <h1 className="ml-4 mr-2 font-bold text-center mb-2 hover:text-black">{item.name}</h1>
                </Link>
                    <button className="absolute bottom-1 right-2" onClick={() => addFav(item)}><RiHeart3Line className="hover:scale-150 transition duration-300 ease-in-out hover:text-red-400" /></button>

            </div>)}
        </div>
    )
}

export default RecipeList
