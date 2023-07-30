import Card from "react-bootstrap/Card";

function Image({ image }) {
  console.log(image);
  //return <img src={image.urls.small} alt={image.alt_description} />;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image.urls.small} />
      <Card.Body>
        <Card.Text>Picture taken by : {image.user.name}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Image;
