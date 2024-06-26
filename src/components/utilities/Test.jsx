import React, { useEffect, useState, useRef } from 'react';

function Test() {
  const [tableData, setTableData] = useState([]);
  const [fetchedData, setFetchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState(''); // State for search term
  const containerRef = useRef(null); // Ref to the scrollable container

  // Function to load more data
  const loadMoreData = () => {
    const currentLength = tableData.length;
    const newData = fetchedData.slice(currentLength, currentLength + 20); // Load next 20 items
    setTableData([...tableData, ...newData]); // Append new data
  };

  // Function to handle scroll event
  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = containerRef.current;
    if (scrollHeight - scrollTop === clientHeight) {
      // Reached the bottom
      loadMoreData();
    }
  };

  async function getData() {
    try {
      setIsLoading(true);
      let response = await fetch("http://localhost:802/Api/MasterList/ListLedgers?DbName=DEMO808101&GlCode=&Catagory=&GrpCode=&SGrpCode=&BranchCode=");
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
    getData();
  }, []);

  // Function to handle row click and highlight
  const [selectedRow, setSelectedRow] = useState(null);
  const handleRowClick = (index) => {
    setSelectedRow(index === selectedRow ? null : index); // Toggle selection
  };

  
  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter table data based on search term
  useEffect(() => {
    const filteredData = fetchedData.filter(item =>
      item.GlDesc.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setTableData(filteredData.slice(0, 20)); // Limit display to first 20 filtered items
  }, [searchTerm, fetchedData]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search by GlDesc..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div ref={containerRef} onScroll={handleScroll} style={{ height: "400px", overflow: "auto" }}>
        <table>
          <thead>
            <tr>
              <th>GlCode</th>
              <th>GlDesc</th>
              <th>GlShortName</th>
              {/* Add more headers as needed */}
            </tr>
          </thead>
          <tbody>
            {tableData.map((elem, index) => (
              <tr key={index} onClick={() => handleRowClick(index)} style={{ backgroundColor: selectedRow === index ? '#dfc5c5' : 'transparent' }}>
                <td>{elem.GlCode}</td>
                <td>{elem.GlDesc}</td>
                <td>{elem.GlShortName}</td>
                {/* Render other table data fields */}
              </tr>
            ))}
          </tbody>
        </table>
        {isLoading && <p>Loading more data...</p>}
      </div>
    </div>
  );
}

export default Test;
