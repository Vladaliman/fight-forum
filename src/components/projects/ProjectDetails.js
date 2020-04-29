import React from "react";

export default function ProjectDetails(props) {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title -{id}</span>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse,
            doloribus aliquid. Eveniet libero assumenda explicabo maxime earum
            dolore amet ipsum aperiam reiciendis iste, perspiciatis, quo
            pariatur voluptatem sed excepturi repudiandae.
          </p>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by Dovlicar</div>
            <div>Posted on 20 september</div>
          </div>
        </div>
      </div>
    </div>
  );
}
