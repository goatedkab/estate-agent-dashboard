import React from "react";
import "./Updates.css";
import { UpdatesData } from "../../../Data/Data";

const Updates = () => {
  return (
      <div className="Updates">
      <h2 className="section-title">Upcoming Viewings</h2>
      <div className="table-holder">

    <table class="styled-table">
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
            <div className="profilePic">
              <img src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=2000"></img>
            </div> 
            <b>Dominic</b>
            </div>
            </td>

            <td>
            <div className="property-cell">
            <div className="bullet-point" style={{backgroundColor: '#fae09f'}}></div><span>23, belgrave rd, Fulham</span>
            </div>
            </td>

            <td>
            <div className="date-cell">
            11:30AM, Dec 8
            </div>
            </td>
        </tr>
        

        <tr>
            <td > 
            <div className="agent-cell">
            <div className="profilePic">
              <img src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436200.jpg?w=2000"></img>
            </div> 
            <b>Victor</b>
            </div>
            </td>

            <td>
            <div className="property-cell">
            <div className="bullet-point" style={{backgroundColor: '#f8c9a3'}}></div><span>4, Hildyard rd, West Brompton</span>
            </div>
            </td>

            <td>
            <div className="date-cell">
            15:15PM, Dec 8
            </div>
            </td>
        </tr>

        <tr>
            <td > 
            <div className="agent-cell">
            <div className="profilePic">
              <img src="https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436191.jpg"></img>
            </div> 
            <b>Jerrico</b>
            </div>
            </td>

            <td>
            <div className="property-cell">
            <div className="bullet-point" style={{backgroundColor: '#9cd3fb'}}></div><span>13, Snide rd, Kensington</span>
            </div>
            </td>

            <td>
            <div className="date-cell">
            13:00PM, Dec 9
            </div>
            </td>
        </tr>

        
    </tbody>
</table>
</div>
</div>


    // <div className="Updates">
    //   <h2>Updates</h2>
    //   {UpdatesData.map((update) => {
    //     return (
    //       <div className="update">
    //         <img src={update.img} alt="profile" />
    //         <div className="noti">
    //           <div  style={{marginBottom: '0.5rem'}}>
    //             <span>{update.name}</span>
    //             <span> {update.noti}</span>
    //           </div>
    //             <span>{update.time}</span>
    //         </div>
    //       </div>
    //     );
    //   })}
    // </div>



  );
};

export default Updates;
