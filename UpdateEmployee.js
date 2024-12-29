import React, { useState } from 'react';
import axios from 'axios';

function UpdateEmployee() {
  const [employeeID, setEmployeeID] = useState('');
  const [designation, setDesignation] = useState('');

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:3001/update-employee/${employeeID}`, { Designation: designation });
      alert('Designation updated successfully');
    } catch (error) {
      alert('Error updating designation');
    }
  };

  return (
    <div>
      <input type="text" placeholder="Enter Employee ID" value={employeeID} onChange={(e) => setEmployeeID(e.target.value)} />
      <input type="text" placeholder="Enter New Designation" value={designation} onChange={(e) => setDesignation(e.target.value)} />
      <button onClick={handleUpdate}>Update Designation</button>
    </div>
  );
}

export default UpdateEmployee;
