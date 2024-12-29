import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ViewEmployees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:3001/employees');
        setEmployees(response.data);
      } catch (error) {
        alert('Error fetching employees');
      }
    };
    fetchEmployees();
  }, []);

  return (
    <div>
      <h2>Employee Records</h2>
      {employees.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Employee ID</th>
              <th>Designation</th>
              <th>Department</th>
              <th>Joining Date</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.EmployeeID}>
                <td>{employee.EmployeeName}</td>
                <td>{employee.EmployeeID}</td>
                <td>{employee.Designation}</td>
                <td>{employee.Department}</td>
                <td>{new Date(employee.JoiningDate).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No employee records found.</p>
      )}
    </div>
  );
}

export default ViewEmployees;
