import React, { useState } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'

function Register() {

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [first_name, setFirst_name] = useState("")
    const [last_name, setLast_name] = useState("")

    const postUrl = "http://127.0.0.1:8000/api/user/register/"

    const postData = {
        "username": userName,
        "password": password,
        "first_name": first_name,
        "last_name": last_name
    }

    const makePostRequest = async () => {
        try {
            const response = await axios.post(postUrl, postData)
        }
        catch (error) {
            console.error('Hata oluştu:', error);
        }
    }

    return (
        <div className='register'>
            <div className='registerMain'>
                <h1 id='title'>MesajClup</h1>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    makePostRequest();
                }}>
                    <input type="text" placeholder='Kullanıcı Adını' required onChange={(e) => setUserName(e.target.value)} />
                    <input type="text" placeholder='Ad' required onChange={(e) => setFirst_name(e.target.value)} />
                    <input type="text" placeholder='Soyad' required onChange={(e) => setLast_name(e.target.value)} />
                    <input type="password" placeholder='Şifre' required onChange={(e) => setPassword(e.target.value)} />
                    <button type='submit'>Kayıt Ol</button>
                </form>
                <div className='registerBottom'>
                    <Link className='registerLink' to={"/"}>Giriş Yap</Link>
                </div>
            </div>
        </div>
    )
}

export default Register