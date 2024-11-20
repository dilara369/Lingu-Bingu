import { Outlet } from "react-router-dom";

import Navbar from "../component/Navbar";


const MianLayout = () => {
    return (
        <div>
            {/* nabver  */}
         <Navbar/>
         <section className="w-11/12 mx-auto"> 
            <Outlet></Outlet>
            </section>
            {/* footer  */}
        </div>
    );
};

export default MianLayout;

