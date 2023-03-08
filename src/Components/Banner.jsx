import BannerItem from './BannerItem'
import banner01 from '../assets/banner/banner01.jpg'
import banner02 from '../assets/banner/banner02.jpg'
import banner03 from '../assets/banner/banner03.jpg'
import banner04 from '../assets/banner/banner04.jpg'

const titleObj = {
  title1: "DeWALT - Инструмент настоящим характером",
  title2: "Акции",
  title3: "Новое поступление",
  title4: "Акции на сверла"
}

export default function Banner() {
  return (
    <div className='py-6 bg-dark'>
      <div className="container_content grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-rows-2 gap-4">
        <div className="col-span-2 row-span-2">
          <BannerItem banner={banner01} title={titleObj.title1} />
        </div>

        <div className="row-span-2">
          <BannerItem banner={banner02} title={titleObj.title2} />
        </div>
        <div className="col-span-1">
          <BannerItem banner={banner03} title={titleObj.title3} />
        </div>
        <div className="col-span-1">
          <BannerItem banner={banner04} title={titleObj.title4} />
        </div>
      </div>
    </div>
  )
}