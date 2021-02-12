import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import "./index.css";
import logo from "./logo.png";
import Course from "./components/Course";
import Form from "./components/Form";
import React, { useState } from "react";
import { nanoid } from "nanoid";
import Courselist from './components/Courselist';
import Navbar from './components/Navbar';
import AddCourseForm from './components/AddCourse';
import CoursecontextProvider from  './contexts.js/coursecontext';





function App() {
  return (
    
    <div>
     
       <CoursecontextProvider>
         <Navbar/>
         <MDBContainer>
        <MDBRow center style={{ height: "100vh" }}>
          <MDBCol middle="true" sm="8" className="text-center">
            <img src={logo} alt="logo" style={{ width: "10rem" }} />
            <h1>Welcome to Your MDB React App</h1>
            <p className="mb-2">The application is configured and ready to import our components.</p>
            <MDBBtn href="https://mdbootstrap.com/docs/react/" target="blank" color="light-blue"><strong>Check out our docs!</strong></MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Courselist/> 
     
      < AddCourseForm/>
             
           </CoursecontextProvider>
     
    </div>
  )
}

export default App
