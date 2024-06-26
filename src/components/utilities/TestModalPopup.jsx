import React, { useState, useEffect, useRef } from 'react';
import './PopupModal.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from "react-bootstrap";
import UpperMenu from "./UpperMenu"

function TestModalPopup({api}) {

  const [tableData, setTableData] = useState([]);
  const [fetchedData, setFetchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTermByName, setSearchTermByName] = useState(''); // State for search term
  const [searchTermBycode, setSearchTermBycode] = useState(''); // State for search term


  // Function to load more data
  const loadMoreData = () => {
    const currentLength = tableData.length;
    const newData = fetchedData.slice(currentLength, currentLength + 20); // Load next 20 items
    setTableData([...tableData, ...newData]); // Append new data
  };

  // Function to handle scroll event
  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    if (scrollHeight - scrollTop === clientHeight) {
      // Reached the bottom
      loadMoreData();
    }
  };
// FUNCTION TO FETCH DATA ASYNCHRONOUSLY 
  async function getData(api) {
    try {
      setIsLoading(true);
      let response = await fetch(api);
      if (!response.ok) {
        console.log("Error fetching data");
        return;
      }
      const data = await response.json();
      setFetchedData(data.data);
      setTableData(data.data.slice(0, 20)); // Initial load: slice to first 20 items
    } catch (error) {
      console.log("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getData(api);
  }, []);



// -----------------------------





// WHEN CLICK ON ANY LIST THEN HIGHLIGHTS THEM
    const [selectedRow, setSelectedRow] = useState(null);
    const handleRowClick = (index) => {
        setSelectedRow(index === selectedRow ? null : index); // Toggle selection
    };
// ----------------------------------------

    //SHOW HIDE MODAL POPUP
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
// ----------------------------------------
 
// FUNCTION TO HANDLE SEARCH INPUT 
  const handleSearchChange = (event) => {
    setSearchTermByName(event.target.value);
  };
  const handleSearchChangeByCode = (event) => {
    setSearchTermBycode(event.target.value);
  };
// ----------------------------------------

// FILTER TABLE DATA 
// "BASED ON  ShortName"
  useEffect(() => {
    const filteredData = fetchedData.filter(item =>
      item.GlDesc.toLowerCase().includes(searchTermByName.toLowerCase())
    );
    setTableData(filteredData.slice(0, 20)); // Limit display to first 20 filtered items
  }, [searchTermByName, fetchedData]);
  //BASED ON  Code 
  useEffect(() => {
    const filteredData = fetchedData.filter(item =>
      item.GlShortName.toLowerCase().includes(searchTermBycode.toLowerCase())
    );
    setTableData(filteredData.slice(0, 20)); // Limit display to first 20 filtered items
  }, [searchTermBycode, fetchedData]);
// ----------------------------------------

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        click modal New.
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>

<div className="searchParent flex items-center justify-around">
<UpperMenu></UpperMenu>     {/*UPPER MENU PRINT, PDF, HOME, MAIL*/}
{/* SEARCH BOXES    SEARCH BOXES    SEARCH BOXES    SEARCH BOXES  */}
<div className="searches flex gap-4">
      <input
        className='searchOnGLdesc'
        type="text"
        placeholder="Search by Name..."
        value={searchTermByName}
        onChange={handleSearchChange}
      />
      <input
        className='searchOnGLdesc'
        type="text"
        placeholder="Search by Code..."
        value={searchTermBycode}
        onChange={handleSearchChangeByCode}
      />
      </div>
      {/* SEARCH BOXES ENDS HERE  */}
</div>

        <Modal.Body onScroll={handleScroll} style={{ height: "400px", overflow: "auto" }}>

 <table>
  {
    <thead>
        <tr>
            <th>GlCode</th>
            <th>Name</th>
            <th>Code</th>
            <th>PanNo</th>
            <th>Type</th>
            <th>Balance</th>
            <th>CreditLimite</th>
            <th>CreditDay</th>
            <th>Scheme</th>
            <th>GrpCode</th>
            <th>GrpDesc</th>
            <th>SGrpCode</th>
            <th>AgentCode</th>
            <th>AgentDesc</th>
            <th>AreaCode</th>
            <th>AreaDesc</th>
            <th>PrimaryGroup</th>
            <th>Address</th>
            <th>TelNo</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>ContactPerson</th>
            <th>Id</th>
            <th>Subledger</th>
            <th>AddGrp1Desc</th>
            <th>AddGrp2Desc</th>
            <th>BlockBackDatedEntry</th>


        </tr>
    </thead>     
  }

{/* TABLE DATA */}
<tbody>
{

    tableData && tableData.map((elem, index) => (      
        <tr key={index}  onClick={() => handleRowClick(index)} style={{ backgroundColor: selectedRow === index ? '#dfc5c5' : 'transparent' }}>
            <td id={index}>{elem.GlCode}</td>         
            <td id={index}>{elem.GlDesc}</td>                
            <td id={index}>{elem.GlShortName}</td>         
            <td id={index}>{elem.PanNo}</td>         
            <td id={index}>{elem.Catagory}</td>         
            <td id={index}>{elem.Balance}</td>         
            <td id={index}>{elem.CreditLimite	}</td>         
            <td id={index}>{elem.CreditDay}</td>         
            <td id={index}>{elem.Scheme	}</td>         
            <td id={index}>{elem.GrpCode	}</td>         
            <td id={index}>{elem.GrpDesc	}</td>         
             <td id={index}>{elem.SGrpCode}</td>     
             <td id={index}>{elem.SGrpDesc}</td>     
             <td id={index}>{elem.AgentCode}</td>     
             <td id={index}>{elem.AgentDesc}</td>     
             <td id={index}>{elem.AreaCode}</td>     
             <td >{elem.AreaDesc}</td>     
             <td >{elem.PrimaryGroup}</td>     
             <td >{elem.Address}</td>     
             <td >{elem.TelNo}</td>     
             <td >{elem.Mobile}</td>     
             <td >{elem.ContactPerson}</td>     
             <td >{elem.Id}</td>     
             <td >{elem.Subledger}</td>     
             <td >{elem.AddGrp1Desc}</td>     
             <td >{elem.AddGrp2Desc}</td>     
             <td >{elem.BlockBackDatedEntry}</td>         
        </tr>
    ))

}
 {/* {isLoading && <p>Loading more data...</p>} */}
    </tbody>  


</table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default TestModalPopup;