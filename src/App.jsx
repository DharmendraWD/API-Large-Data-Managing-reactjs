import React from 'react'
import SideBar from './components/utilities/SideBar'
import UpperMenu from './components/utilities/UpperMenu.jsx'
import AccountGroup from './components/ChartOfAccountant/AccountGroup.jsx'
import { Routes, Route} from "react-router-dom";
import { useContext } from 'react'
import { data } from './components/context/Context'




function App() {
   const Data = useContext(data)  //initializing state from context

   
  return (
    <>
<div className="container" style={{display:'grid', gridTemplateColumns:"1fr 5fr",minWidth:"100%", height:"200vh" }}>
      <SideBar></SideBar>
 <div>
  <div style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
     <UpperMenu></UpperMenu>
     </div>
 
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam necessitatibus autem nemo praesentium asperiores deserunt laudantium odit ipsum porro sed!</p>

 <Routes>
        <Route
          path="/"
          element={<AccountGroup Data={Data} />}
          />
      </Routes>
 </div>
</div>
    </>
  )
}

export default App