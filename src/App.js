import {Routes, Route} from 'react-router-dom';
import Home from "./routes/home/home.component";
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';

const Shop  = () =>{
  return (
    <div>
      <h1>SHOP PAGE</h1>
    </div>
  )
}


const App = ()=> {
  return (
    // Rendering home page
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/sign-in' element={<SignIn />}></Route>
      </Route>
    </Routes>
    
  )
}

export default App;
