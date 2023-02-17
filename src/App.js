import './App.css';
import Layout from './Components/Layout';
import Banner from './Components/Banner'
import CardsSectionContent from './Components/CardsSectionContent'
import BrandSection from './Components/BrandSection';
import AboutUs from './Components/AboutUs';
import FilterSlider from './Components/FilterSlider';
import NewsSection from './Components/NewsSection';

function App() {
  return (
    <>
      <Layout>
        <Banner />
        <CardsSectionContent />
        <BrandSection />
        <AboutUs />
        <FilterSlider />
        <NewsSection />
      </Layout>
    </>
  );
}


export default App;
