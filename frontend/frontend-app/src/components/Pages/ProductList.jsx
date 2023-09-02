import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
 
const ProductList = () => {

      /* data store &  function manipulation */
      const [datas, setDatas] = useState()

      /* getting data by calling the function in useEffect */
      useEffect(() => {
        productList() /* data will be called on loading */
      }, [])

      /* getting data function */
      const productList = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/products');
        const allData = await response.json();
        setDatas(allData);
      }
      /* delete by id */
      const handleDelete = async (id) => {
        let result = await fetch(`http://127.0.0.1:8000/api/products/${id}`, {
          method: "DELETE",
        })
        result = await result.json();
        console.log(result)
        productList(); /* the function will help to refresh the data to show new items */
      }
  return (
    /* table to show datas */
    <div className='mx-auto container mt-12'>
      <h1 className='text-4xl mb-10 font-bold'>Product Listing</h1>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">#</th>
                    <th scope="col" className="px-6 py-4">Name</th>
                    <th scope="col" className="px-6 py-4">Price</th>
                    <th scope="col" className="px-6 py-4">Description</th>
                    <th scope="col" className="px-6 py-4">Files</th>
                    <th scope="col" className="px-6 py-4">Actions</th>

                  </tr>
                </thead>
                <tbody>
                  {/* looping in datas to show individual data */}
                  {
                    datas && datas.map(data => {
                      const { id, name, price, description, file_path } = data;/* destructure */
                      return (
                        <tr key={id}
                          className="border-b     ">
                          <td className="whitespace-nowrap px-6 py-4 font-medium">{id}</td>
                          <td className="whitespace-nowrap px-6 py-4">{name}</td>
                          <td className="whitespace-nowrap px-6 py-4">{price}</td>
                          <td className="whitespace-nowrap px-6 py-4">{description}</td>
                          {/* showing images */}
                          <td className=" w-16 h-16 block"><img src={"http://127.0.0.1:8000/" + file_path} alt="" /></td>

                          <td>
                            <span className='btn-delete m-2' onClick={() => handleDelete(id)}>Delete</span>{/* delete by id */}
                          {/* search by id the id is already in the loop */}
                            <Link to={`update-product/${id}`}>  <span className='btn-update'>update</span></Link>
                          </td> 
                        
                        </tr>

                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductList