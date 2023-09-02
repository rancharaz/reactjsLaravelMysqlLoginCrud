import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    /*  */
    /* data store &  function manipulation */
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    /* navigate hook */
    let navigate = useNavigate();
    let auth = localStorage.getItem('user-info');

    /* redirection on add product once register */
    useEffect(() => {
        if (auth) {
            navigate('/add-product');
        }
    }, [])

    /* login function */
    async function handleLogin() {
        try {
            let item = { email, password };/* data in object */
            let result = await fetch('http://127.0.0.1:8000/api/login', {
                method: "POST",
                mode: "cors",
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Content-Type, Authorization',
                    'Access-Control-Allow-Methods': '*',
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(item), /* data string */
            })
            if (!result.ok) {
                throw new Error("Network response was not OK");
            }
            result = await result.json();
           /*  console.log(result) */
            localStorage.setItem("user-info", JSON.stringify(result));

            navigate("/add-product");

        }
        catch (error) {
            console.error("There has been a problem with your fetch operation:", error);
            alert("Credentials not found.")
        }
    }
    return (
        <div>

            <div className='mx-auto container flex text-center justify-center'>
                <div className="form h-64 bg-slate-500 rounded-md mt-20 w-80">
                    <h1 className='p-4 text-2xl text-white mt-3'>Login</h1>
                    <div className="input-form">
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='mt-2 pl-1 outline-none' placeholder='Email' />
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='mt-2 pl-1 outline-none' placeholder='Password' />
                    </div>
                    <button onClick={handleLogin} className='btn-accept mt-6'> Login </button>
                </div>
            </div>

        </div>
    )
}

export default Login