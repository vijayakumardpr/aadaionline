import { Provider } from "react-redux";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";
import store from "./utils/store";
import CardCarousel from "./components/card-carousel/CardCarousel";
import Accordion from "./components/accordion/Accordion";

const App = () => {
  return (
    <Provider store={store}>
      <Sidebar />
      <Navbar />
      {/* <Footer /> */}
      <CardCarousel />
      <Accordion/>
    </Provider>
  );
};

export default App;
