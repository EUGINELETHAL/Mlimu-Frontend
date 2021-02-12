import React, { useContext } from "react";
import {Coursecontext}  from '../contexts.js/coursecontext';
import Course from "./Course";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import {
  MDBEdgeHeader,
  MDBFreeBird,
  MDBCardBody,
  MDBIcon,
  MDBCard,
  MDBCardTitle,
  MDBCardImage,
  MDBCardText,
  MDBAnimation,
  MDBNavLink
} from 'mdbreact';
import './HomePage.css';
import "../index.css";

function Courselist() {
  const {Courses} = useContext(Coursecontext);
  const courselist1= Courses.map((course) =>(<Course course={course} key={course.id} name= {course.name}/>  ));
  

    return Courses.length ? (
   
       
        <MDBRow>
              <MDBCol md='12' className='mt-4'>
                <h2 className='text-center my-5 font-weight-bold'>
                  Why is it so great?
                </h2>
                <p className='text-center text-muted mb-1'>
                  Google has designed a Material Design to make the web more
                  beautiful and more user-friendly.
                </p>
                <p className='text-center text-muted mb-1'>
                  Twitter has created a Bootstrap to support you in faster and
                  easier development of responsive and effective websites.
                </p>
                <p className='text-center text-muted'>
                  We present you a framework containing the best features of
                  both of them - Material Design for Bootstrap.
                </p>
                <hr className='my-5' />

                </MDBCol>  
                {courselist1}
                  </MDBRow>  
  
              
       
       
     
    ) : (
      <div className="empty">No books to read. Hello free time :).</div>
    );
  }
  

export default Courselist

