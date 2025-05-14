import AuthContext from '../../context/AuthContext';

const MainLayout = ({ children }) => {
  return (
    <main>
      <AuthContext>{children}</AuthContext>
    </main>
  );
};

export default MainLayout;
