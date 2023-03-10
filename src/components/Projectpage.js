import React, { Component } from "react";
import axios from "axios";

import Imagecarousel from "./Imagecarousel";
import Gallery from "./Gallery";

export default class Projectpage extends Component {
  state = {
    project_name: "",
    project_desc: "",
    project_content: "",
    images: [],
    links: [],
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    console.log(id);

    const projectData = `http://localhost:8080/projects/${id}`;
    const projectLinks = `http://localhost:8080/projects/${id}/links`;
    const projectImages = `http://localhost:8080/projects/${id}/images`;

    const requestOne = axios.get(projectData);
    const requestTwo = axios.get(projectLinks);
    const requestThree = axios.get(projectImages);

    axios.all([requestOne, requestTwo, requestThree]).then(
      axios.spread((...responses) => {
        const responseOne = responses[0];
        const responseTwo = responses[1];
        const responseThree = responses[2];
        this.setState({
          ...responseOne.data[0],
          links: responseTwo.data,
          images: responseThree.data,
        });
      })
    );
  }

  render() {
    const {
      project_name,
      project_desc,
      project_content,
      images,
      links,
    } = this.state;

    const linkItems = links.map((link) => (
      <li key={link.link_id}>
        <a href={link.link_url}>{link.link_desc}</a>
      </li>
    ));

    return (
      <div className="container">
        <Imagecarousel images={images} />
        <div className="px-3">
          <div className="row">
            <div className="col-lg-3 col-xs-12 border-right text-left ">
              <h3 className="mt-3 mb-1">Projektikuvaus</h3>
              <p>{project_desc}</p>
              <h3 className="mb-1">Lähdekoodit</h3>
              <ul>{linkItems}</ul>
            </div>
            <div className="col-lg-9 py-3 col-xs-12 border-right mb-3">
              <h2 className="text-left pt-1">{project_name}</h2>
              <div
                className="text-left"
                dangerouslySetInnerHTML={{
                  __html: project_content,
                }}
              ></div>
              <Gallery images={images} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
