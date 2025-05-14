import AboutAds from '../../components/AboutAds';
import Hero from '../../components/Hero';
import HowUsed from '../../components/HowUsed';
import LastServices from '../../components/LastServices';
import PageLoader from '../../components/PageLoader';
import Reviews from '../../components/Reviews';
const Home = () => {

  return (
    <>
      <PageLoader />
      <Hero />
      <LastServices />
      <HowUsed />
      <AboutAds />
      <Reviews />
    </>
  );
};

export default Home;
