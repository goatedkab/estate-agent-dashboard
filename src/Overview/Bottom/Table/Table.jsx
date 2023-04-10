import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

function createData(name, date, status) {
  return { name, date, status };
}

const rows = [
  createData("Lasania Chiken Fri", "2 March 2022", "Approved"),
  createData("Big Baza Bang ", "2 March 2022", "Pending"),
  createData("Cupcake", "2 March 2022", "Delivered"),
];


const makeStyle=(status)=>{
  if(status === 'Approved')
  {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    }
  }
  else if(status === 'Pending')
  {
    return{
      background: '#ffadad8f',
      color: 'red',
    }
  }
  else{
    return{
      background: '#59bfff',
      color: 'white',
    }
  }
}

export default function BasicTable() {
  return (
      <div className="Table">
        <h2 className="section-title">Recent Messages</h2>
        <table class="landlord-messages">
    <thead>
        <tr>
            <th>Property</th>
            <th>Designated</th>
            <th>Time</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td > 
            <div className="agent-cell">
            <div className="propertyPic">
              <img src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=2000"></img>
            </div> 
            <b>Dominic</b>
            </div>
            </td>

            <td>
            <div className="property-cell">
            <div className="propertyPic">
              <img src="https://media.rightmove.co.uk/44k/43775/133426481/43775_P261736_IMG_00_0000.jpeg"></img>
            </div> 
             <span>23, belgrave road, Fulham</span>
            </div>
            </td>
            <td>
            <div className="date-cell">
            <div className="bullet-point"></div> 11:30AM, Dec 8
            </div>
            </td>
        </tr>
        

    </tbody>
</table>
      </div>
  );
}

{/* <span className="status" style={makeStyle(row.status)}>{row.status}</span> */}
