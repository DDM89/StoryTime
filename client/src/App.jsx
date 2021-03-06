import { BrowserRouter, Routes, Route } from "react-router-dom";
import './style/Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Test} from './components/ApiTest';
import SignUp from './components/SignUp';
import {Header} from './components/HeaderNav';
import {Home} from './components/Home'
import {Stories} from './components/Stories'
import AddStory from "./components/AddStory";

 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/stories" element={<Stories/>}></Route>
        <Route path="/addStory" element={<AddStory/>}></Route>
        <Route path="/signUp" element={<SignUp/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
