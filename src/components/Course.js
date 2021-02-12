import React from 'react'
import { MDBBtn, MDBCol, MDBContainer, MDBRow, MDBAnimation} from "mdbreact";
import {
  MDBEdgeHeader,
  MDBFreeBird,
  MDBCardBody,
  MDBIcon,
  MDBCard,
  MDBCardTitle,
  MDBCardImage,
  MDBCardText,
  MDBNavLink
} from 'mdbreact';
import './HomePage.css';
import "../index.css";


const Course = ({course}) => {
  return (
  
         
                  <MDBCol md='4'>
                    <MDBAnimation reveal type='fadeInLeft'>
                      <MDBCard cascade className='my-3 grey lighten-4'>
                        <MDBCardImage
                          cascade
                          className='img-fluid'
                          src='https://mdbootstrap.com/wp-content/uploads/2016/08/mdb.jpg'
                        />
                        <MDBCardBody cascade className='text-center'>
                          <MDBCardTitle>
                            <MDBIcon
                              icon='css3'
                              brand
                              className='pink-text pr-2'
                            />
                            <strong>{course.author}</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                          {course.name}
                          </MDBCardText>
                          <MDBNavLink
                            tag='button'
                            to='/css'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                           
                          >
                           Enroll to Course
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>  
                

  
        
       
  
  
  )
}

export default Course


