import React from "react";
import ImageComponent from "./ImageComponent";

const Gallery = (props) => {
  const { images } = props;

  const imageitems = images.map((image) => (
    <ImageComponent key={image.link_id} image={image} />
  ));

  return (
    <div className="container">
      <hr className="mt-2 mb-3" />

      <div className="row text-center text-lg-left">{imageitems}</div>
    </div>
  );
};

export default Gallery;
