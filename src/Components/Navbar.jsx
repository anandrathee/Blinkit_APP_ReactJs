import React, { useContext, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { itemsContext } from '../Utils/ProductContext';
import Cart from './Cart';


const Navbar = ({value, cartItems}) => {

const {products} = useContext(itemsContext)
const [searchData, setSearchData] = useState("")
console.log(searchData)
  const [val, setVal] = useState(false);

  const handleCart = ()=>{
    setVal((prev)=> !prev)
  }


  const handleSearch = (e)=>{
    setSearchData(e.target.value)
  }

  const filterData = products.filter(item =>
    item.name.toLowerCase().includes(searchData.toLowerCase())
  )




  return (
    <div className='w-full h-full px-8'>
     


      {/* <div className="cardData">
        {filterData.length > 0 ? filterData.map((d,i)=>(
          <h1>{d.name}</h1>
        )): <h1>No data found</h1>}
      </div> */}
    </div>
  )
}

export default Navbar