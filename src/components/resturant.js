import React, { useState } from 'react'
import "./basic/style.css"
import Menu from './basic/menuApi';
import MenuCard from './basic/MenuCard';
import Navbar from './basic/Navbar';

const uniqueList = [
  ...new Set(
    Menu.map((curElem)=>{
      return curElem.category;

    })
  ),
  "All",
]
console.log(uniqueList)
const Resturant = () => {
  const [menuData,setMenuData] = useState(Menu); 
  const[menuList] = useState(uniqueList);



  const filterItem = (catagory) =>{

    if (catagory==="All"){
      setMenuData(Menu)
      return; 
    }
    const updatedList = Menu.filter((curElem) =>{
      return curElem.category === catagory;

    });
    setMenuData (updatedList);
  }
  return ( 
    <>

    <Navbar filterItem = {filterItem} menuList = {menuList}/>
    <MenuCard menuData = {menuData}/>
    </>
  )
}

export default Resturant