import Carousel from 'react-bootstrap/Carousel';
import card01 from '../img/caruselcard/card01.png'

export default function CaruselCards() {
  return (
    <Carousel indicators={true} interval={null} controls={false} touch={true}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={card01}
          alt="1 slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={card01}
          alt="2 slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={card01}
          alt="3 slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={card01}
          alt="4 slide"
        />
      </Carousel.Item>
    </Carousel>
    
  )
}