import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import './style/Header.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Test} from './components/ApiTest';
// import {Forms} from './components/Form';
import {Header} from './components/HeaderNav';
import {Home} from './components/Home'
import {Stories} from './components/Stories'
 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      {/* <Home></Home> */}
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/stories" element={<Stories/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
