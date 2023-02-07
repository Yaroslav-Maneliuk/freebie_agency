import "./App.css";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import Introduction from "./component/main/introduction/Introduction";
import OurServices from "./component/main/our_services/OurServices";
import LatestWorks from "./component/main/latest_works/LatestWorks";
import OurTeam from "./component/main/our_team/OurTeam";
import Review from "./component/main/review/Review";
import Conaction from "./component/main/conaction/Conaction";

function App() {
  return (
    <div>
      <Header />
      <Introduction />
      <OurServices />
      <LatestWorks />
      <OurTeam />
      <Review />
      <Conaction />
      <Footer />
    </div>
  );
}

export default App;
