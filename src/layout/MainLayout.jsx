import { Outlet } from "react-router-dom";

import Navbar from "../component/Navbar";
import Footer from "../component/Footer";


const MianLayout = () => {
    return (
        <div>
            {/* nabver  */}
         <Navbar/>
         <section className="w-11/12 mx-auto"> 
            <Outlet></Outlet>
            </section>
         <Footer/>
        </div>
    );
};

export default MianLayout;

