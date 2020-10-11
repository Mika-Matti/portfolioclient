import React, { Component } from "react";
import { Consumer } from "../context";
import Projectnode from "./Projectnode";

export default class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          project_id: 1,
          project_name: "Projektinimi",
          project_desc: "kuvaus",
        },
      ],
    };
  }

  render() {
    return (
      <Consumer>
        {(value) => {
          const { projects } = value;
          return (
            <div className="container">
              {/* header */}
              <h1 className="display-5 my-3 text-left">Projektit</h1>
              {/* project nodes */}
              {projects.map((project) => (
                <Projectnode key={project.project_id} project={project} />
              ))}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
