import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Router,Route} from "react-router-dom";
import Home from './components/Home';
import Edit from './Admin/Edit';
import Login from './Admin/Login';
import Register from './Admin/Register';
import Header from './Admin/Header';
import Receipt from './components/Receipt';
import ListOrders from './components/ListOrders';
import ListUsers from './Admin/ListUsers';

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
        <Routes>  
          <Route exact path="/pdf"  element={<Receipt/>}/>          
        </Routes>
        <Routes>  
          <Route exact path="/orders"  element={<ListOrders/>}/>          
        </Routes>
        <Routes>  
          <Route exact path="/users"  element={<ListUsers/>}/>          
        </Routes>
    </BrowserRouter>
   
    </div>
  );
}

export default App;
