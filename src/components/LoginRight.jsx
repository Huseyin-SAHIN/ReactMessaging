import axios from 'axios'
import React, { useState } from 'react'
import { Link } from "react-router-dom"

function LoginRight({ setIsLoginControl }) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    const postUrl = "http://127.0.0.1:8000/api/token/"

    const postData = {
        username: username,
        password: password,
    };

    const makePostRequest = async () => {
        try {
            const response = await axios.post(postUrl, postData)

            localStorage.setItem("access_token", response.data.access);
            localStorage.setItem("refresh_token", response.data.refresh);

            setIsLoginControl(true);
            console.log(setIsLoginControl);
        }
        catch (error) {
            console.error('Hata oluştu:', error);
        }
    }


    return (


        <div className='loginMain'>
            <form onSubmit={(e) => {
                e.preventDefault();
                makePostRequest();
            }}>
                <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder='Kullanıcı Adını' required />
                <input value={password} onChange={(e) => {
                    setPassword(e.target.value)
                }} type="password" placeholder='Şifre' required />
                <button type='submit'>Giriş Yap</button>
                <Link style={{ fontSize: "12px" }}>Şifreni mi Unuttun?</Link>
            </form>
            <div className='loginBottom'>
                <Link className='loginLink' to={"/register"}>Yeni Hesap Oluştur</Link>
            </div>
        </div>
    )
}

export default LoginRight