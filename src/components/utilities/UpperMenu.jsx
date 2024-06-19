import React from 'react'
import { GoDotFill } from "react-icons/go";
import { IoHomeSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { MdAttachEmail } from "react-icons/md";
import { RiChatDownloadFill } from "react-icons/ri";
import { FaFilePdf } from "react-icons/fa6";
import { FaPrint } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";
import { GiPin } from "react-icons/gi";
import '../../index.css'


function UpperMenu() {    
  return (
    <>
<style>
{`
.UpperMenu{
  box-sizing: border-box;

}
.icons{
font-size:27px;
border:1px #595959 solid;
border-radius:4px;
padding:2px 4px;
}
.UpperMenu{
 border-radius: 10px;
 background: #e0e0e047;
box-shadow: 0px 0px 6px 0px #c5b9b97d;

width: fit-content;
margin:20px 0 0 0;
    padding: 0 15px;

}
    
`}
</style>

    <div className='UpperMenu flex justify-center items-center h-[60px]' style={{gap:"4px 10px", justifyContent:"center",}}>

<div className='flex justify-left items-center' style={{gap:"4px 10px"}}>
<IoHomeSharp className='icons'/>
<MdEmail className='icons' />
<MdAttachEmail className='icons' />
<RiChatDownloadFill className='icons' />
<FaFilePdf className='icons' />

<div>
     <select>
        <option value="">A4</option>
          <option value="1"></option>
          <option value="1"></option>
          <option value="1"></option>
      </select>
</div>
<div>
     <select>
        <option value="">Portrait</option>
          <option value="1">Portrait</option>
          <option value="1">Landscape</option>
      </select>
</div>

<FaPrint className='icons' />
<TfiMenuAlt className='icons' />
<GiPin className='icons' />
</div>
    </div>
    </>
  )
}

export default UpperMenu