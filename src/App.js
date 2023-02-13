import Navbar from "./component/Navbar/Navbar";
import Intro from "./component/Intro/Intro";
import './App.css'
import Services from "./component/Services/Services";
import Expreince from "./component/Experience/Expreince";
import Work from "./component/Work/Work";
import Portfolio from "./component/Portfolio/Portfolio";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <Expreince/>
      <Work/>
      <Portfolio/>
     
    </div>
  );
}

export default App;
