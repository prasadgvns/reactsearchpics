import Image from "./Image";

function ImageList({ images }) {
  const renderImages = images.map((image) => (
    <Image image={image} key={image.id} />
  ));
  return <div>{renderImages}</div>;
}

export default ImageList;
