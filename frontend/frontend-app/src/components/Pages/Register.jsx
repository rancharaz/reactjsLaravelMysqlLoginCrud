import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {


    /*  */
    /* data store &  function manipulation */
    const [name, setName] = useState("");
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

    /* submit function */
    const submitForm = async () => {
        let item = { name, email, password }; /* data in object */
        let result = await fetch("http://127.0.0.1:8000/api/register", {
            method: "post",
            body: JSON.stringify(item),/* data in string */
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Content-Type, Authorization',
                'Access-Control-Allow-Methods': '*',
                "Content-Type": "application/json"
            },
        })
        result = await result.json(); /* convert to json */
        console.log(result);
        localStorage.setItem("user-info", JSON.stringify(result)); /* adding data to localstorage */
        navigate('/add-product'); /* navigate to add-product page once register done */
    }

    return (
        /* form getting data value onChange */
        <div className='mx-auto container flex text-center justify-center'>
            <div className="form h-64 bg-slate-500 rounded-md mt-20 w-80">
                <h1 className='p-4 text-2xl text-white mt-3'>Register</h1>
                <div className="input-form">
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='pl-1 outline-none' placeholder='Name' />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='mt-2 pl-1 outline-none' placeholder='Email' />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='mt-2 pl-1 outline-none' placeholder='Password' />
                </div>
                <button onClick={submitForm} className='btn-accept mt-6'> Register </button>
            </div>
        </div>
    )
}

export default Register