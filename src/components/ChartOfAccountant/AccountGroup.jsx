import React, { useEffect, useState } from 'react'
import DetailsBox from '../utilities/DetailsBox';
import SearchBox from '../utilities/SearchBox';




function AccountGroup({Data}) {



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
  
 <SearchBox Data= {Data}></SearchBox>
<div className="container" style={{marginTop:"20px",}}>
{/* UPPER DETAILS APPEARS WHEN CLICK ON ANY PRODUCTS  */}
<DetailsBox></DetailsBox>

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
        Data.tableData && Data.tableData.map((elem, index) => (      
        <tr  onClick={() => handleRowClick(index)} style={{ backgroundColor: selectedRow === index ? '#dfc5c5' : 'transparent' }}>
            <td onClick={Data.showDetailsHandle} id={index}>{elem.PCode}</td>         
            <td onClick={Data.showDetailsHandle} id={index}>{elem.PDesc}</td>         
            <td onClick={Data.showDetailsHandle} id={index}>{elem.PShortName}</td>         
            <td onClick={Data.showDetailsHandle} id={index}>{elem.GroupName}</td>         
            <td onClick={Data.showDetailsHandle} id={index}>{elem.SubGroupName}</td>         
            <td onClick={Data.showDetailsHandle} id={index}>{elem.Group1}</td>         
            <td onClick={Data.showDetailsHandle} id={index}>{elem.Group2	}</td>         
            <td onClick={Data.showDetailsHandle} id={index}>{elem.Unit}</td>         
            <td onClick={Data.showDetailsHandle} id={index}>{elem.BuyRate	}</td>         
            <td onClick={Data.showDetailsHandle} id={index}>{elem.SalesRate	}</td>         
            <td onClick={Data.showDetailsHandle} id={index}>{elem.TradeRate	}</td>         
             <td onClick={Data.showDetailsHandle} id={index}>{elem["Discount Percentage"]}</td>     
             <td onClick={Data.showDetailsHandle} id={index}>{elem["Image Name"]}</td>     
             <td onClick={Data.showDetailsHandle} id={index}>{elem["Image Folder Name"]}</td>     
             <td onClick={Data.showDetailsHandle} id={index}>{elem["Offer Discount"]}</td>     
             <td onClick={Data.showDetailsHandle} id={index}>{elem["OutofStock"]}</td>     
             <td onClick={Data.showDetailsHandle}>{elem["StockQty"]}</td>     
             {/* <td>{elem["PImage"]}</td>      */}
             <td>{elem["ProductPoint"]}</td>     
        </tr>
    ))
}
    </tbody> 


</table>




</div>



  </>
  )
}

export default AccountGroup