import React,{useState} from 'react';
import axios from 'axios';

function DeleteEmployee(){
    const[employeeid,setEmployeeID]=useState('');

    const handleDelete=async()=>{
        try{
            await axios.delete(`http://localhost:3001/delete-book${employeeid}`);
            alert('deleted successfully');
        }catch(error){
            alert('error deleting')
        }
    };
    return(
        <div>
            <input type='text' placehoder='employeeid' value={employeeid} onChange={(e)=>setEmployeeID(e.target.value)}/>
            <button onClickt={handleChange}>submit d</button>
        </div>
    );
}
export default DeleteEmployee;