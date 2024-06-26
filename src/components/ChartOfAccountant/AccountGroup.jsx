import React, { useEffect, useState } from 'react'
import TestModalPopup from '../utilities/TestModalPopup';

function AccountGroup({Data}) {
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
  
 {/* <SearchBox Data= {Data}></SearchBox> */}
<div className="container" style={{marginTop:"20px",}}>
{/* UPPER DETAILS APPEARS WHEN CLICK ON ANY PRODUCTS  */}

<div className="letsTEst flex gap-[12px]">
{/* <ModalPopup Data= {Data}></ModalPopup> */}
<TestModalPopup api = {"http://localhost:802/Api/MasterList/ListLedgers?DbName=DEMO808101&GlCode=&Catagory=&GrpCode=&SGrpCode=&BranchCode="}></TestModalPopup> 
</div>
</div>
  </>
  )
}

export default AccountGroup