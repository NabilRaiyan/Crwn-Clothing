import { Outlet } from "react-router-dom";


const Navigation = ()=>{
    return (
      <div>
        I am the navigation bar
        <Outlet />
      </div>
    );
  }

  export default Navigation;