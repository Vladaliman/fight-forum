import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

function SignedInLinks(props) {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New Fight</NavLink>
      </li>
      <li>
        <button onClick={props.signOut}>Log out</button>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          {props.profile.initials}
        </NavLink>
      </li>
    </ul>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => {
      dispatch(signOut());
    },
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
