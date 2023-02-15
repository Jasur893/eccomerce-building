import './App.css';
import Layout from './Components/Layout';
import Banner from './Components/Banner'
import CardsSectionContent from './Components/CardsSectionContent'
import BrandSection from './Components/BrandSection';


function App() {
  return (
    <>
      <Layout>
        <Banner />
        <CardsSectionContent />
        <BrandSection />
      </Layout>
    </>
  );
}


export default App;
