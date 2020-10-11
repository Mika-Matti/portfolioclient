import React from "react";

export default class ImageComponent extends React.Component {
  state = { isOpen: false };

  handleShowDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  getClassName = () => {
    console.log("called");
    return this.state.isOpen ? "image mx-3 my-3" : "col-lg-3 col-md-4 col-6";
  };

  render() {
    const { link_url } = this.props.image;

    return (
      <div className={this.getClassName()}>
        <img
          className="img-fluid img-thumbnail"
          src={link_url}
          alt=""
          onClick={this.handleShowDialog}
        />

        {/* {this.state.isOpen && (
          <dialog
            className="dialog"
            style={{ position: "absolute" }}
            open
            onClick={this.handleShowDialog}
          >
            <img
              className="image"
              src={link_url}
              onClick={this.handleShowDialog}
              alt="no image"
            />
          </dialog>
        )} */}
      </div>
    );
  }
}
