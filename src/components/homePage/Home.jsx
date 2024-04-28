import { Link } from "react-router-dom"


function Home() {
    return (
      <div>
        <h1 className="font-bold text-red-300 text-6xl text-center">SweetRecipes</h1>
        <h2 className="font-bold text-red-300 text-3xl text-center mt-5">If you want to see the best recipes <Link className="hover:text-black" to="/recipes">click here</Link></h2>
      </div>
    )
  }
  
  export default Home