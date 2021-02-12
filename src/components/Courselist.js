import React, { useContext } from "react";
import {Coursecontext}  from '../contexts.js/coursecontext';
import Course from "./Course";


function Courselist() {
  const {Courses} = useContext(Coursecontext);
  const courselist1= Courses.map((course) =>(<Course course={course} key={course.id} name= {course.name}/>  ));
  

    return Courses.length ? (
      <div className="book-list">
        <ul>
         
    {courselist1}
  
        </ul>
       
      </div>
    ) : (
      <div className="empty">No books to read. Hello free time :).</div>
    );
  }
  

export default Courselist

