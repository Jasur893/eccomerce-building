import './App.css';
import Layout from './Components/Layout';
import Banner from './Components/Banner'
import CardsSectionContent from './Components/CardsSectionContent'
import BrandSection from './Components/BrandSection';
import AboutUs from './Components/AboutUs';


function App() {
  return (
    <>
      <Layout>
        <Banner />
        <CardsSectionContent />
        <BrandSection />
        <AboutUs />
      </Layout>
    </>
  );
}


export default App;
