// import AddProduct from './AddProduct';
import AboutUs from './AboutUs';
import Banner from './Banner';
import BrandSection from './BrandSection';
import CardsSectionContent from './CardsSectionContent';
import FilterSlider from './FilterSlider';
import NewsSection from './NewsSection';

export default function MainHeader() {
  return (
    <>
      {/* <AddProduct/> */}
      <Banner />
      <CardsSectionContent />
      <BrandSection />
      <AboutUs />
      <FilterSlider />
      <NewsSection />
    </>
  )
}