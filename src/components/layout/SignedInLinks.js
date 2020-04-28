import React from "react";
import { NavLink } from "react-router-dom";

export default function SignedInLinks() {
  return (
    <ul className="right">
      <li>
        <NavLink to="/">New Fight</NavLink>
      </li>
      <li>
        <NavLink to="/">Log out</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1"></NavLink>
      </li>
    </ul>
  );
}
