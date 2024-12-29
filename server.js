const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Employees')
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// Create Employee Schema
const employeeSchema = new mongoose.Schema({
  EmployeeName: String,
  EmployeeID: { type: String, unique: true },
  Designation: String,
  Department: String,
  JoiningDate: Date
});

const Employee = mongoose.model('Employee', employeeSchema);

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Add Employee
app.post('/add-employee', async (req, res) => {
  const employeeData = req.body;
  try {
    const employee = new Employee(employeeData);
    await employee.save();
    res.status(201).send("Employee added successfully");
  } catch (error) {
    res.status(400).send("Error adding employee");
  }
});

// Get all Employees
app.get('/employees', async (req, res) => {
    try {
      const employees = await Employee.find();
      res.status(200).json(employees);
    } catch (error) {
      res.status(400).send("Error fetching employee records");
    }
  });

// Search Employee by EmployeeID
app.get('/search-employee/:EmployeeID', async (req, res) => {
  try {
    const employee = await Employee.findOne({ EmployeeID: req.params.EmployeeID });
    if (employee) {
      res.status(200).json(employee);
    } else {
      res.status(404).send("Employee not found");
    }
  } catch (error) {
    res.status(400).send("Error searching for employee");
  }
});

// Update Employee Designation
app.put('/update-employee/:EmployeeID', async (req, res) => {
  try {
    const { Designation } = req.body;
    const employee = await Employee.findOneAndUpdate({ EmployeeID: req.params.EmployeeID }, { Designation }, { new: true });
    if (employee) {
      res.status(200).send("Designation updated successfully");
    } else {
      res.status(404).send("Employee not found");
    }
  } catch (error) {
    res.status(400).send("Error updating employee designation");
  }
});

// Delete Employee 
app.delete('/delete-employee/:EmployeeID',async(req,res)=>{
    try{
        const employeeee=await Employee.fundOneAndDelete({EmployeeID:req.params.EmployeeID});
        if(employeeee){
            res.status(200).send('deleted successfully');
        }
        else{
            res.status(404).send('error  deleting');
        }
    }catch(error){
        res.status(400).send('errrrrrrrrorrrrr');
        
    }
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
