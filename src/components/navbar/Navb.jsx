import { Link } from "react-router-dom";

function Navb({user, changeUser}) {
    
    
    
    const logOut = () => {
        if(user) {
            changeUser(null)
        }
    }

    return (
        <div className="mx-28 py-8 ">
            <nav className="flex items-center justify-between">
                <div className="flex gap-5 items-center">
                    <div className="">
                        
                        <h3 className="font-bold text-white">SweetRecipes</h3>
                    </div>
                
                    <div className="flex gap-5 items-center">
                        <div>
                            <p className="hover:text-white italic"><Link to="/">Home</Link></p>
                        </div>
                        <div>
                            <p className="hover:text-white italic"><Link to="/recipes">Recipes</Link></p>
                        </div>
                        <div>
                            <p className="hover:text-white italic"><Link to="/favourite">Favourite</Link></p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-10">
                    <button className="hover:text-white italic"><Link to="login">Login</Link></button>
                    {/* <button className="hover:text-white italic" onClick={logOut}><Link to="register">{user ? "LogOut" : "Register"}</Link></button> */}
                    {user ? (
                        <button className="hover:text-white italic" onClick={logOut}>
                            LogOut
                        </button>
                    ) : (
                        <button className="hover:text-white italic">
                            <Link to="/register">Register</Link>
                        </button>
                        )}
                </div>
            </nav>
        </div>
    )
}

export default Navb;


