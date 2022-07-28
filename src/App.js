import Footer from "../src/components/footer/Footer";
import NavBar from "../src/components/navBar/NavBar";
import FirstPage from "../src/components/firstPage/FirstPage";
import SecondPage from "../src/components/secondPage/SecondPage";
import ThirdPage from "../src/components/thirdPage/ThirdPage";
import FourthScreen from "../src/components/fourthScreen/FourthScreen";
function App() {
  return (
    <div className="App">
      <NavBar />
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthScreen />
      <Footer />
    </div>
  );
}

export default App;
