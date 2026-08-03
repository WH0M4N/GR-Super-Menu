import Navbar from "./components/Navbar";
import HomePageContainer from "./components/HomePageContainer";
import Footer from "./components/Footer";
import BrickWallBg from "./components/shared/BrickWallBg";

const HomePage = () => {
  return (
    <BrickWallBg>
      <>
        <Navbar />

        <div style={{ flex: 1 }}>
          <HomePageContainer />
        </div>

        <Footer />
      </>
    </BrickWallBg>
  );
};

export default HomePage;
