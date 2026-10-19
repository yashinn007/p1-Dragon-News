import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      {children}
    </>
  );
};

export default MainLayout;
