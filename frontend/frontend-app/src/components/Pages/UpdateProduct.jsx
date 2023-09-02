import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const UpdateProduct = () => {

  /* useNavigate to go to pages */
  const navigate = useNavigate();

  /* get id in url hook */
  const params = useParams();
   
  /* var and function for data manipulation */
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState();


  useEffect(() => {
    getProduct()
  }, [])

  /* get data by id  to show into input*/
  const getProduct = async () => {
    let result = await fetch(`http://127.0.0.1:8000/api/products/${params.id}`);
    result = await result.json();
    /* add return data into state */
     setName(result.name);
     setPrice(result.price);
     setDescription(result.description);
     setFile(result.file_path)
  }

/* update product function */
const handleUpdate = async () => {
  let data = {name, price,description, file};/* destructure */
  
  let result = await fetch(`http://127.0.0.1:8000/api/products/${params.id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      /* adding bearer to token to adjust to backend */
      authorization: `brearer ${JSON.parse(localStorage.getItem('token'))}`,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Content-Type, Authorization',
      'Access-Control-Allow-Methods': '*',
      "Content-Type": "application/json"
  }
  }).catch(function(error){
    console.log(error.message)
  })
  result = await result.json();
  alert(`Product ${params.id} updated`);
  navigate("/")

}




  return (
    <div>
      <div className='mx-auto container flex text-center justify-center'>
        <div className="form h-80 bg-slate-500 rounded-md mt-20 w-80    ">
          <h1 className='p-4 text-2xl text-white mt-3'>Update Product</h1>
          <div className="input-form">
            Name <input c type="text" value={name} onChange={(e) => setName(e.target.value)}  className='pl-1 outline-none' placeholder='Name' />
          </div>
          <div className="input-form">
            Price <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} className='mt-2 pl-1 outline-none' placeholder='Price' /> <br />
          </div>
          <div className="input-form">
            Description <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} className='mt-2 pl-1 outline-none' placeholder='Description' /><br />
          </div>
{/*           <div onChange={(e) => setFile(e.target.files[0])}  className="input-form flex text-center justify-center p-2">
            Image:  <img className='w-16' src={"http://127.0.0.1:8000/" + file} alt="" />
            
          </div> */}
        <div>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} className='mt-2 w-full text-center pl-[4.1rem] text-white' placeholder='Password' />

        <img className='w-16' src={"http://127.0.0.1:8000/" + file} alt="" />
        </div>

          <button onClick={handleUpdate} className='btn-accept mt-2'> Update product </button>
        </div>
        <div>


        </div>
      </div>
    </div>

  )
}

export default UpdateProduct