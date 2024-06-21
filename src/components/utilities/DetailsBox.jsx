import React from 'react'
import { useContext } from 'react'
import { data } from '../context/Context'
import { CloudLightning } from 'lucide-react'


function DetailsBox() {
const Data = useContext(data)  //initializing from ContextAPI


  return (
  <>
  <div className="showDemo">
{
  Data.GrpName ? (
    <div>
          <p> <b> Name: </b>{Data.PDesc}</p>
            <p><b>Group Name:</b> {Data.GrpName}</p>
            <p><b>Code:</b> {Data.PCode}</p>
        </div>
    ) : (
        <p  style={{background:"rgb(187 131 131 / 14%)", padding:"0 2px", borderRadius:"8px"}}>No Product is Selected</p>
    )
} 
</div>
  </>
  )
}

export default DetailsBox