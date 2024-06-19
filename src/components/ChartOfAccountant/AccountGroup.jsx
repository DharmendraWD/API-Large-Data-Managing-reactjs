import React, { useEffect, useState } from 'react'

function AccountGroup({accntGrpHeading}) {
// 
// let [tableData, setTableData] = useState([])

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
    th{
    font-size:15px;
    }
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
  }
     td {
    border: 1px solid #ddd;
    padding: 2 0px;
    text-align: center;
    font-size:16px;

  }
    thead{
        background: linear-gradient(135deg, #0022a11a, #cf2b2b14);
    }
      `
    }
  </style>
  

  <table style={{marginTop:"20px"}}>
  <thead>
    <tr>
{
  accntGrpHeading.map((headins, index)=>{
    return(
      <>
            <th key={index}>{headins.heading}</th>
      </>
    )
  })
}
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data 1-1</td>
      <td>Data 1-2</td>
      <td>Data 1-3</td>
      <td>Data 1-4</td>
    </tr>
    <tr>
      <td>Data 1-1</td>
      <td>Data 1-2</td>
      <td>Data 1-3</td>
      <td>Data 1-4</td>
    </tr>
    <tr>
      <td>Data 1-1</td>
      <td>Data 1-2</td>
      <td>Data 1-3</td>
      <td>Data 1-4</td>
    </tr>
    <tr>
      <td>Data 1-1</td>
      <td>Data 1-2</td>
      <td>Data 1-3</td>
      <td>Data 1-4</td>
    </tr>
    <tr>
      <td>Data 1-1</td>
      <td>Data 1-2</td>
      <td>Data 1-3</td>
      <td>Data 1-4</td>
    </tr>
  </tbody>
</table>
  </>
  )
}

export default AccountGroup