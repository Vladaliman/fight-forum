import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

function Navbar() {
  return (
    <nav className="nav-wraper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          Fight Forum
        </Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  );
}
const mapStateToProps = (state) => {
  console.log(state);
  return {};
};
export default connect(mapStateToProps)(Navbar);
