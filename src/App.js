import {Routes, Route} from 'react-router-dom';
import Home from "./routes/home/home.component";
import Navigation from './routes/navigation/navigation.component';




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
