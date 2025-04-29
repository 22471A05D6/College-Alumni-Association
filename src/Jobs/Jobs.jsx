import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Jobs.css';


const Jobs=()=>{
  return (
    <>
    <div className="jobs-container">
      <h2>Job and Internship Opportunities</h2>
      
      <div className="job-list">
        
            <div  className="job-card">
             
              <p><strong>Company:</strong> </p>
              <p><strong>Location:</strong> </p>
              <p><strong>Type:</strong> </p>
              
              <button className="apply-button">Apply</button>
            </div>
         
          <p>No job opportunities available at the moment.</p>
       
      </div>
    </div>
    </>
  );
}


export default Jobs;
