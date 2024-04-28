
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navb from './components/navbar/Navb'
import Home from './components/homePage/Home'
import RecipeList from './components/recipeList/RecipeList'
import RecipeDetail from './components/recipeDetail/RecipeDetail'
import { RecipeProvider } from './provider/RecipeContext'
import Register from './components/register/Register'
import Login from './components/login/Login'
import { useState } from 'react'
import Fav from './components/favourite/Fav'
import AuthRoute from './components/authRoute/AuthRoute'


function App() {

  const [user, setUser] = useState(null);
  const [arrFav, setArrFav] = useState([])

  const changeUser = (value) => {
    setUser(value)
  }

/*   const addFav = (newRecipeFav) => {
    setArrFav(newRecipeFav)
    
  } */


  return (
    <>  
      <div>
      <header className='bg-red-300 mb-7'>
        <div>
          <Navb user={user} changeUser={changeUser}/>
        </div>
      </header>
        <RecipeProvider>
          <main >
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/recipes' element={<RecipeList setArrFav={setArrFav} fav={arrFav} />}/>
              <Route path='/recipe/:idrecipe' element={<RecipeDetail/>}/>
              <Route path='/register' element={<Register />}/>
              <Route path='/login' element={<Login changeUser={changeUser} user={user}/>}/>
              <Route path='/favourite' element={<AuthRoute user={user} component={<Fav arrFav={arrFav} user={user} setArrFav={setArrFav} />}/>}/>
            </Routes>
            
          </main>          
        </RecipeProvider>

      </div>  
    </>
  )
}

export default App
