import React from "react";

export default class ImageComponent extends React.Component {
  state = { isOpen: false };

  handleShowDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  getClassName = () => {
    return this.state.isOpen
      ? "image mx-3 mb-3"
      : "col-lg-6 col-md-6 col-xs-6 thumb mb-3";
  };

  render() {
    const { link_url } = this.props.image;

    return (
      <div className={this.getClassName()}>
        <img
          className="img-fluid img-thumbnail border"
          src={link_url}
          alt=""
          onClick={this.handleShowDialog}
        />
      </div>
    );
  }
}
