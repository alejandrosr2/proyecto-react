

function Register() {



    return (
        <div>
            <form >
            <div className="flex flex-col">
                <label htmlFor="email">Email</label>
                <input className="border-2 rounded-xl mb-2 w-60" type="email" id="username" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="username">User</label>
                <input className="border-2 rounded-xl mb-2 w-60" type="text" id="username" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="password">Password</label>
                <input className="border-2 rounded-xl mb-2 w-60" type="password"  id="password" />
            </div>
            <div>
                <button className="border-2 border-red-300 rounded-xl w-18 bg-red-300 hover:text-white hover:bg-red-400 p-1" type="submit" value="login">Register</button>
            </div>
            </form>
            
        </div>        
    )
}

export default Register
