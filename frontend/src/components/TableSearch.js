import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const TableSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/companies');
      setData(response.data);
      setFilteredData(response.data); // Set filtered data initially to all data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    const filtered = data.filter(company =>
      company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.location.toLowerCase().includes(searchTerm.toLowerCase())
      // Add other fields you want to search by
    );
    setFilteredData(filtered);
  };

  return (
    <div style={{textAlign: "Center"}}>
      <input style={{padding: "10px",  left: "50%", color: "#fff",width: "50%",padding:"9px",margin:"10px",
  height: "30px",
  border: "3px solid #00b4cc",
  background:" #9dbfaf"}}
      
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search..."
      />
       <button type="submit" className="searchButton">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
      <table style={{border:"1px solid black", borderCollapse: "collapse"}}>
        <thead style={{border:"1px solid black"}}>
          <tr  style={{backgroundColor: "lightblue"}}>
            <th>Name</th>
            
            <th>Revenue</th>
            <th>Employee</th>
            <th>Founded Year</th>
            <th>Location</th>
            <th>Keywords</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(company => (
            <tr key={company.id}>
              <td>{company.name}</td>
              <td>{company.revenue}</td>
              <td>{company.employee}</td>
              <td>{company.foundedyear}</td>
              <td>{company.location}</td>
              <td>{Array.isArray(company.keywords) ? company.keywords.join(', ') : ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableSearch;
