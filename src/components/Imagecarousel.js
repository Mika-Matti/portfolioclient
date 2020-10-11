import React from "react";

const Imagecarousel = (props) => {
  const { images } = props;
  let int = 0;

  const getClassName = () => {
    int++;
    return int === 1 ? "item active text-left" : "item text-left";
  };

  const imageitems = images.map((image) => (
    <div
      key={image.link_id}
      className={`carousel-${getClassName()}`}
      style={{ maxHeight: 400, backgroundColor: "#0c0c0c" }}
    >
      <img
        src={image.link_url}
        className="img-fluid-carousel img-fluid"
        alt={image.link_desc}
      />
    </div>
  ));

  return (
    <div
      id="imagecarousel"
      className="carousel slide border-bottom border-top"
      data-ride="carousel"
    >
      <div className="carousel-inner">{imageitems}</div>
    </div>
  );
};

export default Imagecarousel;
