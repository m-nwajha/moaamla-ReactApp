import Header from '../../components/Header';
import Footer from '../../components/Footer';

const HomeLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default HomeLayout;
