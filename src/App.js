import "./App.css";
import NavBar from "./components/NavBar";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        {/* <Blog />
        <Comment Comment ='here i am'/> */}
      </header>
      <body>
        <div className="first-section">
          <FirstSection />
        </div>
        <SecondSection />
        <Footer />
      </body>
    </div>
  );
}

export default App;
