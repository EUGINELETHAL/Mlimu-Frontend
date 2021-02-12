import React, { useContext } from "react";
import Courselist from './Courselist';
import AddCourseForm from './AddCourse';
import Course from "./Course";
import { Switch, Route, Link } from "react-router-dom";



const Navbar = () => {
    return (
        <div>
            <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/tutorials" className="navbar-brand">
          bezKoder
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/tutorials"} className="nav-link">
              Tutorials
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>
      <div className="container mt-3">
        <Switch>
          <Route exact path="/" component={Courselist} />
          <Route exact path="/add" component={AddCourseForm} />
          <Route path="/tutorials/:id" component={Course} />
        </Switch>
      </div>

      
    </div>
           
        </div>
    )
}

export default Navbar;
