import React, {useState} from 'react'

const SearchProduct = () => {

    const[datas,setData] = useState("");

    const search = async (key) => {
        let result = await fetch(`http://127.0.0.1:8000/api/search/${key}`)
        result = await result.json();
        setData(result)
    }
  return (
    <>
    <div className="container mx-auto">
        <h1 className='text-2xl mt-12 mb-6'>Search Product</h1>
        <input onChange={(e) => search(e.target.value)} className='border-solid border-2 border-sky-500 w-80 pl-2 outline-none' type="text" name="" id="" placeholder='Search for products' />
    </div>
 
    <div className='mx-auto container mt-12'>
      <h1 className='text-4xl mb-10 font-bold'> </h1>
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
    </>
  )
}

export default SearchProduct