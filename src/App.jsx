import React from 'react'
import SideBar from './components/utilities/SideBar'
import UpperMenu from './components/utilities/UpperMenu.jsx'
import { BsDisplay } from 'react-icons/bs'
import UpperHeading from './components/utilities/UpperHeading.jsx'
import AccountGroup from './components/ChartOfAccountant/AccountGroup.jsx'
import {Link, Routes, Route} from "react-router-dom";
import SearchBox from './components/utilities/SearchBox.jsx'

import { useContext } from 'react'
import { data } from './components/context/Context'


function App() {
   const rawData = useContext(data)  //initializing state from context
  //  console.log(rawData)
  return (
    <>
<div className="container" style={{display:'grid', gridTemplateColumns:"1fr 5fr",minWidth:"100%", height:"200vh" }}>
      <SideBar></SideBar>
 <div>
  <div style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
     <UpperMenu></UpperMenu>
     {/* <UpperHeading></UpperHeading> */}
     </div>
  <SearchBox></SearchBox>
  <AccountGroup></AccountGroup>

<routes>
  {/* <Route path='/' element={<Home></Home>}></Route> */}
 <Routes>
        {/* <Route
          path="/ListReport/ListingAccountSubGroup"
          element={<AccountGroup accntGrpHeading={rawData.accntGrpHeading} />}
        /> */}
        {/* Add more routes as needed */}
      </Routes>



</routes>

 </div>
</div>
    </>
  )
}

export default App