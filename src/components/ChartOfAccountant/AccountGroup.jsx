import React, { useEffect, useState } from 'react'

function AccountGroup() {

let [tableData, setTableData] = useState([])
let [PDesc, setPDesc] = useState("")   
let [PCode, setPCode] = useState("")
let [GrpName, setgrpName] = useState("")

async function getData(){
 try{

  let response = await fetch("http://myomsapi.globaltechsolution.com.np:802/api/MasterList/ProductListCustomer?DbName=MOBILEAP01")
  if(!response.ok){
    console.log("error")
  }
     const data = await response.json();
     setTableData(data)
}catch(error){
  console.log(error)
}
}
useEffect(() => {
getData()
}, [])

// UPDATE HEADING DETAILS OF LIST | UPPER LEFT SIDE 
const showDetailsHandle =(e)=>{
  setPDesc(tableData.data[e.target.id].PDesc)
  setPCode(tableData.data[e.target.id].PCode)
  setgrpName(tableData.data[e.target.id].GroupName)
}

// WHEN CLICK ON ANY LIST THEN CHANGE BG TO RED 
    const [selectedRow, setSelectedRow] = useState(null);
    const handleRowClick = (index) => {
        setSelectedRow(index === selectedRow ? null : index); // Toggle selection
    };




  return (
  <>
  <style>
    {
      `
      table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }
      th {
        font-size:15px;
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
    }
    .showDemo{
        margin: 0 0 12px 57px;
    position: absolute;
    top: 42px;
    font-size: 15px;
    padding: 2px 20px;
    box-shadow: 0px 0px 6px 0px #c5b9b97d;
    border-radius: 9px;
    border: none;
    outline: none;
    border-radius: 15px;
    background-color: #fff;
    box-shadow: inset 2px 5px 10px rgba(0, 0, 0, 0.3);
    transition: 300ms ease-in-out;
    text-align: left;
  }
     td {
    border: 1px solid #ddd;
    text-align: center;
    font-size:16px;
    min-width:130px;
    background:#f585851a;
    line-height:1.3;
    cursor:default;
  }
    thead{
        background: linear-gradient(135deg, #0022a11a, #cf2b2b14);
    }
        th{
          width: 10px !important;
            white-space: nowrap; /* Prevent text wrapping */
            overflow: hidden; /* Hide overflow text */
            text-overflow: ellipsis; /* Display ellipsis (...) for overflow */
            padding: 8px; /* }
      `
    }
  </style>
  

<div className="container" style={{marginTop:"20px",}}>

{/* UPPER DETAILS APPEARS WHEN CLICK ON ANY PRODUCTS  */}
<div className="showDemo">
{
  GrpName ? (
    <div>
          <p> <b> Name: </b>{PDesc}</p>
            <p><b>Group Name:</b> {GrpName}</p>
            <p><b>Code:</b> {PCode}</p>
        </div>
    ) : (
        <p  style={{background:"rgb(187 131 131 / 14%)", padding:"0 2px", borderRadius:"8px"}}>No Product is Selected</p>
    )
}
</div>

{/* TABLE HEADINGS  */}
<table>
  {
  
    <thead>
        <tr>
            <th>PCode</th>
            <th>PDesc</th>
            <th>PShortName</th>
            <th>GroupName</th>
            <th>SUbGroupName</th>
            <th>Group1</th>
            <th>Group2</th>
            <th>Unit</th>
            <th>BuyRate</th>
            <th>SalesRate</th>
            <th>MRP</th>
            <th>RradeRate</th>
            <th>Discount Percentage</th>
            <th>Image NAme</th>
            <th>Image Folder Name</th>
            <th>Offer Discount Name</th>
            <th>Stock Status</th>
            <th>Stock Qty</th>
            <th>PImage</th>
            <th>PImageProduct Point</th>

        </tr>
    </thead>     
  }

{/* TABLE DATA */}
<tbody>
{
         tableData.data && tableData.data.map((elem, index) => (      
        <tr  onClick={() => handleRowClick(index)} style={{ backgroundColor: selectedRow === index ? '#dfc5c5' : 'transparent' }}>
            <td onClick={showDetailsHandle} id={index}>{elem.PCode}</td>         
            <td onClick={showDetailsHandle} id={index}>{elem.PDesc}</td>         
            <td onClick={showDetailsHandle} id={index}>{elem.PShortName}</td>         
            <td onClick={showDetailsHandle} id={index}>{elem.GroupName}</td>         
            <td onClick={showDetailsHandle} id={index}>{elem.SubGroupName}</td>         
            <td onClick={showDetailsHandle} id={index}>{elem.Group1}</td>         
            <td onClick={showDetailsHandle} id={index}>{elem.Group2	}</td>         
            <td onClick={showDetailsHandle} id={index}>{elem.Unit}</td>         
            <td onClick={showDetailsHandle} id={index}>{elem.BuyRate	}</td>         
            <td onClick={showDetailsHandle} id={index}>{elem.SalesRate	}</td>         
            <td onClick={showDetailsHandle} id={index}>{elem.TradeRate	}</td>         
             <td onClick={showDetailsHandle} id={index}>{elem["Discount Percentage"]}</td>     
             <td onClick={showDetailsHandle} id={index}>{elem["Image Name"]}</td>     
             <td onClick={showDetailsHandle} id={index}>{elem["Image Folder Name"]}</td>     
             <td onClick={showDetailsHandle} id={index}>{elem["Offer Discount"]}</td>     
             <td onClick={showDetailsHandle} id={index}>{elem["OutofStock"]}</td>     
             <td onClick={showDetailsHandle}>{elem["StockQty"]}</td>     
             {/* <td>{elem["PImage"]}</td>      */}
             <td>{elem["ProductPoint"]}</td>     
        </tr>
    ))
}
    </tbody> 
<tbody>
    </tbody> 

</table>




</div>



  </>
  )
}

export default AccountGroup