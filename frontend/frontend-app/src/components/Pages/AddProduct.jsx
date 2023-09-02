import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {

      /*  */
        /* useNavigate to go to pages */
    const navigate = useNavigate();
    /* data store &  function manipulation */
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState(null);

    /* add product function using form data */
    async function addProduct() {

      const url = 'http://127.0.0.1:8000/api/add-products'

      const formData = new FormData();
      formData.append('file', file);
      formData.append('price', price);
      formData.append('name', name);
      formData.append('description', description);

      let result = await axios.post(url, formData)
          .then(response => {
              /* console.log(response); */
              alert("Data has been saved");
              navigate("/")

          })
          .catch(error => {
              console.log(error);
          });

  }


  return (
    /* add product form */
    <div className='mx-auto container flex text-center justify-center'>
    <div className="form h-72 bg-slate-500 rounded-md mt-20 w-80">
        <h1 className='p-4 text-2xl text-white mt-3'>Add Product</h1>
        <div className="input-form">
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='pl-1 outline-none' placeholder='Name' />
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} className='mt-2 pl-1 outline-none' placeholder='Price' />
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className='mt-2 pl-1 outline-none' placeholder='Description' />
            <input type="file" onChange={(e) => setFile(e.target.files[0])} className='mt-2 w-full text-center pl-[4.1rem] text-white' placeholder='Password' />

        </div>
        <button onClick={addProduct}  className='btn-accept mt-6'> Add product </button>
    </div>
</div>
  )
}

export default AddProduct