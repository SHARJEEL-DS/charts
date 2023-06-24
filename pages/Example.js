import React from 'react'
import {
    useQuery
} from 'react-query'
import axios from 'axios'
import { ReactQueryDevtools } from 'react-query/devtools';
import { Bar } from 'react-chartjs-2';

const Example = () => {


    const {
        isLoading,
        isFetching,
        error,
        data
    } = useQuery("repoData", () =>
        axios.get('https://dummyjson.com/products/search?q=Laptop').then((res) => res.data));

        //checking status
        if(isLoading){
            return<h1>Loading...</h1>
        }
        if(error){
            return "An error has occured: " + error.message;
        }


    return ( 
        <div className="container w-full mx-auto ">
        <nav className="flex flex-wrap justify-between mb-16 mx-28">
        
        
        </nav>
            
            <ul className="grid items-center grid-cols-4 gap-8 justify-items-center auto-cols-min " >
            {data.products.map((product) => (
              <li key={product.id} className="w-[200px] flex flex-col flex-wrap uppercase box-content tracking-[2px] border-none p-2 shadow-lg" >
              <h1 className="bg-blue-400 text-white text-center pt-1 pr-2 pl-2 text-sm  h-[45px] mb-2 ">{product.title}</h1>
              
              <div className="w-[200px] h-[250px] shadow-md rounded-[20px]">
              {/* bg-red-400 */}
              {/* <img src={product.thumbnail} className="w-[100%] h-[100%]"/> */}
              <div className="w-full h-full bg-cover bg-center rounded-[20px]" style={{backgroundImage : `url(${product.thumbnail})`}}></div>
              </div>
              <button className="w-full bg-black hover:bg-purple-500 h-[50px] rounded-[20px] shadow-xl mt-5 p-2 text-white uppercase tracking-[2px] font-bold">{product.price}</button>
              </li>
              // Adjust property names according to your data structure

              
            ))}
          </ul>
            <ReactQueryDevtools initialIsOpen={true}/>


            <div>
            
            

        </div>
            
            </div>
    
    )
}

export default Example
