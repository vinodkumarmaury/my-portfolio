import logo from './logo.svg';
import './App.css';
import Home from './page/page';
import Navbar from "../src/components/Navbar/Navbar"
function App() {
  return (
    <div style={{overflowX:'hidden'}}>
    <Navbar/>
    <Home/>
   </div>
  );
}

export default App;
