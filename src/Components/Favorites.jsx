import CardItem from './CardItem';

export default function Favorites() {
  return (
    <div className='container_content pb-4'>
      <h1 className='text-3xl py-3'>Избранное</h1>
     <div className='grid lg:grid-cols-4 gap-3'>
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
     </div>
    </div>
  )
}