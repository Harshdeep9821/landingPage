import Footer from "../src/components/footer/Footer";
import NavBar from "../src/components/navBar/NavBar";
import FirstPage from "../src/components/firstPage/FirstPage";
import SecondPage from "../src/components/secondPage/SecondPage";
function App() {
  return (
    <div className="App">
      <NavBar />
      <FirstPage />
      {/* <h1>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1> */}
      <SecondPage />
      <Footer />
    </div>
  );
}

export default App;
