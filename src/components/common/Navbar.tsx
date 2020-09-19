import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> <Link to="/signin">Sign In</Link>{" "}
        <Link to="/addnotes">Add notes</Link>
      </nav>
    </div>
  );
};

export default Navbar;