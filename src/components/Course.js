import React from 'react'

const Course = ({course}) => {
  return (
    <div>
    
        
        <div className="title">{course.name}</div>
        <div className="author">{course.author}</div>
      
  
    </div>
  )
}

export default Course


