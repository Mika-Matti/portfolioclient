import React from "react";
import ImageComponent from "./ImageComponent";

const Gallery = (props) => {
  const { images } = props;

  const imageitems = images.map((image) => (
    // <div key={image.link_id} class="col-lg-3 col-md-4 col-6">
    //   <a href="#" class="d-block mb-4 h-100">
    //     <img class="img-fluid img-thumbnail" src={image.link_url} alt="" />
    //   </a>
    // </div>
    <ImageComponent key={image.link_id} image={image} />
  ));

  return (
    <div class="container">
      <h3 class="text-lg-left mt-3 mb-0">Gallery</h3>

      <hr class="mt-2 mb-3" />

      <div class="row text-center text-lg-left">{imageitems}</div>
    </div>
  );
};

export default Gallery;
