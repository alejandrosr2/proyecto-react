

function Fav({user, arrFav, setArrFav}) {

    const removeFav = (recipeId) => {
        console.log(recipeId)
        const removeFavouriteList = arrFav.filter(item => item.recipeId !== recipeId.recipeId)
        setArrFav(removeFavouriteList)
    }

    return (
        <div>
{/*             <p>{user ? "puedes ver la lista" : "inicia sesión"}</p>

            {arrFav.map((item) =>
            <div className="shadow-sm lg:col-span-4 bg-red-300 m-3" key={item.recipeId}>
                <h1 className="">{item.name}</h1>
                <img src={item.imageUrl}/>
            </div>)} */}
            
            {user ? (
                <>
                    <p className="m-3">This is your favourite recipes:</p>
                        {arrFav.map((item) =>
                            <div className="flex flex-col items-center w-60 rounded-xl lg:col-span-2 bg-red-300 m-3 relative" key={item.recipeId}>
                                <img className="w-40 h-40 object-cover rounded-xl m-4" src={item.imageUrl} alt={item.name} />
                                <h1 className="text-center text-white font-bold">{item.name}</h1>
                                <button className="absolute bottom-1 right-2 text-white" onClick={() => removeFav(item)}><p className="hover:scale-150 transition duration-300 ease-in-out hover:text-red-400">X</p></button>
                            </div>
                        )}
                </>
            ) : (
                <p>Inicia sesión para ver la lista de favoritos</p>
            )}
        </div>
    )
}

export default Fav
