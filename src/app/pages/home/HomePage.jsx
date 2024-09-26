import Home from "./Home";
import HomeBody from "./HomeBody";

import VideoSection from "../../components/vedio/VideoSection";
import FindersCard from "../../components/finders/FindersCard.jsx";
import News from "../../components/news/News.jsx";
import NavBarTabs from "../../components/Nav/NavBarTabs.jsx";
// import BodyCard from "../../components/body/BodyCard.jsx";

const HomePage = () => {
  return (
    <>
      <Home />
      <HomeBody />
      <VideoSection />
      <News />
    </>
  );
};

export default HomePage;
