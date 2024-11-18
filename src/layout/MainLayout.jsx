import { Outlet } from "react-router-dom";

import Navbar from "../component/Navbar";


const MianLayout = () => {
    return (
        <div>
            {/* nabver  */}
         <Navbar/>
         
            <Outlet></Outlet>
            {/* footer  */}
        </div>
    );
};

export default MianLayout;

