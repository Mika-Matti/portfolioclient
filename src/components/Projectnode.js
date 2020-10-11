import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Projectnode extends Component {
  state = {
    images: [{ link_url: "http://localhost:8080/images/noimage.png" }],
  };

  componentDidMount() {
    axios
      .get(
        `http://localhost:8080/projects/${this.props.project.project_id}/images`
      )
      .then((res) => {
        if (!res.data.length) {
          console.log("No image available");
        } else {
          this.setState({ images: res.data });
        }
      });
  }

  render() {
    const { project_id, project_name, project_desc } = this.props.project;
    const { link_url } = this.state.images[0];

    return (
      <div className="row mx-0 border-bottom pb-3 mb-3">
        <div className="col-md-7 px-0">
          <Link to={`projects/${project_id}`}>
            <img
              className="img-fluid rounded mb-3 mb-md-0"
              style={{ height: 300, width: 700, objectFit: "scale-down" }}
              src={link_url}
              alt="http://placehold.it/700x300"
            />
          </Link>
        </div>
        <div className="col-md-5 text-left">
          <h3>{project_name}</h3>
          <p>{project_desc}</p>
          <Link
            type="button"
            className="btn btn-dark"
            to={`projects/${project_id}`}
          >
            Lue lisää
          </Link>
        </div>
      </div>
    );
  }
}

Projectnode.propTypes = {
  project: PropTypes.object.isRequired,
};
