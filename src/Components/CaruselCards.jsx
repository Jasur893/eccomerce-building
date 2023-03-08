import Carousel from 'react-bootstrap/Carousel';

export default function CaruselCards(props) {
  return (
    <Carousel indicators={true} interval={null} controls={false} touch={true}>
      <Carousel.Item>
        <div className='h-[240px] flex justify-center'>
          <img className="h-full" src={props.fotos} alt="1-slide"/>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='h-[240px] flex justify-center'>
          <img className="h-full" src={props.fotos} alt="1-slide"/>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='h-[240px] flex justify-center'>
          <img className="h-full" src={props.fotos} alt="1-slide"/>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='h-[240px] flex justify-center'>
          <img className="h-full" src={props.fotos} alt="1-slide"/>
        </div>
      </Carousel.Item>
    </Carousel>
    
  )
}
