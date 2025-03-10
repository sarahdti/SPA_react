import { useState } from "react"
import MyNavbar from "../../components/navbar/Navbar"
import './Login.css'
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

function Login(){
    const [name , setName] = useState('');
    const [password , setPassword] = useState('')
    const navigate = useNavigate()

    const handleClick =() =>{
        if(name == 'admin' && password =='12345'){
            document.cookie = "username=admin; expires=Thu, 18 Dec 2026 12:00:00 UTC; path=/";
            navigate('/panel') 
        }else{Swal.fire({
            title: "شما وارد نشدید!",
            icon: "error",
            draggable: true
          });
        }
    }

    return(
    <>
    <MyNavbar/>
    <div className="login-page">
        <div className="form">
            <form className="login-form">
                <input onChange={(e) =>setName(e.target.value)} type="text" placeholder="نام کاربری"/>
                <input onChange={(e) =>setPassword(e.target.value)} type="password" placeholder="رمز"/>
                <button type="button" onClick={handleClick}>ورود</button>
            </form>
        </div>
    </div>
     </>
    )
}
export default Login