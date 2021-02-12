import React, { useContext,useState } from "react";
import {Coursecontext}  from '../contexts.js/coursecontext';

// const AddTutorial = () => {
//     const {Courses} = useContext(Coursecontext); 

//     const handleInputChange = event => {
//         const { name, value } = event.target;
//         setTutorial({ ...tutorial, [name]: value });
//     };

//     const saveTutorial = () => {var data = {
//         title: tutorial.title,
//         description: tutorial.description
//     };

//     TutorialDataService.create(data)
//         .then(response => {
//         setTutorial({
//             id: response.data.id,
//             title: response.data.title,
//             description: response.data.description,
//             published: response.data.published
//         });
//         setSubmitted(true);
//         console.log(response.data);
//         })
//         .catch(e => {
//         console.log(e);
//         });
//     };

// const newTutorial = () => {
//   setTutorial(initialTutorialState);
//   setSubmitted(false);
// };

//     return (
//     // ...
//     );
//     };

// export default AddTutorial;

const AddCourseForm = () => {
    const {  addCourse } = useContext(Coursecontext);
    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    
    
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(name, author);
      addCourse(name,author);
      setName('');
      setAuthor('');
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="book title" value={name}
          onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="author name" value={author}
          onChange={(e) => setAuthor(e.target.value)} />
        <input type="submit" value="add book" />
      </form>
    );
  }
   
  export default AddCourseForm;