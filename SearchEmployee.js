import React, { useState } from 'react';
import axios from 'axios';

function SearchEmployee() {
  const [employeeID, setEmployeeID] = useState('');
  const [employee, setEmployee] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/search-employee/${employeeID}`);
      setEmployee(response.data);
      setError('');
    } catch (error) {
      setEmployee(null);
      setError('Employee not found');
    }
  };

  return (
    <div>
      <input type="text" placeholder="Enter Employee ID" value={employeeID} onChange={(e) => setEmployeeID(e.target.value)} />
      <button onClick={handleSearch}>Search Employee</button>
      {employee && (
        <textarea rows="4" value={JSON.stringify(employee, null, 2)} readOnly />
      )}
      {error && <p>{error}</p>}
    </div>
  );
}

export default SearchEmployee;
