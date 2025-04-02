import Footer from '../Footer';

const MainLayout = ({ children }) => {
  return (
    <main>
      {children}
      <Footer />
    </main>
  );
};

export default MainLayout;
