import Carousel from 'react-bootstrap/Carousel';

export default function CaruselCards(props) {
  const phots = props.fotos

  return (
    <Carousel indicators={true} interval={null} controls={false} touch={true}>
      {
        phots.cardsPhoto.map((el, id) => (
          <Carousel.Item key={id}>
            <img className="d-block w-100" src={el} alt="1 slide"/>
          </Carousel.Item>
        ))
      }
    </Carousel>
    
  )
}