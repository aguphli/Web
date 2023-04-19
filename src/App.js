import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Router,Route} from "react-router-dom";
import Home from './components/Home';
import Edit from './Admin/Edit';
import Login from './Admin/Login';
import Register from './Admin/Register';
import Header from './Admin/Header';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>  
          <Route exact path="/"  element={<Home/>}/>          
        </Routes> 

        <Routes>  
          <Route exact path="/cpanel"  element={<Header/>}/>          
        </Routes> 
        <Routes>  
          <Route exact path="/cpanel"  element={<Edit/>}/>          
        </Routes> 

        <Routes>  
          <Route exact path="/clog"  element={<Login/>}/>          
        </Routes>

        <Routes>  
          <Route exact path="/creg"  element={<Register/>}/>          
        </Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;
