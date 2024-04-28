import { useState } from "react"
import users from "../../data/users.json";
import { useNavigate } from "react-router-dom";


const initial_state = {
  username: "",
  password: ""
}

function Login({changeUser}) {

  const [formLogin, setFormLogin] = useState(initial_state);
  const [error, setError] = useState("")
  const navigate = useNavigate();

  const handleInput = (event) => {
    const idInput = event.target.id;
    const valueInput = event.target.value;

    setFormLogin({...formLogin, [idInput]: valueInput});
  };

  const handleClick = (event) => {
    event.preventDefault()
    const userFind = users.find((user) => user.username === formLogin.username && user.password === formLogin.password)

    if(userFind){
      changeUser(userFind) // userFind pasa el array de data y el formLogin los datos del formulario que pongas
      navigate("/")
    } else {
      setError("wrong username or password")
    }
  }

  return (
    <div>
      <form >
        <div className="flex flex-col">
          <label htmlFor="username">User</label>
          <input className="border-2 rounded-xl mb-2 w-60" type="text" id="username" onChange={handleInput} placeholder="hola"/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input className="border-2 rounded-xl mb-2 w-60" type="password"  id="password" onChange={handleInput} placeholder="hola"/>
        </div>
        <input className="mr-1 mb-2" type="checkbox" id="remember" />
        <label className="" htmlFor="remember">Remember</label>
        <div>
          <button className="border-2 border-red-300 rounded-xl w-16 bg-red-300 hover:text-white hover:bg-red-400" type="submit" value="login" onClick={handleClick}>login</button>
        </div>
      </form>
      <p>{error}</p>
    </div>
  )
}

export default Login
