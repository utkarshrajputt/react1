import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import img from "./img/land.jpg";

function Card1(props) {
  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-sm">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src='https://picsum.photos/200/301' style={{height:'200px'}} />
            <Card.Body>
              <Card.Title>Finance</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              {/* <Button variant="success mr-2">Interested</Button> */}
              {/* <Button variant="danger mr-2">Not Interested</Button> */}

            </Card.Body>
          </Card>
        </div>
        <div className="col-sm">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src='https://picsum.photos/201/300' style={{height:'200px'}} />
            <Card.Body>
              <Card.Title>Accounts</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              {/* <Button variant="success mr-2">Interested</Button> */}
              {/* <Button variant="danger mr-2">Not Interested</Button> */}

            </Card.Body>
          </Card>
        </div>
        <div className="col-sm">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src='https://picsum.photos/200/302' style={{height:'200px'}} />
            <Card.Body>
              <Card.Title>Sales</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              {/* <Button variant="success mr-2">Interested</Button> */}
              {/* <Button variant="danger mr-2">Not Interested</Button> */}

            </Card.Body>
          </Card>
        </div>
        <div className="col-sm">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src='https://picsum.photos/202/300' style={{height:'200px'}} />
            <Card.Body>
              <Card.Title>Purchase</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              {/* <Button variant="success mr-2">Interested</Button> */}
              {/* <Button variant="danger mr-2">Not Interested</Button> */}

            </Card.Body>
          </Card>
        </div>
      </div>


      <div className="row my-5">
        <div className="col-sm">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src='https://picsum.photos/203/301' style={{height:'200px'}} />
            <Card.Body>
              <Card.Title>Marketing</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              {/* <Button variant="success mr-2">Interested</Button> */}
              {/* <Button variant="danger mr-2">Not Interested</Button> */}

            </Card.Body>
          </Card>
        </div>
        <div className="col-sm">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src='https://picsum.photos/201/304' style={{height:'200px'}} />
            <Card.Body>
              <Card.Title>Business</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              {/* <Button variant="success mr-2">Interested</Button> */}
              {/* <Button variant="danger mr-2">Not Interested</Button> */}

            </Card.Body>
          </Card>
        </div>
        <div className="col-sm">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src='https://picsum.photos/205/302' style={{height:'200px'}} />
            <Card.Body>
              <Card.Title>Industry</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              {/* <Button variant="success mr-2">Interested</Button> */}
              {/* <Button variant="danger mr-2">Not Interested</Button> */}

            </Card.Body>
          </Card>
        </div>
        <div className="col-sm">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src='https://picsum.photos/202/306' style={{height:'200px'}} />
            <Card.Body>
              <Card.Title>Firm</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              {/* <Button variant="success mr-2">Interested</Button> */}
              {/* <Button variant="danger mr-2">Not Interested</Button> */}

            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Card1;
