import Carousel from 'react-bootstrap/Carousel';
import f1 from './img/f1.jpg';
import f2 from './img/f2.jpg';
import f3 from './img/f3.jpg';
function Carousell() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={f3}
          alt="First slide"
          style={{height:'auto',width:'200px'}}
        />
        <Carousel.Caption style={{color:'black'}}> 
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={f2}
          alt="Second slide"
          style={{height:'auto',width:'200px'}}
        />

        <Carousel.Caption style={{color:'black'}}>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={f1}
          alt="Third slide"
          style={{height:'auto',width:'200px'}}
        />

        <Carousel.Caption style={{color:'black'}}> 
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousell;