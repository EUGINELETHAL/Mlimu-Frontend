import React, { useState, createContext } from 'react'
import { nanoid } from "nanoid";

export const Coursecontext = createContext()
const CoursecontextProvider = (props) => {
    const Courselist = [
        { id: "Course-0", name: "Introduction to Java",author: 'patrick rothfuss',},
        { id: "Course-1", name: "REACT TEsting",author: 'patrick rothfuss', },
        { id: "Course-2", name: "Repeat",author: 'patrick rothfuss',}
    ]
    const [Courses, setCourses] = useState(Courselist)
    const addCourse = (name,author) => {
        const newCourse = { id: "Course-" + nanoid(), name ,author};
        setCourses([...Courses, newCourse]);
    }

    const deleteCourse = (id) => {
        const remainingCourses = Courses.filter(Course => id !== Course.id);
        setCourses(remainingCourses);
    }
    return (
       <Coursecontext.Provider value={{Courses,addCourse,deleteCourse}}>
         {props.children}
       </Coursecontext.Provider>
    );


}

export default CoursecontextProvider;