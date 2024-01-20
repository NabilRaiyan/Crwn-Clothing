import {Routes, Route} from 'react-router-dom';
import Home from "./routes/home/home.component";
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication component/authentication';
//import SignUp from './components/sign-up-form/signUpFormComponent';

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
        <Route path='/authentication' element={<Authentication />}></Route>
        {/* <Route path='/sign-up' element={<SignUp />}></Route> */}
      </Route>
    </Routes>
    
  )
}

export default App;
