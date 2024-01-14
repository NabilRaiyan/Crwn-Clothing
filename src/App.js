import {Routes, Route, Outlet} from 'react-router-dom';
import Home from "./routes/home/home.component";

const Navigation = ()=>{
  return (
    <div>
      I am the navigation bar
      <Outlet />
    </div>
  );
}


const App = ()=> {
  return (
    // Rendering home page
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}></Route>
      </Route>
    </Routes>
    
  )
}

export default App;
