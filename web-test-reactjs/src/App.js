import Banner from './components/Banner';
import BestProduct from './components/BestProduct';
import BrandStory from './components/BrandStory';
import Description from './components/Description';
import Footer from './components/Footer';
import Header from './components/Header';
import Issue from './components/Issue';
import ListProduct from './components/ListProduct';
import SubBanner from './components/SubBanner';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <SubBanner />
      <BestProduct />
      <ListProduct />
      <BrandStory />
      <Issue />
      <Description />
      <Footer />
    </div>
  );
}

export default App;
