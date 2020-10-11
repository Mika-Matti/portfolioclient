import React from "react";

const Imagecarousel = (props) => {
  const { images } = props;
  let int = 0;

  const getClassName = () => {
    console.log("called");
    int++;
    return int === 1 ? "item active" : "item";
  };

  const imageitems = images.map((image) => (
    <div
      key={image.link_id}
      className={`carousel-${getClassName()}`}
      style={{ height: 300 }}
    >
      <img
        src={image.link_url}
        className="d-block img-fluid"
        alt={image.link_desc}
        // style={{ maxHeight: "auto", maxWidth: "1140px" }}
      />
    </div>
  ));

  return (
    <div
      id="imagecarousel"
      className="carousel slide border-right"
      data-ride="carousel"
    >
      <div className="carousel-inner">{imageitems}</div>
    </div>
  );
};

export default Imagecarousel;
